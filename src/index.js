import $ from 'jquery';
import './scripts/dropdown';
// import './scripts/datetimeselector';
import './scripts/hamburger';
import './scss/style.scss';

$(document).ready(function () {
    getDate();
    // animations
    $('.time-table').delay(600).animate({'opacity': '1'}, 1000);
    $('.employee-card-box').delay(1000).animate({'opacity': '1'}, 1000);
    $('footer').delay(1400).animate({'opacity': '1'}, 1000);

    // clock on the page
    setInterval(function () {
        getTime();
    },1000);
    //date on the page
    setInterval(function () {
        getDate();
    },60000);
});

//get current time hh:mm:ss
function getTime() {
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('.hms').text(time);
}

//get current date mm/dd/yyyy
function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    today = mm + '/' + dd + '/' + yyyy;
    $('.current-date').text(`Today is: ${today}`);
}