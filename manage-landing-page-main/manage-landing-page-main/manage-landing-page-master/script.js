 let mobileToggle = document.querySelector('.toggle');
 let mobileMenu = document.querySelector('.nav-links')
     //For the mobile menu
 mobileToggle.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');
     mobileMenu.classList.contains('active') ? mobileToggle.src = 'images/icon-close.svg' : mobileToggle.src = 'images/icon-hamburger.svg'
 })


 //for the mobile sider
 let anishaLi = document.querySelector('.anisha-li');
 let aliBravo = document.querySelector('.ali-bravo');
 let richardWatts = document.querySelector('.richard-watts');
 let shanaiGough = document.querySelector('.shanai-gough');
 let avatar = document.querySelector('.avatar')
 let avatarName = document.querySelector('.avatar-name');
 let avatarTestimonial = document.querySelector('.avatar-testimonial')

 let avatars = [
     '/images/avatar-ali.png',
     '/images/avatar-anisha.png',
     '/images/avatar-richard.png',
     '/images/avatar-shanai.png',
 ]

 let name = [
     'ali bravo',
     'anisha ali',
     'richard watts',
     'shanai gough'
 ]

 let testimonial = [
     '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
     '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
     '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
     '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
 ]

 anishaLi.addEventListener('click', () => {
     anishaLi.style.background = 'hsl(12, 88%, 59%)';
     aliBravo.style.background = '';
     richardWatts.style.background = '';
     shanaiGough.style.background = '';
     //change avatar image
     avatar.src = avatars[1]
     avatarName.innerHTML = name[1]
     avatarTestimonial.innerHTML = testimonial[1]

 })

 aliBravo.addEventListener('click', () => {
     anishaLi.style.background = 'transparent';
     aliBravo.style.background = 'hsl(12, 88%, 59%)';
     richardWatts.style.background = '';
     shanaiGough.style.background = '';
     //change avatar image
     avatar.src = avatars[0]
     avatarName.innerHTML = name[0]
     avatarTestimonial.innerHTML = testimonial[0]
 })

 richardWatts.addEventListener('click', () => {
     anishaLi.style.background = 'transparent';
     aliBravo.style.background = '';
     richardWatts.style.background = 'hsl(12, 88%, 59%)';
     shanaiGough.style.background = '';
     //change avatar image
     avatar.src = avatars[2]
     avatarName.innerHTML = name[2]
     avatarTestimonial.innerHTML = testimonial[2]
 })

 shanaiGough.addEventListener('click', () => {
     anishaLi.style.background = 'transparent';
     aliBravo.style.background = '';
     richardWatts.style.background = '';
     shanaiGough.style.background = 'hsl(12, 88%, 59%)';
     //change avatar image
     avatar.src = avatars[3]
     avatarName.innerHTML = name[3]
     avatarTestimonial.innerHTML = testimonial[3]
 })