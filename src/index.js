import $ from 'jquery';
import './scripts/dropdown';
import './scripts/datetimeselector'
import './scss/style.scss';

$(document).ready(function(){
    //hamburger
    $('.menu-trigger').click(function(){
        $('header ul').slideToggle(1000);
    });
    $(window).resize(function(){
        if ($(window).width() > 780 ) {
            $('header ul').removeAttr('style');
        }
    });
});

