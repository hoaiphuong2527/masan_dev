<?php
/**  * Created by PhpStorm.
 * User: Hadesker - HienNV
 * Date: 9/13/2018
 * Time: 4:17 PM
 */

namespace App\Helper;

class Search
{
    public $type;
    public $url;
    public $title;
    public $description;

    public static $TYPE_PAGE = 1;
    public static $TYPE_NEWS = 2;
    public static $TYPE_MEDIA = 4;
    public static $TYPE_INVEST = 3;

    public function getTypeName()
    {
        switch ($this->type)
        {
            case self::$TYPE_PAGE : return trans('frontend.page');
            case self::$TYPE_INVEST : return trans('frontend.investment');
            case self::$TYPE_NEWS : return trans('frontend.news');
            case self::$TYPE_MEDIA : return trans('frontend.media_center');

            default: return trans('frontend.page');
        }
    }
}