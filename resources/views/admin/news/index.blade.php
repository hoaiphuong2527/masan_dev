@extends("admin.layouts.master")

@section("meta")
    <meta name="linkDatatable" content="{{ route('admin.news.datatable') }}"/>
@endsection

@section("style")
    <!--dataTables plugin-->
    <link rel="stylesheet" href="/assets/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css"/>
@endsection


@section("content")
<div class="row clearfix">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <div class="header">
                <a href="{!! route("admin.news.create") !!}" class="btn btn-info waves-effect pull-right">
                    <i class="material-icons">add</i>
                    <span>{!! trans("button.create") !!}</span>
                </a>
                <h2>
                    {!! trans("admin_news.list") !!}
                </h2>
                <div class="clearfix"></div>
            </div>
            <div class="body">

                @include("admin.layouts.partials.message")

                <table id="datatable" class="table table-bordered table-striped table-hover dataTable" style="width: 100%">
                    <thead>
                    <tr>
                        <th width="40">{!! trans("admin_news.table.id") !!}</th>
{{--                        <th>{!! trans("admin_news.table.category") !!}</th>--}}
                        <th>{!! trans("admin_news.table.title") !!}</th>
                        <th>{!! trans("admin_news.table.active") !!}</th>
                        <th>{!! trans("admin_news.table.is_top") !!}</th>
                        <th>{!! trans("admin_news.table.publish_at") !!}</th>
                        <th width="150">{!! trans("admin_news.table.action") !!}</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

@section("script")
    @include("admin.layouts.partials.modal-delete")

    <!--dataTables plugin-->
    <script src="/assets/plugins/jquery-datatable/jquery.dataTables.js" type="text/javascript"></script>
    <script src="/assets/plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js" type="text/javascript"></script>


    <script type="text/javascript" src="/assets/admin/js/pages/news.index.js?v=1.0"></script>
@endsection