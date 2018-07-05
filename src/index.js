import $ from 'jquery';
import './scripts/dropdown';
import './scripts/datetimeselector'
import './scss/style.scss';

$(document).ready(function(){
    $(function(){
        $('.selectpicker').selectpicker();
    });
});

