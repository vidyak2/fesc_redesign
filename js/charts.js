// Google Charts 
google.charts.load('current', {
  'packages': ['corechart', 'bar']
});

// Callback
google.charts.setOnLoadCallback(getData);
google.charts.setOnLoadCallback(getDataTwo);


// Chart 1
function drawEnergyChart(freshData) {
  console.log("freshData", freshData)
  freshData.unshift(['Year', 'Renewable Energy'])

  var data = google.visualization.arrayToDataTable(freshData);

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
      },
      textStyle: {
        fontSize: 11,
        color: 'black'
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
      },
      textStyle: {
        fontSize: 11,
        color: 'black'
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


function getData() {
  // New Request Object
  let request = new XMLHttpRequest()
  // Contact URL 
  let requestUrl = "https://api.eia.gov/series/?api_key=459a12916e4ff6d4da97a9f9345ff000&series_id=SEDS.REPRB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for completed request
  request.onload = function () {

    let theActualData = JSON.parse(request.response).series[0].data

    drawEnergyChart(theActualData)
  }
  // Callback for when an error occurs
  request.error = function (err) {
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}

// Chart 2 
function drawElectricityChart(freshDataTwo) {
  console.log("freshDataTwo", freshDataTwo)
  freshDataTwo.unshift(['Year', 'Total Energy Consumption'])

  var data = google.visualization.arrayToDataTable(freshDataTwo);

  // Chart Options
  var options = {
    title: 'Chart 2. Total Annual Electricity Consumption in Florida',
    legend: {
      position: 'none'
    },
    // Create a chart with points, and not curves
    curveType: 'none',

    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: 'black',
        fontName: 'Open Sans',
        fontSize: 12,
        bold: false,
        italic: false
      },
      textStyle: {
        fontSize: 11,
        color: 'black'
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
      },
      textStyle: {
        fontSize: 11,
        color: 'black'
      }
    },
    height: 550,
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

function getDataTwo() {

  let request = new XMLHttpRequest()

  let requestUrl = "https://api.eia.gov/series/?api_key=459a12916e4ff6d4da97a9f9345ff000&series_id=SEDS.TETCB.FL.A"

  request.open('GET', requestUrl, true)

  request.onload = function () {

    let theActualDataTwo = JSON.parse(request.response).series[0].data

    drawElectricityChart(theActualDataTwo)
  }

  request.error = function (errTwo) {
    console.log("error is: ", errTwo)
  }

  request.send()
}

//Call Vue function
var appCharts = new Vue({
  el: '#appCharts',
  data: {

  }
})
