/**
 * Created by supersoup on 16/8/4.
 */
$(function () {
    var query = decodeURIComponent(location.search);
    var fileUrl = query.split('?')[1];
    if (fileUrl !== '') {
        $('#xmp').html('').load(fileUrl, function () {
            $('<script src="strapdown.js"></script>').appendTo($('body'));
        });
    }
});