<?php

namespace App\Models;

use App\Traits\SlugTranslationTrait;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use App\Traits\TranslatableExtendTrait;
use Prettus\Repository\Traits\TransformableTrait;
use App\Traits\MetadataTrait;
use DB;

class InvestCategory extends Model implements Transformable
{
    use \Dimsav\Translatable\Translatable, TransformableTrait, SlugTranslationTrait,TranslatableExtendTrait, MetadataTrait;

    protected $table = 'invest_categories';

    protected $fillable = [
        'position',
        'code',
        'parent_id',
        'banner'
    ];

    public $translatedAttributes = ['slug', 'name'];

    public $slug_from_source = 'name'; // dung title để chuyển qua slug trong translation, default name

    public function news()
    {
        return $this->hasMany(Investments::class, "invest_category_id")->where("active",'=',1)->orderBy('publish_at','desc');
    }

    public function newsByCategoryParentId($parent_id)
    {
        $news = Investments::selectRaw('investments.*')
                            ->join('invest_categories','invest_categories.id','=','investments.invest_category_id')
                            ->where('invest_categories.parent_id','=',$parent_id)
                            ->where('investments.active','=',1)
                            ->orderBy('publish_at','desc');
        return $news;
    }

    public function getUrlAttribute()
    {
        return route('investments.category', [
            'category' => $this->slug
        ]);
    }

    public function parent()
    {
        return $this->belongsTo(self::class,'parent_id');
    }

    public function child()
    {
        return $this->hasMany(self::class,'parent_id');
    }
}
