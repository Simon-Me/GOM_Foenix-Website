$(document).ready(function () {
    if ($(window).width() >= 768) {
        $(function () {
            $(window).scroll(function () {
                var aTop = $('header').height();

                if ($(this).scrollTop() > 0) {
                    $('header').css("height", "70px");
                    $('#content').css("margin-top", "70px");
                    $('#logo').css("width", "10%");
                    $('#logo').css("margin-top", "5px");
                    $('nav ul').css("margin-top", "-20px");
                    $('.current').css("padding-bottom", "0px");
                } else if ($(this).scrollTop() == 0) {
                    $('header').css("height", "140px");
                    $('#content').css("margin-top", "140px");
                    $('#logo').css("width", "300px");
                    $('#logo').css("margin-top", "20px");
                    $('nav ul').css("margin-top", "0px");
                    $('.current').css("padding-bottom", "50px");
                }

            });
        });
    }



});