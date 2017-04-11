
var width = 400,
    height = 400;

var svg = d3.select("#chart-area").append("svg")
    .attr("width", width)
    .attr("height", height);


// Initialize force layout
var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30)
    .size([width, height]);



// Load data
d3.json("data/airports.json", function(data) {




  console.log(data)



  // force


  // Draw the edges (SVG lines)


  // Draw the nodes (SVG circles)


  // Append a <title>-tag to each node (browser tooltips)


  // Update the coordinates on every tick





});