$(function () {
    $('.datepicker').daterangepicker({
        dateLimit: {
            'months': 1,
            'days': -1
        }
    });
    console.log(new Date(1571961600 * 1000).toString());

});