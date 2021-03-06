function allowType(types, type) {
    types = types.split("|");
    var result = new Array();
    if (types.indexOf(type) == -1) {
        var str = 'Support file type: ' + types.join(", ");
        result[0] = false;
        result[1] = str;
        return result;
    } else {
        result[0] = true;
        result[1] = 'success';
        return result;
    }
}

function allowSize(max_size, size) {
    max_size = parseInt(max_size);
    var result = new Array();
    if (size > max_size) {
        var str = 'The file size must less than ' + Math.round(max_size / 1024) + ' KB';
        result[0] = false;
        result[1] = str;
        return result;
    } else {
        result[0] = true;
        result[1] = 'success';
        return result;
    }
}

jQuery(function ($) {
    $("body").on("keypress keydown", ".noEnterSubmit", function (event) {
        if (event.which == 13) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
    });

    $("body").on("change", ".basic_upload_file", function (event) {
        event.stopPropagation();
        event.preventDefault();
        var accept_type = $(this).attr("accept_type");
        var name = this.files && this.files.length ? this.files[0].name : '';
        var size = name ? parseFloat(this.files[0].size / 1024) : null;

        // Check size upload
        if (size) {
            if (accept_type == "image") {
                var check = allowSize(MAX_IMAGE_UPLOAD_SIZE, size);
                if (!check[0]) {
                    $(this).val(null);
                    toastr["warning"](check[1]);
                    return false;
                }
            }
            else if(accept_type == "file"){
                var check = allowSize(MAX_FILE_UPLOAD_SIZE, size);
                if (!check[0]) {
                    $(this).val(null);
                    toastr["warning"](check[1]);
                    return false;
                }
            }
        }
        if (name) {
            name = name + "(" + size.toFixed(2) + " KB)";
        }
        $(this).closest('.wrap-input-file').find('.upload-file-info').html(name);
    })
});