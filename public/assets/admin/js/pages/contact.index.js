jQuery(function ($) {
    var linkDatatable = $('meta[name=linkDatatable]').attr('content');

    var _table = $("#datatable");

    var datatable = _table.DataTable({
        processing: true,
        serverSide: true,
        lengthMenu: [[10, 25, 50, 100, 200,-1], [10, 25, 100, 200, "All"]],
        pageLength: 10,
        ajax: {
            url: linkDatatable,
        },
        columns: [
            {data: 'id', name: 'id'},
            {data: 'name', name: 'name', orderable: false},
            {data: 'email', name: 'email', orderable: false},
            {data: 'created_at', name: 'created_at', orderable: false},
            {data: 'action', name: 'action', orderable: false, searchable: false}
        ],
        language: {
            url: '/assets/plugins/jquery-datatable/languages/'+COMPOSER_LOCALE+'.json'
        }
    });

    // Add event listener for opening and closing details
    $('#datatable tbody').on('click', '.btn-detail', function () {
        var template = $("#details-template").html();

        var tr = $(this).closest('tr');
        var row = datatable.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            template = template
                .replace('CONTACT_SUBJECT', row.data().subject)
                .replace('CONTACT_COMPANY', row.data().company)
                .replace('CONTACT_COMPANY_PROFILE', row.data().company_profile)
                .replace('CONTACT_INFORMATION', row.data().information);
            // Open this row
            row.child( template ).show();
            tr.addClass('shown');
        }
    });
});