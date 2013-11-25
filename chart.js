
// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
//google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  drawChart2();
}
function drawChart2(_data, sel){

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Letter');
  data.addColumn('number', 'Time(ms)');
  data.addRows(_data || [
    ['Mushrooms', 3],
    ['Onions', 1],
    ['Olives', 1],
    ['Zucchini', 1],
    ['Pepperoni', 2]
  ]);

  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
    'width':400,
    'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById(sel || 'chart_div'));
    chart.draw(data, options);

}


