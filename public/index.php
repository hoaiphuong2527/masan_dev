<?php
$cur_url = $_SERVER['REQUEST_URI'];

// if($cur_url == '/vi/tuyen-dung/cong-viec-dang-mo')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/vi/tuyen-dung/co-hoi-nghe-nghiep"); 
// 	exit(); 
// }
// 	if($cur_url == '/property-leasing/case-studies')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/property-leasing/case-studies-about-factory-for-rent-in-viet-nam"); 
// 	exit(); 
// }
// 	if($cur_url == '/vi/media-center/news/detail')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/vi/truyen-thong/tin-tuc-ve-dv-cho-thue-kho-xuong"); 
// 	exit(); 
// }
// 	if($cur_url == '/ko/media-center/news/detail')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/ko/media-centers/news"); 
// 	exit(); 
// }
// 	if($cur_url == '/project-category/ready-built-factory')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/project-category/ready-built-factory-for-rent"); 
// 	exit(); 
// }
// 	if($cur_url == '/project-category/logistics-warehouses')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/project-category/warehouse-vietnam-services"); 
// 	exit(); 
// }
// 	if($cur_url == '/project-category/built-to-suit-project')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/project-category/built-to-suit-factory-for-rent"); 
// 	exit(); 
// }
// 	if($cur_url == '/value-added-service')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/value-added-viet-nam-factory-services"); 
// 	exit(); 
// }
// 	if($cur_url == '/fund-management')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/service/invest-in-vietnam-guide"); 
// 	exit(); 
// }
// 	if($cur_url == '/vi/media-center/gallery/photo')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/vi/media-center/gallery/photos"); 
// 	exit(); 
// }
// 	if($cur_url == '/ko/media-center/gallery/photo')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/ko/media-center/gallery/photos"); 
// 	exit(); 
// }

// 	if($cur_url == '/ko/')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/ko"); 
// 	exit(); 
// }
// 	if($cur_url == '/vi/')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/vi"); 
// 	exit(); 
// }
// 	if($cur_url == '/vi/tuyen-dung/van-hoa-BW-industrial')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/vi/tuyen-dung/van-hoa-bw-industrial"); 
// 	exit(); 
// }
// 	if($cur_url == '/media-centers/news')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/media-center/news"); 
// 	exit(); 
// }
// 	if($cur_url == '/vi/media-center/news-category/tin-cong-nghiep-bw')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/vi/media-center/news-category/tin-cong-nghiep-bw/hoat-dong-cong-nghiep-bw"); 
// 	exit(); 
// }
// if($cur_url == '/ko/media-center/news-category/bw-industrial-news-2')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/ko/media-center/news-category/bw-industrial-news-2/activities-of-bw-industrial-2"); 
// 	exit(); 
// }
// if($cur_url == '/property-type')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/top-rated-factory-for-rent-in-vietnam"); 
// 	exit(); 
// }
// if($cur_url == '/zh/media-center/gallery/photo')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/zh/media-center/gallery/photos"); 
// 	exit(); 
// }
// if($cur_url == '/zh/media-center/news/detail')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/zh/media-centers/news"); 
// 	exit(); 
// }
// if($cur_url == '/ja/media-center/gallery/photo')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/ja/media-center/gallery/photos"); 
// 	exit(); 
// }
// if($cur_url == '/ja/media-center/news/detail')
// {
// 	header("HTTP/1.1 301 Moved Permanently"); 
// 	header("Location:https://www.bwidjsc.com/ja/media-centers/news"); 
// 	exit(); 
// }


/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylor@laravel.com>
 */

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our application. We just need to utilize it! We'll simply require it
| into the script here so that we don't have to worry about manual
| loading any of our classes later on. It feels great to relax.
|
*/

require __DIR__.'/../bootstrap/autoload.php';

/*
|--------------------------------------------------------------------------
| Turn On The Lights
|--------------------------------------------------------------------------
|
| We need to illuminate PHP development, so let us turn on the lights.
| This bootstraps the framework and gets it ready for use, then it
| will load up this application so that we can run it and send
| the responses back to the browser and delight our users.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request
| through the kernel, and send the associated response back to
| the client's browser allowing them to enjoy the creative
| and wonderful application we have prepared for them.
|
*/

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
