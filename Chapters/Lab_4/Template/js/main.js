
// SVG drawing area

var margin = {top: 40, right: 10, bottom: 60, left: 60};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Scales
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);




// ------- START --------
// 1a START



// 1a END
// ------- END --------



// Axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var xAxisGroup = svg.append("g")
    .attr("class", "x-axis axis")
    .attr("transform", "translate(0," + height + ")")

var yAxisGroup = svg.append("g")
    .attr("class", "y-axis axis")

var yAxisTitle = svg.append("text")
    .attr("class", "axis-title")
    .attr("text-anchor", "middle")
    .attr("y", -10)
    .attr("x", 0);


// Initialize data
loadData();

// Coffee chain data
var data;

// Event Listener (ranking type)
var selectRankingType = d3.select("#ranking-type").on("change", updateVisualization);


// Load CSV file
function loadData() {
	d3.csv("data/coffee-house-chains.csv", function(error, csv) {

		csv.forEach(function(d){
			d.revenue = +d.revenue;
			d.stores = +d.stores;
		});

		// Store csv data in global variable
		data = csv;

		console.log(data)

		updateVisualization();
	});
}

// Render visualization
function updateVisualization() {
  // Get the selected ranking option




// ------- START --------
	//1b START





	//1b END
// ------- START --------



  if(rankingType == "stores")
    yAxisTitle.text("Stores");
  else
    yAxisTitle.text("Billion USD");





  // Sort data
  data.sort(function(a, b) { return b[rankingType] - a[rankingType]; });

  // Update scales domains

	x.domain(data.map(function(d) { return d.company; }));



// ------- START --------
//1c: START



//1c END





//1d START





//1d END
// ------- START --------





  // Draw Axes
  xAxisGroup = svg.select(".x-axis")
		  .attr("transform", "translate(0," + height + ")")
		  .call(xAxis);

  yAxisGroup = svg.select(".y-axis")
      .call(yAxis);
}