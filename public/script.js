// Simulated data for visualization
const data = [10, 20, 30, 40, 50];

// Select the div with the id 'visualization'
const svg = d3.select("#visualization")
  .append("svg") // Append an SVG element
  .attr("width", 500) // Set the width of the SVG
  .attr("height", 300); // Set the height of the SVG

// Bind data to the SVG elements and create rectangles
svg.selectAll("rect")
  .data(data) // Bind data
  .enter() // Create placeholders for each data point
  .append("rect") // Append a rectangle for each data point
  .attr("x", (d, i) => i * 70) // Set the x position based on index
  .attr("y", d => 300 - 10 * d) // Set the y position based on data value
  .attr("width", 65) // Set the width of each bar
  .attr("height", d => d * 10) // Set the height based on data value
  .attr("fill", "skyblue"); // Set the color of the bars

// Add text labels
svg.selectAll("text")
  .data(data) // Bind data
  .enter() // Create placeholders for each data point
  .append("text") // Append a text element for each data point
  .text(d => d) // Set the text content to the data value
  .attr("x", (d, i) => i * 70 + 25) // Set the x position
  .attr("y", d => 300 - 10 * d - 5) // Set the y position
  .attr("font-family", "sans-serif") // Set the font family
  .attr("font-size", "20px") // Set the font size
  .attr("fill", "black"); // Set the color of the text
