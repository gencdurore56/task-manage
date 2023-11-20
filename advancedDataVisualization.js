// Filename: advancedDataVisualization.js

/**
 * This code demonstrates advanced data visualization using D3.js library
 */

// Define the dimensions of the SVG container
const width = 800;
const height = 600;

// Create an SVG container
const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// Define the data
const data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'C', value: 30 },
  { category: 'D', value: 40 }
];

// Define the scales for x and y axes
const xScale = d3.scaleBand()
  .domain(data.map(d => d.category))
  .range([0, width])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([height, 0]);

// Create x axis
svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

// Create y axis
svg.append('g')
  .call(d3.axisLeft(yScale));

// Create bars
svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', d => xScale(d.category))
  .attr('y', d => yScale(d.value))
  .attr('width', xScale.bandwidth())
  .attr('height', d => height - yScale(d.value))
  .attr('fill', 'steelblue');

// Create labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => d.value)
  .attr('x', d => xScale(d.category) + xScale.bandwidth() / 2)
  .attr('y', d => yScale(d.value) - 5)
  .attr('text-anchor', 'middle')
  .attr('fill', 'white');

// Add title
svg.append('text')
  .text('Bar Chart')
  .attr('x', width / 2)
  .attr('y', 30)
  .attr('text-anchor', 'middle')
  .attr('font-size', '24px')
  .attr('fill', 'black');

// Add legend
const legend = svg.append('g')
  .attr('transform', `translate(${width - 100}, ${height - 120})`);

legend.append('rect')
  .attr('width', 20)
  .attr('height', 20)
  .attr('fill', 'steelblue');

legend.append('text')
  .text('Value')
  .attr('x', 30)
  .attr('y', 15);

// Add interactions
svg.selectAll('rect')
  .on('mouseover', function () {
    d3.select(this).attr('fill', 'orange');
  })
  .on('mouseout', function () {
    d3.select(this).attr('fill', 'steelblue');
  })
  .on('click', function (d) {
    console.log(`Clicked on category ${d.category}`);
  });

// ... continued with additional functionality, animations, and complex data manipulation ...

// End of code