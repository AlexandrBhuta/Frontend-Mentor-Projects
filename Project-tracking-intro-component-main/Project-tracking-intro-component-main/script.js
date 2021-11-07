let mobileToggle = document.querySelector('.mobile-toggle');
let topToggle = document.querySelector('.top');
let bottomToggle = document.querySelector('.bottom');
let midToggle = document.querySelector('.mid');
let mobileMenu = document.querySelector('.nav-links')

mobileToggle.addEventListener('click', () => {
    topToggle.classList.toggle('active');
    bottomToggle.classList.toggle('active');
    midToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');

})