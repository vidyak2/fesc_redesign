//function openNav() {
//  document.getElementById("reducedNav").style.width = "250px";
//}
//
//function closeNav() {
//  document.getElementById("reducedNav").style.width = "0";
//}



google.charts.load('current', {
  'packages': ['corechart', 'bar']
});

// Set a callback to run when the Google Visualization API is loaded.

google.charts.setOnLoadCallback(drawEnergyChart);


function drawEnergyChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Renewable Energy'],
    ['2015', 234192],
    ['2014', 226863],
    ['2013', 229666],
    ['2012', 220020],
    ['2011', 222956],
    ['2010', 223518],
    ['2009', 213642],
    ['2008', 195232],
    ['2007', 190489],
    ['2006', 185564],
    ['2005', 183175],
    ['2004', 179462],
    ['2003', 188473],
    ['2002', 174327],
    ['2001', 158038],
    ['2000', 194952],
    ['1999', 204114],
    ['1998', 205485],
    ['1997', 231308],
    ['1996', 240343],
    ['1995', 220211],
    ['1994', 215563],
    ['1993', 217028],
    ['1992', 230779],
    ['1991', 212955],
    ['1990', 198986],
    ['1989', 232261],
    ['1988', 113802],
    ['1987', 107606],
    ['1986', 116356],
    ['1985', 110698],
    ['1984', 108740],
    ['1983', 91705],
    ['1982', 104674],
    ['1981', 83117],
    ['1980', 90049],
    ['1979', 69419],
    ['1978', 65357],
    ['1977', 59953],
    ['1976', 56507],
    ['1975', 50007],
    ['1974', 52429],
    ['1973', 56250],
    ['1972', 54389],
    ['1971', 49968],
    ['1970', 51035],
    ['1969', 51489],
    ['1968', 49556],
    ['1967', 44550],
    ['1966', 42760],
    ['1965', 39916],
    ['1964', 39016],
    ['1963', 38613],
    ['1962', 35826],
    ['1961', 34417],
    ['1960', 35680]
        ]);

  // Set chart options
  var options = {
    chart: {
      title: 'Renewable Energy Production in Florida',
    },

    bars: 'vertical',
    legend: {
      position: 'none'
    },
    bar: {
      groupWidth: '92%'
    },
    vAxis: {
      title: 'Renewable Energy (Billion BTU)',
      format: 'decimal',
    },
    hAxis: {
      title: 'Year',
    },
    height: 300,
    colors: ['#39ac39']
  };


  // Instantiate and draw our chart, passing in some options.
  var chart = new google.charts.Bar(document.getElementById('energy_chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
