<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvestmentsTranslation extends Model
{
    protected $table = "investments_translation";
    protected $fillable = [
        "title",
        "slug",
        "shortdesc",
        "description",
        "content"
    ];

    public $timestamps = false;
}
