import $ from 'jquery';
import './scripts/dropdown';
// import './scripts/datetimeselector';
import './scripts/hamburger';
import './scss/style.scss';

$(document).ready(function () {
    // animations
    $('.time-table').delay(600).animate({'opacity': '1'}, 1000);
    $('.employee-card-box').delay(1000).animate({'opacity': '1'}, 1000);
    $('footer').delay(1400).animate({'opacity': '1'}, 1000);

    // operations with datetime
    // let a = document.getElementsByClassName('form-control')[0];
    // function b(elem) {
    //     setInterval(function () {
    //         console.log(elem.value);
    //     }, 1000);
    // }
    // b(a);
    let datetime = $('.form-group');
    let first_date = $('.form-control')[0];
    let second_date = $('.form-control')[1];
    // $("#datetimepicker1").on("change.datetimepicker", function (e) {
    //     console.log('changed');
    // });
});
