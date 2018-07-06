import $ from 'jquery';

$(function () {
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker({
        useCurrent: false
    });
    $("#datetimepicker1").on("change.datetimepicker", function (e) {
        $('#datetimepicker2').datetimepicker('minDate', e.date);
    });
    $("#datetimepicker1").on("change.datetimepicker", function (e) {
        $('#datetimepicker2').datetimepicker('maxDate', e.date);
    });

    let a = $('input.datetimepicker-input').val();
    console.log(a);
});