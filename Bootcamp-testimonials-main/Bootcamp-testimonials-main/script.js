$(document).ready(() => {
    $('.next').click(() => {
        $('.avatar').attr('src', '/images/image-john.jpg');
        $('.name').html('John Tarkpor');
        $('.occupation').html('Junior Front-end Developer.')
        $('.quote').html('If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.')
    })
    $('.prev').click(() => {
            $('.avatar').attr('src', '/images/image-tanya.jpg');
            $('.name').html('Tanya Sinclair');
            $('.occupation').html('UX Engineer');
            $('.quote').html('I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.')
        })
        //keyboard functionality
    $(document).on('keydown', (e) => {
        if (e.which === 39) { //ArrowRight
            $('.avatar').attr('src', '/images/image-john.jpg');
            $('.name').html('John Tarkpor');
            $('.occupation').html('Junior Front-end Developer.')
            $('.quote').html('If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.')
        }
    })
    $(document).on('keydown', (e) => {
        if (e.which === 37) { //ArrowLeft
            $('.avatar').attr('src', '/images/image-tanya.jpg');
            $('.name').html('Tanya Sinclair');
            $('.occupation').html('UX Engineer');
            $('.quote').html('I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.')
        }
    })
})