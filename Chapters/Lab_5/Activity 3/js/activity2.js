
var width = 1000,
    height = 600;

var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);


//
// Projection - settings for mercator - no need to uncomment
/*
var projection = d3.geo.mercator()
    .center([0, 50 ])                 // Where to center the map in degrees
    .scale(160)                       // Zoom-level 
    .rotate([0,0]);                   // Map-rotation
*/



// Projection-settings for orthographic (alternative)



// D3 geo path generator (maps geodata to SVG paths)



// Use queue.js to read the two datasets asynchronous
queue()
    .defer(d3.json, "data/world-110m.json")
    .defer(d3.json, "data/airports.json")
    .await(renderMap);


function renderMap(error, topology, data) {

  // Convert TopoJSON to GeoJSON (target object = 'countries')
  var world = topojson.feature(topology, topology.objects.countries).features;


  // Render the world atlas by using the path generator



  // Create a marker on the map for each airport




}
