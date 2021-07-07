<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class InvestCategoryTranslation extends Model
{
    protected $table = 'invest_category_translation';

    protected $fillable = [
        'slug',
        'name'
    ];

    public $timestamps = false;
}
