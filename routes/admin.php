<?php
Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localeSessionRedirect', 'localizationRedirect']
    ],
    function () {
        Route::group(["prefix" => "admin"], function () {

            Auth::routes();

            Route::group(['middleware' => ['auth', "permission:admin.index"]], function () {

                Route::get('/', 'DashboardController@index')->name("admin.dashboard.index")->middleware("permission:admin.index");

                // Products
                // Route::put('products/{id}/sort-photo', 'ProductController@sortPhoto')->name("admin.product.photo.sort")->middleware("permission:admin.product.edit");
                // Route::get('products/create/load-block', 'ProductController@loadBlock')->name("admin.product.load.block")->middleware("permission:admin.product.create", 'permission:admin.product.edit');
                // resourceAdmin('products', 'ProductController', 'product');

                // News
                resourceAdmin('news-categories', 'NewsCategoryController', 'news_category', 'news.category');
                resourceAdmin('news', 'NewsController', 'news');

                // Investments
                resourceAdmin('investments-categories', 'InvestCategoryController', 'invest_category', 'invest.category');
                resourceAdmin('investments', 'InvestmentsController', 'investments');

                // Service
                resourceAdmin('service', 'ServiceController', 'service');

                // Resource
                resourceAdmin('brochures', 'BrochuresController', 'brochures');

                // Career
                Route::group(['prefix' => 'careers'], function () {
                    Route::get('application-list', 'CareerController@application')->name("admin.career.application")->middleware("permission:admin.career.application");
                    Route::get('application-list-datatable', 'CareerController@applicationDatatable')->name("admin.career.application.datatable")->middleware("permission:admin.career.application");

                    resourceAdmin('categories', 'CareerCategoryController', 'career_category', 'career');
                });
                resourceAdmin('careers', 'CareerController', 'career');

                // Contact
                resourceAdmin('contacts', 'ContactController', 'contact', 'contact', ['show', 'edit', 'create']);
                Route::get('contacts/export/excel','ContactController@export_excel')->name('admin.contact.export_excel');


                // Register
                resourceAdmin('register', 'RegisterController', 'register', 'register', ['show', 'edit', 'create']);
                Route::get('register/export/excel','RegisterController@export_excel')->name('admin.register.export_excel');

                // Rfp
                resourceAdmin('rfps', 'RfpController', 'rfp', 'rfp', ['show', 'edit', 'create']);

                // Page
                resourceAdmin('themes', 'ThemeController', 'theme');
                Route::get('pages/create/load-block', 'PageController@loadBlock')->name("admin.page.load.block")->middleware("permission:admin.page.create", 'permission:admin.page.edit');
                resourceAdmin('pages', 'PageController', 'page');

                Route::get('image-maps/point-edit/{id}', 'ImageMapController@editPoint')->name("admin.page.point.edit")->middleware('permission:admin.image.map.edit');
                Route::put('image-maps/point-edit/{id}', 'ImageMapController@updatePoint')->name("admin.page.point.update")->middleware('permission:admin.image.map.edit');
                resourceAdmin('image-maps', 'ImageMapController', 'image_map', 'image.map');

                resourceAdmin('sliders', 'SliderController', 'slider');

                resourceAdmin('users', 'UserController', 'user');

                resourceAdmin('activity', 'ActivityController', 'activity');

                resourceAdmin('roles', 'RoleController', 'role');

                resourceAdmin('system', 'SystemController', 'system', 'system', ['show', 'index', 'create', 'destroy']);

               resourceAdmin('gallery', 'GalleryController', 'gallery');
               Route::put('gallery/{id}/sort-photo', 'GalleryController@sortPhoto')->name("admin.gallery.photo.sort")->middleware("permission:admin.gallery.edit");
            });
        });
    });
