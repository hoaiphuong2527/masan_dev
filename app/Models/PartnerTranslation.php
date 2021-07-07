<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PartnerTranslation extends Model
{
    protected $table = 'partner_translation';

    protected $fillable = [
        'name',
        'slug',
        'address',
        'description',
        'content'
    ];

    public $timestamps = false;
}
