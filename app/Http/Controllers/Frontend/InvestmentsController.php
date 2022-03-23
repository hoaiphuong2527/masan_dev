<?php

namespace App\Http\Controllers\Frontend;

use App\Helper\TranslateUrl;
use App\Http\Controllers\Controller;
use App\Models\Catalogue;
use App\Models\Page;
use App\Models\Slider;
use App\Repositories\CatalogueRepository;
use App\Repositories\InvestmentsRepository;
use App\Repositories\InvestCategoryRepository;
use Breadcrumb;
use DB;
use App;
use Carbon\Carbon;

class InvestmentsController extends Controller
{
    protected $investments;
    protected $investments_category;

    public function __construct(
        InvestmentsRepository $investments,
        InvestCategoryRepository $investments_category
    )
    {
        $this->investments = $investments;
        $this->investments_category = $investments_category;


    }

    public function getNewsCategory($parent_slug, $slug = null)
    {
        $news_category_parent = $this->investments_category->findBySlug($parent_slug);
        Breadcrumb::add($news_category_parent->name, route('media.investments.category',['parent_slug'=>$news_category_parent->slug]));
        if($slug){
            $slug = $slug ?? $news_category_parent->child()->first()->slug;
            $news_category = $this->investments_category->findBySlug($slug);
            Breadcrumb::add($news_category->name, route('media.investments.category',['parent_slug'=>$news_category_parent->slug,'slug'=>$news_category->slug]));  
            $annual_report = $news_category->news()->orderByDesc('publish_at')->where('is_top', 0)->paginate(9);
            $news = $news_category->news()->orderByDesc('publish_at')->get()->groupBy(function($val) {
                return Carbon::parse($val->publish_at)->format('Y');
          })->toArray();
            $top_news = $news_category->news()->where('is_top', 1)->first();
        }
        else{

            $slug = $slug ?? $news_category_parent->child()->first()->slug;
            $news_category = $this->investments_category->findBySlug($slug);            
            $top_news = $news_category->news()->where('is_top', 1)->first();
            $annual_report = $news_category->news()->orderByDesc('publish_at')->where('is_top', 0)->paginate(9);
            $news = $news_category->news()->orderByDesc('publish_at')->get()->groupBy(function($val) {
                return Carbon::parse($val->publish_at)->format('Y');
          })->toArray();
        //   var_dump($news_category_parent);die;

        }

        foreach ($news_category_parent->translations as $translation) {
            TranslateUrl::addWithLink($translation->locale, \LaravelLocalization::getURLFromRouteNameTranslated($translation->locale, 'routes.invest_category', ['parent_slug'=>$translation->slug]));
        }
        $metadata = $news_category->meta;
        return view('themes.media_invest_list',compact('news_category_parent','news_category','news','metadata','top_news','annual_report'));
    }

    public function getNewsDetail($slug)
    {
        $get_locale = App::getLocale();
        $news = $this->investments->findBySlug($slug);
        $news_relative = $this->investments->datatable()->where('id','!=',$news->id)->limit(10)->get();
        Breadcrumb::add( $news->title, url()->current());
        $metadata = DB::table('metadata')
            ->join('metadata_translations', 'metadata.id', '=', 'metadata_translations.metadata_id')
            ->where('metadata.object_id',$news->id)
            ->where('meta_key', 'investments')
            ->where('metadata_translations.locale', $get_locale)
            ->first();
        foreach ($news->translations as $translation) {
            TranslateUrl::addWithLink($translation->locale, \LaravelLocalization::getURLFromRouteNameTranslated($translation->locale, 'routes.invest_detail', ['slug'=>$translation->slug]));
        }

        return view('themes.media_invest_detail',compact('news','news_relative','metadata'));
    }
}
