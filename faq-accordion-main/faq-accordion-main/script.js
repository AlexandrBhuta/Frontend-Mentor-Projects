$(document).ready(function() {
    $('#question1').click(function() {
        $('#answer1, .arrow1, #question1').toggleClass('active');
        $('#answer2, #answer3, #answer4, #answer5, .arrow2, .arrow3, .arrow4, .arrow5, #question2, #question3, #question4, #question5 ').removeClass('active');
    })
    $('#question2').click(function() {
        $('#answer2, .arrow2, #question2').toggleClass('active');
        $('#answer1, #answer3, #answer4, #answer5, .arrow1, .arrow3, .arrow4, .arrow5, #question1, #question3, #question4, #question5 ').removeClass('active');
    })
    $('#question3').click(function() {
        $('#answer3, .arrow3, #question3').toggleClass('active');
        $('#answer1, #answer2, #answer4, #answer5, .arrow1, .arrow2, .arrow4, .arrow5, #question1, #question2, #question4, #question5 ').removeClass('active');
    })
    $('#question4').click(function() {
        $('#answer4, .arrow4, #question4').toggleClass('active');
        $('#answer1, #answer2, #answer3, #answer5, .arrow1, .arrow2, .arrow3, .arrow5, #question1, #question2, #question4, #question5 ').removeClass('active');
    })
    $('#question5').click(function() {
        $('#answer5, .arrow5, #question5').toggleClass('active');
        $('#answer1, #answer2, #answer3, #answer4, .arrow1, .arrow2, .arrow3, .arrow4, #question1, #question2, #question3, #question4').removeClass('active');
    })
})