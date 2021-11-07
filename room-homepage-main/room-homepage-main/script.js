let openMenu = document.querySelector('.toggle');
let closeMenu = document.querySelector('.close');
let navLinks = document.querySelector('.nav-links');
let mobileNav = document.querySelector('.mobile-nav');
let nav = document.querySelector('.nav');
let overlay = document.querySelector('.shadow');
let noScroll = document.querySelector('body');

openMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileNav.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    noScroll.classList.toggle('active');
})

closeMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileNav.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    noScroll.classList.toggle('active');
})

const photo = [
    "url(/images/desktop-image-hero-1.jpg)",
    "url(/images/desktop-image-hero-2.jpg)",
    "url(/images/desktop-image-hero-3.jpg)",
]

const heading = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials",
]

const paragraph = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
]


let i = 0;
let j = 0;
let k = 0;
document.querySelector('.right-arrow').addEventListener('click', () => {
    i = i < heading.length - 1 ? ++i : 0;
    j = j < paragraph.length - 1 ? ++j : 0;
    k = k < photo.length - 1 ? ++k : 0;
    document.querySelector('.home-heading').innerHTML = heading[i];
    document.querySelector('.home-paragraph').innerHTML = paragraph[j];
    document.querySelector('.home').style.backgroundImage = photo[k];
    document.querySelector('.home').classList.add('animate');
    document.querySelector('.home').addEventListener('transitionend', () => {
        document.querySelector('.home').classList.remove('animate');
    })
    document.querySelector('.home-text').classList.add('animate');
    document.querySelector('.home-text').addEventListener('transitionend', () => {
        document.querySelector('.home-text').classList.remove('animate');
    })
})

document.addEventListener('keydown', (e) => {
    if (e.which == 37) {
        i = i < heading.length - 1 ? ++i : 0;
        j = j < paragraph.length - 1 ? ++j : 0;
        k = k < photo.length - 1 ? ++k : 0;
        document.querySelector('.home-heading').innerHTML = heading[i];
        document.querySelector('.home-paragraph').innerHTML = paragraph[j];
        document.querySelector('.home').style.backgroundImage = photo[k];
        document.querySelector('.home').classList.add('animate');
        document.querySelector('.home').addEventListener('transitionend', () => {
            document.querySelector('.home').classList.remove('animate');
        })
        document.querySelector('.home-text').classList.add('animate');
        document.querySelector('.home-text').addEventListener('transitionend', () => {
            document.querySelector('.home-text').classList.remove('animate');
        })
        document.querySelector('.left-arrow').classList.add('active');

    } else if (e.which == 39) {
        l = l < heading.length - 1 ? ++l : 0;
        m = m < paragraph.length - 1 ? ++m : 0;
        n = n < photo.length - 1 ? ++n : 0;
        document.querySelector('.home-heading').innerHTML = heading[l];
        document.querySelector('.home-paragraph').innerHTML = paragraph[m];
        document.querySelector('.home').style.backgroundImage = photo[n];
        document.querySelector('.home').classList.add('animate');
        document.querySelector('.home').addEventListener('transitionend', () => {
            document.querySelector('.home').classList.remove('animate');
        })
        document.querySelector('.home-text').classList.add('animate');
        document.querySelector('.home-text').addEventListener('transitionend', () => {
            document.querySelector('.home-text').classList.remove('animate');
        })
        document.querySelector('.right-arrow').classList.add('active');

    }
});

document.addEventListener('keyup', (e) => {
    if (e.which == 37) {
        document.querySelector('.left-arrow').classList.remove('active');
    } else if (e.which == 39) {
        document.querySelector('.right-arrow').classList.remove('active');
    }
})

let l = 0;
let m = 0;
let n = 0;
document.querySelector('.left-arrow').addEventListener('click', () => {
    l = l < heading.length - 1 ? ++l : 0;
    m = m < paragraph.length - 1 ? ++m : 0;
    n = n < photo.length - 1 ? ++n : 0;
    document.querySelector('.home-heading').innerHTML = heading[l];
    document.querySelector('.home-paragraph').innerHTML = paragraph[m];
    document.querySelector('.home').style.backgroundImage = photo[n];
    document.querySelector('.home').classList.add('active');
    document.querySelector('.home').classList.add('animate');
    document.querySelector('.home').addEventListener('transitionend', () => {
        document.querySelector('.home').classList.remove('animate');
    })
    document.querySelector('.home-text').classList.add('animate');
    document.querySelector('.home-text').addEventListener('transitionend', () => {
        document.querySelector('.home-text').classList.remove('animate');
    })
})

$(window).resize(() => {
    if ($(window).width() >= 840) {
        navLinks.classList.remove('active');
        mobileNav.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        noScroll.classList.remove('active');
    }
})