var mobileToggle = document.querySelector('.toggle');
var mobileMenu = document.querySelector('.nav-links');
var toggleTop = document.querySelector('.top');
var toggleMid = document.querySelector('.mid');
var toggleBott = document.querySelector('.bott');
var toggleDiv = document.querySelector('div');
var changeLogo = document.querySelector('.bookmark-logo');

mobileToggle.addEventListener('click', () => {
    toggleTop.classList.toggle('active');
    toggleMid.classList.toggle('active');
    toggleBott.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    toggleDiv.classList.toggle('active');
})

$(window).resize(() => {
    if ($(window).width() >= 768) {
        toggleTop.classList.remove('active');
        toggleMid.classList.remove('active');
        toggleBott.classList.remove('active');
        mobileMenu.classList.remove('active');
        toggleDiv.classList.remove('active');
    }
})

//The information and illustration change on the features section
$(document).ready(() => {
    $('.topic-one').click(() => {
        $('.indicator').css('margin-top', '80px');
        $('.indicator-mob').css('left', 'calc(50% - 310px');
        $('.slider-image').attr('src', '/images/illustration-features-tab-1.svg')
        $('.slider-header').html('Bookmark in one click');
        $('.slider-paragraph').html('Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.')
        $('')
    })
    $('.topic-two').click(() => {
        $('.indicator').css('margin-top', '142px');
        $('.indicator-mob').css('left', 'calc(50% - 70px');
        $('.slider-image').attr('src', '/images/illustration-features-tab-2.svg')
        $('.slider-header').html('Intelligent search');
        $('.slider-paragraph').html('Our powerful search feature will help you find saved sites in not time at all. No need to trawl through all your bookmarks.')
    })
    $('.topic-three').click(() => {
        $('.indicator').css('margin-top', '202px');
        $('.indicator-mob').css('left', 'calc(50% + 130px');
        $('.slider-image').attr('src', '/images/illustration-features-tab-3.svg')
        $('.slider-header').html('Share your bookmarks');
        $('.slider-paragraph').html('Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')
    })
})

$(document).ready(() => {
    $('.first').click(() => {
        $('.info-first, #arrow1').toggleClass('active');
        $('.info-second, .info-third, .info-last, #arrow2, #arrow3, #arrow4').removeClass('active');
    })
    $('.second').click(() => {
        $('.info-second, #arrow2').toggleClass('active');
        $('.info-first, .info-third, .info-last, #arrow1, #arrow3, #arrow4').removeClass('active');
    })
    $('.third').click(() => {
        $('.info-third, #arrow3').toggleClass('active');
        $('.info-second, .info-first, .info-last, #arrow1, #arrow2, #arrow4').removeClass('active');
    })
    $('.last').click(() => {
        $('.info-last, #arrow4').toggleClass('active');
        $('.info-second, .info-third, .info-first, #arrow1, #arrow2, #arrow3').removeClass('active');
    })
})