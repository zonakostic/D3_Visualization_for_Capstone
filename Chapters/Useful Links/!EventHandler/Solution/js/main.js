
// Will be used to the save the loaded JSON data
var allData = [];

// Date parser to convert strings to date objects
var parseDate = d3.time.format("%Y").parse;

// Set ordinal color scale
var colorScale = d3.scale.category20();

// Variables for the visualization instances
var areachart, timeline;


// Start application by loading the data
loadData();

function loadData() {
	d3.json("data/uk-household-purchases.json", function(error, jsonData){
		if(!error){
			allData = jsonData;

			// Convert Pence Sterling (GBX) to USD and years to date objects
			allData.layers.forEach(function(d){
				for (var column in d) {
	        if (d.hasOwnProperty(column) && column != "Year") {
	          d[column] = parseFloat(d[column]) * 1.481105 / 100;
	        } else if(d.hasOwnProperty(column) && column == "Year") {
	        	d[column] = parseDate(d[column].toString());
	        }
	      }
			});

			allData.years.forEach(function(d){
				d.Expenditures = parseFloat(d.Expenditures) * 1.481105 / 100;
				d.Year = parseDate(d.Year.toString());
			});


			// Update color scale (all column headers except "Year")
			// We will use the color scale later for the stacked area chart
			colorScale.domain(d3.keys(allData.layers[0]).filter(function(d){ return d != "Year"; }))

			createVis();
		}
	});
}


function createVis() {
	// Instantiate visualization objects
	areachart = new StackedAreaChart("stacked-area-chart", allData.layers);
	timeline = new Timeline("timeline", allData.years);
}


// React to 'brushed' event and update domain (x-scale; stacked area chart) if selection is not empty
function brushed() {
	areachart
	.x
	.domain(timeline.brush.empty() ? 
		timeline.x.domain() : timeline.brush.extent());
	areachart.wrangleData();

	console.log(timeline.brush.extent())
}


// Helper function to trim the tooltip text
function excerpt(fullText, limit) {
	if(fullText.length > limit) {
		
		// Trim the string to the maximum length
		var trimmedText = fullText.substr(0, limit);

		// Re-trim if we are in the middle of a word
		trimmedText = trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")))

		return trimmedText + "...";
	} else {
		return fullText;
	}
}
