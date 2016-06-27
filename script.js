$(document).ready(function () {
    var smallHeader = false;
    $(window).resize(function () {
        if (window.matchMedia('(min-width: 767px)').matches) {
            if (!smallHeader) {
                $('header').css("height", "140px");
                $('#content').css("margin-top", "140px");
                $('#logo').css("width", "300px");
                $('#logo').css("margin-top", "20px");
                $('nav ul').css("margin-top", "0px");
                $('.current').css("padding-bottom", "50px");
            } else {
                $('header').css("height", "70px");
                $('#content').css("margin-top", "70px");
                $('#logo').css("width", "10%");
                $('#logo').css("margin-top", "5px");
                $('nav ul').css("margin-top", "-20px");
                $('.current').css("padding-bottom", "0px");
            }

        } else {
            $('header').css("height", "70px");
            $('#content').css("margin-top", "70px");
            $('#logo').css("width", "100px");
            $('#logo').css("margin-top", "10px");
            $('nav ul').css("margin-top", "0px");
            $('.current').css("padding-bottom", "50px");
        }
    });
    $(window).scroll(function () {
        if (window.matchMedia('(min-width: 767px)').matches) {
            if ($(this).scrollTop() > 0) {
                smallHeader = true;
                $('header').css("height", "70px");
                $('#content').css("margin-top", "70px");
                $('#logo').css("width", "10%");
                $('#logo').css("margin-top", "5px");
                $('nav ul').css("margin-top", "-20px");
                $('.current').css("padding-bottom", "0px");
            } else {
                smallHeader = false;
                $('header').css("height", "140px");
                $('#content').css("margin-top", "140px");
                $('#logo').css("width", "300px");
                $('#logo').css("margin-top", "20px");
                $('nav ul').css("margin-top", "0px");
                $('.current').css("padding-bottom", "50px");
            }
        }


    });

});