$(document).ready(function() {
    $('#annually').click(function() {
        $('#annually').toggleClass('active');
    });
    $('#annually').on('click', function() {
        $('.value-middle').html() == '24.99' ?
            $('.value-middle').html('249.99') :
            $('.value-middle').html('24.99');
        $('.value-left').html() == '19.99' ?
            $('.value-left').html('199.99') :
            $('.value-left').html('19.99');
        $('.value-right').html() == '39.99' ?
            $('.value-right').html('399.99') :
            $('.value-right').html('39.99');
    });
});