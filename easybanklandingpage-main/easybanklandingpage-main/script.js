$(document).ready(() => {
    $('.hamburger').click(() => {
        $('.top, .middle, .bottom').toggleClass('active');
        $('.nav-links ul').toggleClass('active');
        $('body').toggleClass('active');
        $('.mobile-shadow').toggleClass('active')
    })
    $('.home, .about, .blog').click(() => {
        $('.top, .middle, .bottom').removeClass('active');
        $('.nav-links ul').removeClass('active');
        $('body').removeClass('active')
        $('.mobile-shadow').removeClass('active')

    })
    $('.facebook').mouseenter(() => {
        $('.facebook').attr('src', '/images/icon-fbgreen.svg')
    })
    $('.facebook').mouseleave(() => {
        $('.facebook').attr('src', '/images/icon-facebook.svg')
    })
    $('.youtube').mouseenter(() => {
        $('.youtube').attr('src', '/images/icon-ytgreen.svg')
    })
    $('.youtube').mouseleave(() => {
        $('.youtube').attr('src', '/images/icon-youtube.svg')
    })
    $('.twitter').mouseenter(() => {
        $('.twitter').attr('src', '/images/icon-twtgreen.svg')
    })
    $('.twitter').mouseleave(() => {
        $('.twitter').attr('src', '/images/icon-twitter.svg')
    })
    $('.instagram').mouseenter(() => {
        $('.instagram').attr('src', '/images/icon-instagreen.svg')
    })
    $('.instagram').mouseleave(() => {
        $('.instagram').attr('src', '/images/icon-instagram.svg')
    })
    $('.pinterest').mouseenter(() => {
        $('.pinterest').attr('src', '/images/icon-pintgreen.svg')
    })
    $('.pinterest').mouseleave(() => {
        $('.pinterest').attr('src', '/images/icon-pinterest.svg')
    })
});


$(window).resize(() => {
    if ($(window).width() >= 1050) {
        $('.nav-links ul').removeClass('active');
        $('.top, .middle, .bottom').removeClass('active');
        $('body').removeClass('active');
        $('.mobile-shadow').removeClass('active')

    }
})