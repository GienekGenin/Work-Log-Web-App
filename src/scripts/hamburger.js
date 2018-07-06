import $ from "jquery";

$(document).ready(function () {
    $('.menu-trigger').click(function () {
        $('header ul').slideToggle(1000);
    });
    $(window).resize(function () {
        if ($(window).width() > 630) {
            $('header ul').removeAttr('style');
        }
    });
});

