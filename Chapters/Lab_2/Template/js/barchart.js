
/*****************************************/
/*   DRAW BAR CHART - ALREADY COMPLETE   */
/*****************************************/

// CHART AREA

var margin = {top: 40, right: 20, bottom: 40, left: 90},
    width = $('#chart-area').width() - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

width = width > 600 ? 600 : width;

var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// AXIS 

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(function(d) { return shortenString(d, 20); })
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var xAxisGroup = svg.append("g")
    .attr("class", "x-axis axis");

var yAxisGroup = svg.append("g")
  .attr("class", "y-axis axis");


// Initialize tooltip
var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { 
	return "<b>" + d.Location + "</b><br/>Annual Visitors: " + d.Visitors + "<br/>(" + d.Category + ")";
});


function renderBarChart(data) {

	// Check array length (top 5 attractions)
	if(data.length > 5) {
		errorMessage("Max 5 rows");
		return;
	}

	// Check object properties
	if(!data[0].hasOwnProperty("Visitors") || !data[0].hasOwnProperty("Location") || !data[0].hasOwnProperty("Category")) {
		errorMessage("The Object properties are not correct! An attraction should include at least: 'Visitors', 'Location', 'Category'");
		return;
	}

	x.domain(data.map(function(d) { return d.Location; }));
  y.domain([0, d3.max(data, function(d) { return d.Visitors; })]);






	// ---- START ----
  	// DRAW BARS HERE



 	// ADD



  	// UPDATE



	// REMOVE



	// ---- END ----








	// INVOKE TOOLTIP
	bars.call(tip)


	// ---- DRAW AXIS	----

	xAxisGroup = svg.select(".x-axis")
		  .attr("transform", "translate(0," + height + ")")
		  .call(xAxis);

  yAxisGroup = svg.select(".y-axis")
      .call(yAxis);

  svg.select("text.axis-title").remove();
  svg.append("text")
  	.attr("class", "axis-title")
		.attr("x", -5)
		.attr("y", -15)
		.attr("dy", ".1em")
		.style("text-anchor", "end")
		.text("Annual Visitors");
}


function errorMessage(message) {
	console.log(message);
}

function shortenString(content, maxLength){
	// Trim the string to the maximum length
	var trimmedString = content.substr(0, maxLength);

	// Re-trim if we are in the middle of a word
	trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

	return trimmedString;
}

