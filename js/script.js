// Reduced Navigation open and close functions
function openNav() {
  document.getElementById("reducedNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("reducedNav").style.width = "0";
}

// Google Charts 
google.charts.load('current', {
  'packages': ['corechart', 'bar']
});

// Callback
google.charts.setOnLoadCallback(drawEnergyChart);
google.charts.setOnLoadCallback(drawElectricityChart);


// Chart 1
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

  // Chart Options
  var options = {
    chart: {
      title: 'Chart 1. Annual Renewable Energy Production in Florida',
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
      titleTextStyle: {
        color: 'black',
        fontName: 'Open Sans',
        fontSize: 12,
        bold: false,
        italic: false
      }
    },
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: 'black',
        fontName: 'Open Sans',
        fontSize: 12,
        bold: false,
        italic: false
      }
    },
    height: 300,
    colors: ['#39ac39'],
    titleTextStyle: {
      color: 'black',
      fontName: 'Open Sans',
      fontSize: 16,
      bold: true,
      italic: false
    },
  };


  // Draw Charts Using Options
  var chart = new google.charts.Bar(document.getElementById('energy_chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

// Chart 2
function drawElectricityChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Total Electricity Consumption'],
    ['2016', 804283],
    ['2015', 803865],
    ['2014', 771379],
    ['2013', 757189],
    ['2012', 752941],
    ['2011', 768009],
    ['2010', 788887],
    ['2009', 766848],
    ['2008', 771702],
    ['2007', 788461],
    ['2006', 778685],
    ['2005', 767622],
    ['2004', 745810],
    ['2003', 741696],
    ['2002', 718136],
    ['2001', 684966],
    ['2000', 668216],
    ['1999', 638966],
    ['1998', 639254],
    ['1997', 597240],
    ['1996', 586291],
    ['1995', 571483],
    ['1994', 544365],
    ['1993', 521176],
    ['1992', 501598],
    ['1991', 499299],
    ['1990', 489741],
    ['1989', 472473],
    ['1988', 444382],
    ['1987', 417862],
    ['1986', 398095],
    ['1985', 379307],
    ['1984', 353246],
    ['1983', 329216],
    ['1982', 315744],
    ['1981', 317921],
    ['1980', 309694],
    ['1979', 295551],
    ['1978', 289031],
    ['1977', 270767],
    ['1976', 252408],
    ['1975', 242096],
    ['1974', 235482],
    ['1973', 237104],
    ['1972', 209665],
    ['1971', 188564],
    ['1970', 171346],
    ['1969', 153032],
    ['1968', 135509],
    ['1967', 119314],
    ['1966', 108610],
    ['1965', 95878],
    ['1964', 87016],
    ['1963', 78258],
    ['1962', 71216],
    ['1961', 62705],
    ['1960', 57344]
        ]);

  // Chart Options
  var options = {
    title: 'Chart 2. Total Annual Electricity Consumption in Florida',
    legend: {
      position: 'none'
    },
    curveType: 'none',

    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: 'black',
        fontName: 'Open Sans',
        fontSize: 12,
        bold: false,
        italic: false
      }
    },
    vAxis: {
      title: 'Total Energy Consumption in Florida (Billion BTU)',
      format: 'decimal',
      gridlines: {
        count: 10
      },
      titleTextStyle: {
        color: 'black',
        fontName: 'Open Sans',
        fontSize: 12,
        bold: false,
        italic: false
      }
    },
    height: 450,
    legend: 'none',
    colors: ['#39ac39'],
    titleTextStyle: {
      color: 'black',
      fontName: 'Open Sans',
      fontSize: 16,
      bold: true,
      italic: false
    },
  };

  // Draw Charts Using Options
  var chart = new google.visualization.LineChart(document.getElementById('electricity_chart'));
  chart.draw(data, options);
}
