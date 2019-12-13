$(document).ready(function () {
    Highcharts.chart('chart1', {
        title: false,
        chart: {
            type: 'areaspline',
            backgroundColor: '#FFFFFF'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        plotOptions: {
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    symbol: 'circle'
                }
            }
        },

        series: [{
            color: '#00e9ff',
            data: [29.9, 71.5, 106.4, 129.2, 70.0, 60.0, 90.6, 148.5, 130.4, 150.1, 95.6, 54.4],
            fillColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                    [0, Highcharts.Color('#00e9ff').setOpacity(1).get('rgba')],
                    [1, Highcharts.Color('#FAFAFA').setOpacity(0).get('rgba')],
                ]
            }
        }
        ]
    });
    Highcharts.chart('chart2', {
        title: false,
        chart: {
            type: 'areaspline',
            backgroundColor: '#FFFFFF'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        plotOptions: {
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    symbol: 'circle'
                }
            }
        },

        series: [
            {
                color: '#9600ff',
                data: [49.9, 31.5, 76.4, 59.2, 140.0, 70.0, 80.6, 108.5, 120.4, 130.1, 115.6, 74.4],
                fillColor: {
                    linearGradient: [0, 0, 0, 300],
                    stops: [
                        [0, Highcharts.Color('#9600ff').setOpacity(1).get('rgba')],
                        [1, Highcharts.Color('#FAFAFA').setOpacity(0).get('rgba')],
                    ]
                }
            }
        ]
    });

    $('.inlinebar').sparkline('html', { type: 'bar', barColor: 'red' });

    $('#example').DataTable();
    $('#example2').DataTable();
});