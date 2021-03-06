jQuery(function ($) {
    var linkDatatable = $('meta[name=linkDatatable]').attr('content');

    var _table = $("#datatable");
    var _btn_submit = $("#btn-submit");
    var _btn_reset = $("#btn-reset");

    var _datatable = _table.DataTable({
        processing: true,
        serverSide: true,
        lengthMenu: [[10, 25, 50, 100, 200, -1], [10, 25, 100, 200, "All"]],
        pageLength: 10,
        ajax: {
            url: linkDatatable,
        },
        columns: [
            {data: 'id', name: 'id'},
            {data: 'translations', name: 'translations.name', orderable: false},
            {data: 'city', name: 'city', orderable: false},
            {data: 'action', name: 'action', orderable: false, searchable: false}
        ],
        language: {
            url: '/assets/plugins/jquery-datatable/languages/'+COMPOSER_LOCALE+'.json'
        }
    });
});