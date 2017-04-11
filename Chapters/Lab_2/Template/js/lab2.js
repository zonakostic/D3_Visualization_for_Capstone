
// Global variable with 60 attractions (JSON format)
// console.log(attractions);

dataFiltering();

function dataFiltering() {
	var attractions = attractionData;

	// ---- PART 2: FILTER BY ATTRACTION CATEGORY ----

	// Get selected attraction category
	var Element = document.getElementById("attraction-category");
	var Category = Element.options[Element.selectedIndex].value;

	console.log(Category)

	if(Category != "all") {
		attractions = attractions.filter(function(row, index){
			return row.Category == Category;
		});
	}


	// ---- PART 1: TOP 5 ATTRACTIONS ----

	// If compareFunction is supplied, the array elements are sorted according to the return value of the compare function. If a and b are two elements being compared, then:

	sortedAttractions = attractions.sort(function(a,b){
		return b.Visitors - a.Visitors;
	});

	var topAttractions = sortedAttractions.filter(function(row, index){
		return index < 5;
	});

	// Call function to draw bar chart
	renderBarChart(topAttractions);
}