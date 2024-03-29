document.addEventListener('DOMContentLoaded', function() {
   // Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.
function drawChart() {

 // Create the data table.
 var data = new google.visualization.DataTable();
 data.addColumn('string', 'Job Location');
 data.addColumn('number', 'Revenue');
 data.addRows([
    ['Everett', 5000],
    ['Seattle', 10000],
    ['Lynnwood', 15000],
    ['Bothell', 20000],
    ['Mukilteo', 25000],
    ['Edmonds', 30000],
    ['Other', 35000]
 ]);

 // Set chart options
 var options = {'title':'Revenue by Job Location',
                 'width':400,
                 'height':300};

 // Instantiate and draw our chart, passing in some options.
 var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
 chart.draw(data, options);
}
});