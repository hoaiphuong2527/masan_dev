<?php

namespace App\Repositories;

use App\Models\ObjectMedia;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Models\Gallery;
use App\Traits\UploadPhotoTrait;
use App\Validators\GalleryValidator;
use DB;

/**
 * Class ProductRepositoryEloquent
 *
 * @package namespace App\Repositories;
 */
class GalleryRepositoryEloquent extends BaseRepository implements GalleryRepository
{
    use UploadPhotoTrait;

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Gallery::class;
    }

    public function validator()
    {
        return GalleryValidator::class;
    }

    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function datatable()
    {
        return $this->model->select('*')->withTranslation();
    }

    public function create(array $input)
    {
        $input['is_top'] = !empty($input['is_top']) ? 1 : 0;

        $input['published_date'] = !empty($input['published_date']) ? cvDbTime($input['published_date'], PHP_DATE, DB_DATE) : date("Y-m-d");

        if ($input['type'] == Gallery::TYPE_VIDEOS) {
            $input['url_video'] = $input['url_video'];
        } else {
            $input['url_video'] = null;
        }

        $model = $this->model->create($input);
        if (!empty($input['metadata'])) {
            $model->metaCreateOrUpdate($input['metadata']);
        }

        if ($input['type'] == Gallery::TYPE_IMAGES) {
            if (!empty($input['photos'])) {
                $model->createMedia($input['photos']);
            }
        }

        $model->updateSlugTranslation();

        return $model;

    }

    public function update(array $input, $id)
    {
        $model = $this->model->findOrFail($id);
        $input['is_top'] = !empty($input['is_top']) ? 1 : 0;

        if ($input['type'] == Gallery::TYPE_VIDEOS) {
            $input['url_video'] = $input['url_video'];
        } else {
            $input['url_video'] = null;
        }

        if ($model->type == Gallery::TYPE_IMAGES && $input['type'] == Gallery::TYPE_VIDEOS) {
            $model->medias()->delete();
        }

        $input['published_date'] = !empty($input['published_date']) ? cvDbTime($input['published_date'], PHP_DATE, DB_DATE) : date("Y-m-d");

        $model->update($input);

        if (!empty($input['metadata'])) {
            $model->metaCreateOrUpdate($input['metadata']);
        }

        if ($input['type'] == Gallery::TYPE_IMAGES) {
            if (!empty($input['photos'])) {
                $model->createMedia($input['photos']);
            }
        }

        if (!empty($input['delete_photos'])) {
            ObjectMedia::whereIn('id', $input['delete_photos'])->delete();
        }

        $model->updateSlugTranslation();

        $locales = \Config::get('translatable.locales');

        foreach($locales as $locale){
            if(!empty($input[$locale]['slug'])){
                $slug = $input[$locale]['slug'];
                DB::table('gallery_translation')
                    ->where('gallery_id', $id)->where('locale', $locale)
                    ->update(['slug' => $slug]);
            }
        }

        return $model;
    }

    public function delete($id)
    {
        $model = $this->model->findOrFail($id);

        $model->medias()->delete();

        //delete
        $model->delete();
    }

    public function sortPhoto($positions)
    {
        $arr = explode('&', $positions);
        if ($arr && count($arr)) {
            for ($i = 0; $i < count($arr); $i++) {
                $_arr = explode('=', $arr[$i]);
                ObjectMedia::where('id', $_arr[0])->update(['position' => $_arr[1]]);
            }
        }
    }

    public function galleryByType($type, $limit = 7)
    {
        return $this->model
            ->withTranslation()
            ->where('type', $type)
            ->orderBy('published_date', 'DESC')
            ->paginate($limit);
    }

    public function otherGallery($id, $type, $limit = 8)
    {
        return $this->model
            ->withTranslation()
            ->where('type', $type)
            ->where('id', '!=', $id)
            ->orderBy('published_date', 'DESC')
            ->limit($limit)
            ->get();
    }

    public function findBySlug($slug)
    {
        $locale = \App::getLocale();
        return $this->model
            ->whereTranslation('slug', $slug, $locale)
            ->with('translations')
            ->firstOrFail();
    }
    public function homeGallery($limit = 0, $is_top = false)
    {
        $model = $this->model->active()
            ->requiredTranslation()
            ->with('translations')

            ->withTranslation();
        if ($is_top) {
            $model->orderBy('is_top', 'desc');
        }
        $model->orderBy('is_top', 'desc')
            ->orderBy('publish_at', 'desc');

        if ($limit) {
            return $model->limit($limit)
                ->get();
        }
        return $model->paginate(9);
    }
}
