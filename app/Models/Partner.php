<?php

namespace App\Models;

use App\Traits\MetadataTrait;
use App\Traits\SlugTranslationTrait;
use App\Traits\TranslatableExtendTrait;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Partner extends Model implements Transformable
{
    use \Dimsav\Translatable\Translatable, TranslatableExtendTrait,  TransformableTrait, MetadataTrait, SlugTranslationTrait;

    protected $table = 'partner';

    protected $fillable = [
        'photo',
        'logo',
        'pictures',
        'position',
        'business_id',
        'country_id',
        'link'
    ];

    public $translatedAttributes = [
        'name',
        'slug',
        'address',
        'description',
        'content'
    ];

    public $slug_from_source = 'name';

    public function business()
    {
        return $this->belongsTo(Business::class, "business_id");
    }

    public function country()
    {
        return $this->belongsTo(Country::class, "country_id");
    }

    public function pictures_array()
    {
        return json_decode($this->pictures, true) ?? [];
    }

    public function getContentAttribute()
    {
        $array_view = [];
        if(view()->exists('themes._slider1_shortcode'))
            $array_view['SLIDER1'] = view('themes._slider1_shortcode')->render();
        if(view()->exists('themes._slider2_shortcode'))
            $array_view['SLIDER2'] = view('themes._slider2_shortcode')->render();

        return replacement($this->attributes['content'],$array_view);
    }

    public function scopeOrderByTranslation($query, $name, $type = 'ASC')
    {
        return $query->join('partner_translation', function ($join) {
            $locale = \App::getLocale();
            $join->on('partner.id', '=', 'partner_translation.partner_id')
                ->where('partner_translation.locale', '=', $locale);
        })->orderBy("partner_translation.{$name}", $type);
    }
}
