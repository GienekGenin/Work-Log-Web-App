import $ from 'jquery';
import './scripts/dropdown';
import './scripts/datetimeselector'
import './scss/style.scss';

$(document).ready(function () {
    //hamburger
    // $('.menu-trigger').click(function () {
    //     $('header ul').slideToggle(1000);
    // });
    // $(window).resize(function () {
    //     if ($(window).width() > 780) {
    //         $('header ul').removeAttr('style');
    //     }
    // });
    $('.time-table').delay(600).animate({'opacity':'1'},1000);
    $('.employee-card-box').delay(1000).animate({'opacity':'1'},1000);
    $('footer').delay(1400).animate({'opacity':'1'},1000);
});
