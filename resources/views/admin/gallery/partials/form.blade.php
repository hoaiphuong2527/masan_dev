<div class="row">
    <div class="col-md-4">
        <div class="font-bold col-green">{!! trans("admin_gallery.form.thumbnail") !!}</div>
        <div class="form-group">
            @component('admin.layouts.components.upload_photo', [
                'image' => $gallery->thumbnail ?? null,
                'name' => 'thumbnail',
            ])
            @endcomponent
        </div>
    </div>
</div>
<div class="row">
    <div style="padding: 20px; ">
        <h4>Active in home</h4>
        <div class="col-md-4">
            <div class="form-group">
                <input type="checkbox" id="is_top" name="is_top"
                       value="1" {!! !empty($gallery) && $gallery->is_top ? "checked" : null !!}>
                <label for="is_top">{!! trans("admin_news.form.active") !!}</label>
            </div>
        </div>

        <div class="col-md-2 hidden">
            <input type="radio" name="type" value="VIDEOS" id="VIDEOS"
                    checked
                     >
            <label for="VIDEOS">VIDEOS</label>
        </div>
    </div>
</div>

{{-- <div id="tab-photos" @if(!empty($gallery) && $gallery->type === 'VIDEOS') class="hidden" @endif>
    <ul id="sortable-photos" class="list-photos">
        @if(!empty($gallery) && $gallery->type === 'IMAGES')
            @foreach($gallery->medias as $rs)
                @component('admin.layouts.components.li_photo', [
                    'photo_id' => $rs->id,
                    'photo_path' => $rs->path,
                    'input_delete' => 'delete_photos[]'
                ])
                @endcomponent
            @endforeach
        @endif
    </ul>

    <div class="text-center">
        <button type="button" class="btn btn-primary ckfinder-multi" data-append="#sortable-photos"
                data-name="photos[]">
            {{ trans('button.add_photos') }}
        </button>
    </div>
</div>

<div class="clear-fix"></div> --}}

<div id="tab-video">
    <div class="row">
        <div class="col-md-6 col-sm-6">
            <div class="font-bold col-green">{!! trans("admin_gallery.form.link_video") !!}</div>
            <div class="form-group form-float">
                <div class="form-line">
                    <input type="text" class="form-control" name="url_video"
                           value="{{ !empty($gallery) ? $gallery->url_video : old("url_video") }}">
                </div>
            </div>
        </div>
    </div>
</div>


<div class="row" style="margin-top: 10px">
    <div class="col-md-6 col-sm-6">
        <div class="font-bold col-green">{!! trans('admin_gallery.form.position') !!}</div>
        <div class="form-group form-float">
            <div class="form-line">
                <input type="number" class="form-control" name="position" value="{{ $gallery->position ?? 0 }}" required
                       min="0">
            </div>
        </div>
    </div>
    <div class="col-md-6 col-sm-6">
        <div class="font-bold col-green">{!! trans("admin_gallery.form.published_date") !!}</div>
        <div class="form-group form-float">
            <div class="form-line">
                <input type="text" class="form-control datepicker" name="published_date"
                       data-date-format="{!! JS_DATE !!}" id="published_date"
                       value="{!! !empty($gallery) ? $gallery->published_date_format : old("published_date") !!}">
                <div id="published_date-container" style="position: relative"></div>
            </div>
        </div>
    </div>
</div>

@include('admin.translation.nav_tab', [
    'object_trans' => $gallery ?? null,
    'default_tab' => $composer_locale,
    'form_fields' => [
        ['type' => 'text', 'name' => 'name', ],
        !empty($gallery) ? ['type' => 'text', 'name' => 'slug',  ] : null,
        ['type' => 'textarea', 'name' => 'description']
    ],
    'metadata' => $metadata ?? null,
    'tab_seo' => true,
    'translation_file' => 'admin_gallery',
])