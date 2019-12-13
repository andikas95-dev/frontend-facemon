$(function () {

  // Line Chart
  Highcharts.chart('container', {
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
    },
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
  // End line chart


  // Pie Chart

  // Highcharts.chart('chart', {
  //   legend: {
  //     layout: 'vertical',
  //     align: 'right',
  //     verticalAlign: 'top',
  //     y: 35,
  //     x: -140,
  //     padding: 0,
  //     itemMarginTop: 20,
  //     itemMarginBottom: 10,
  //     itemMargiLeftt: 20,
  //     itemStyle: {
  //       lineHeight: '50px',
  //       fontWeight: 'bold',
  //       fontSize: 15
  //     },
  //     symbolRadius: 5,
  //     symbolHeight: 20,
  //     symbolWidth: 20,
  //     symbolPadding: 20
  //   },
  //   chart: {
  //     plotBackgroundColor: null,
  //     plotBorderWidth: null,
  //     plotShadow: false,
  //     type: 'pie'
  //   },
  //   responsive: {
  //     rules: [{
  //       condition: {
  //         maxWidth: 500
  //       },
  //       chartOptions: {
  //         plotOptions: {
  //           pie: {
  //             center: ['170', '100']
  //           }
  //         },
  //         legend: {
  //           align: 'center',
  //           verticalAlign: 'bottom',
  //           layout: 'horizontal',
  //           itemMarginTop: 0,
  //           itemMarginBottom: 0,
  //           y: 0,
  //           x: 0
  //         }
  //       }
  //     }]
  //   },
  //   title: false,
  //   tooltip: {
  //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //   },
  //   plotOptions: {
  //     pie: {
  //       center: ['250', '160'],
  //       allowPointSelect: true,
  //       cursor: 'pointer',
  //       dataLabels: {
  //         enabled: false
  //       },
  //       showInLegend: true,
  //       animation: false,
  //       dataLabels: {
  //         enabled: true,
  //         format: '{point.percentage:.1f} %',
  //         distance: -50,
  //         filter: {
  //           property: 'percentage',
  //           operator: '>',
  //           value: 4
  //         }
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Brands',
  //     colorByPoint: true,
  //     data: [{
  //       name: 'Chrome',
  //       y: 61.41,
  //       sliced: true,
  //       selected: true
  //     }, {
  //       name: 'Internet Explorer',
  //       y: 11.84
  //     }, {
  //       name: 'Firefox',
  //       y: 10.85
  //     }, {
  //       name: 'Edge',
  //       y: 4.67
  //     }, {
  //       name: 'Safari',
  //       y: 4.18
  //     }, {
  //       name: 'Other',
  //       y: 7.05
  //     }]
  //   }]
  // });

  //   Pie chart 2

  Highcharts.chart('chart3', {
    chart: {
      type: 'pie'
    },
    title: false,
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        innerSize: 200,
        depth: 10,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        },
        showInLegend: true
      }
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'center',
      x: -40,
      y: 50
    },
    series: [{
      name: 'Delivered amount',
      data: [
        ['Image', 5],
        ['Video', 3],
        ['Status', 1],
      ]
    }]
  });

  Highcharts.chart('chart', {
    chart: {
      type: 'column'
    },
    title: false,
    plotOptions: {
      column: {
        innerSize: 500,
        depth: 10,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Data',
      data: [
        ['Images', 8],
        ['Video', 3],
        ['Status', 1],
      ]
    }]
  });

  //   Find attr

  $(".highcharts-legend-item").find("text").attr('y', '35');


});