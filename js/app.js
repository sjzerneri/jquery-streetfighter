$(document).ready(function () {

    /*on page load —> display the default state --> show ryu-still (and hide everythying else)*/
    $('.ryu-action').hide(); //(this line means hide all 4 divs)
    /* is replacing ...
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
    */
    $('.ryu-still').show();

    /*  on mouse over
                    -> mouse enter -> display ryu-ready (and hide everything else)*/
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide(); //this line means hide all 4 divs
        $('.ryu-ready').show();
    });
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    });
    /*on click
            —> mousedown —> display ryu-throwing (and hide everythying else)*/
    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '1020px'
            },
            500,
            function () {
                $(this).stop();
                $(this).hide();
                $(this).css('left', '520px');
            }
        );
    });

    /*    —> mouseup —> display the default state --> ryu-still (and hide everythying else)*/
    $('.ryu').mouseup(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-still').show();
    });


    //x key functionality when mouse is outside ryu div

    $(document).keydown(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-still').show();
        }
    });

});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
