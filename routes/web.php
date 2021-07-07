<?php
Route::get('remove-cache', function(){
    removeAllConfig();
    echo 'removed all caching';
});

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => [
            #'localeSessionRedirect',
            'localizationRedirect'
        ]
    ],
    function () {
        Route::get('/', 'PageController@index')->name('page.home');

        Route::get(trans('routes.project_category'), 'ProjectController@getProjectCategoryDetail')->name('frontend.project_category_detail');
        Route::get(trans('routes.project'),'ProjectController@getProjectDetail')->name('frontend.project_detail');

        Route::post('contact', 'PageController@storeContact')->name('page.storeContact');

        Route::get('search', 'PageController@getSearch')->name('page.search');

        Route::get('media-center/gallery/photo/{slug}', 'GalleryController@getPhoto')->name('media.gallery.photo.detail');
        Route::get('media-center/gallery/video/{slug}', 'GalleryController@getVideo')->name('media.gallery.video.detail');

        Route::get(trans('routes.media_center_news_category'), 'NewsController@getNewsCategory')->name('media.news.category');
        Route::get('media-center/news/detail/{slug}', 'NewsController@getNewsDetail')->name('media.news.detail');

        Route::get(LaravelLocalization::transRoute('routes.coming_soon'), function (){
            return view('frontend.coming');
        })->name('page.coming_soon');

        Route::get(trans('routes.service'), 'ServiceController@getServiceDetail')->name('frontend.service.detail');

        Route::get('{slug}', 'PageController@show')->name('page.show')->where('slug', '(.*)?');

    });