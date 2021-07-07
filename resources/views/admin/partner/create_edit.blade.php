@extends("admin.layouts.master")

@section("style")
    <!--select 2 plugin-->
    <link rel="stylesheet" href="/assets/plugins/select2/css/select2.min.css"/>
@endsection

@section("content")
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="body">
                    @include('admin.layouts.partials.message')

                    @component('admin.layouts.components.form', [
                        'form_method' =>  empty($partner) ? 'POST' : 'PUT',
                        'form_url' => empty($partner) ? route("admin.partner.store") : route("admin.partner.update", $partner->id)
                    ])
                        @include('admin.translation.nav_tab', [
                            'default_tabs' => [
                                [
                                    'id' => 'general',
                                    'name' => trans('admin_tab.general'),
                                    'path' => 'admin.partner.partials.general'
                                ],
                                [
                                    'id' => 'photos',
                                    'name' => trans('admin_tab.photos'),
                                    'path' => 'admin.partner.partials.photos'
                                ],
                            ],
                            'object_trans' => $partner ?? null,
                            'default_tab' => 'general',
                            'form_fields' => [
                                ['type' => 'text', 'name' => 'name'],
                                !empty($partner) ? ['type' => 'text', 'name' => 'slug'] : null,
                                ['type' => 'ckeditor', 'name' => 'address'],
                                ['type' => 'ckeditor', 'name' => 'content']
                            ],
                            'form_plugins' => ['ckeditor'],
                            'tab_seo' => true,
                            'metadata' => $metadata ?? null,
                            'translation_file' => 'admin_partner'
                        ])

                        {{--Buttons--}}
                        @include("admin.layouts.partials.form_buttons", [
                            "cancel" => route("admin.partner.index")
                        ])
                    @endcomponent
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <!--select 2 plugin-->
    <script src="/assets/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
@endsection