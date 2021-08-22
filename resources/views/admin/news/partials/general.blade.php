

<div class="row">
    <div class="col-md-4">
        <div class="font-bold col-green">{!! trans("admin_news.form.category") !!}</div>
        <div class="form-group form-float">
            <div class="form-line">
                <select name="news_category_id" id="news_category_id" class="form-control">
                    @foreach($categories as $rs)
                        <optgroup label="{{$rs->name}}" >
                            @foreach($rs->child as $child)
                            <option value="{{ $child->id }}" {{ !empty($news) && $news->news_category_id === $child->id ? 'selected' : '' }}>{{ $child->name }}</option>
                            @endforeach
                        </optgroup>
                    @endforeach
                </select>
            </div>
        </div>
    </div>

    <div class="col-md-8">
        <div class="font-bold col-green">{!! trans("admin_news.form.publish_at") !!}</div>
        <div class="form-group form-float">
            <div class="form-line">
                <input type="text" class="form-control datepicker" name="publish_at"
                       data-date-format="{!! JS_DATE !!}" id="publish_at"
                       value="{!! !empty($news)  ? $news->publish_at_format : old("publish_at") !!}">
                <div id="publish_at-container" style="position: relative"></div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-8">
        <div class="font-bold col-green">Image or pdf</div>
        <div class="form-group form-float">
            <div class="form-line">
                <input type="text" id="link_download_input" class="form-control"
                       name="image"
                       value="{!! !empty($news->image)  ? $news->image : old("image") !!}">
                <button type="button" class="btn btn-primary btn_select_a_file" data-append="#link_download_input" style="position: absolute; top: 2px; right:2px">{{ trans('button.or_select_a_file') }}</button>
            </div>
        </div>
    </div>
</div>
{{-- <div class="row">
    <div class="col-md-4">
        <div class="font-bold col-green">{!! trans("admin_news.form.image") !!}</div>
        <div class="form-group">
            @component('admin.layouts.components.upload_photo', [
                'image' => $news->image ?? null,
                'name' => 'image',
            ])
            @endcomponent
        </div>
    </div>

    <div class="col-md-4">
        <div class="font-bold col-green">{!! trans("admin_news.form.banner") !!}</div>
        <div class="form-group">
            @component('admin.layouts.components.upload_photo', [
                'image' => $news->banner ?? null,
                'name' => 'banner',
            ])
            @endcomponent
        </div>
    </div>
</div> --}}
<div class="row">
    <div class="col-md-4">
        <div class="form-group">
            <input type="checkbox" id="active" name="active"
                   value="1" {!! !empty($news) && $news->active ? "checked" : null !!}>
            <label for="active">{!! trans("admin_news.form.active") !!}</label>
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <input type="checkbox" id="is_top" name="is_top"
                   value="1" {!! !empty($news) && $news->is_top ? "checked" : null !!}>
            <label for="is_top">{!! trans("admin_news.form.is_top") !!}</label>
        </div>
    </div>
</div>