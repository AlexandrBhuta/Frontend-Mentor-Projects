$(document).ready(() => {
    $('.toggle').click(() => {
        $('.nav-links, body, .top, .mid, .bott').toggleClass('active');
        if ($('.toggle').attr('src', '/images/icon-close.svg')) {
            $('.toggle').attr('src', '/images/icon-hamburger.svg');
        } else {
            $('.toggle').attr('src', '/images/icon-hamburger.svg');
        }
    })
})

$(window).resize(() => {
    if ($(window).width() >= 760) {
        $('.nav-links, body').removeClass('active');
    }
})