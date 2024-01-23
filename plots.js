// Sort the data by Greek search results descending
let sortedByGreekSearch = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
let slicedData = sortedByGreekSearch.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
slicedData.reverse();

console.log(slicedData)

// Trace1 for the Greek Data
let trace1 = {
  x: slicedData.map(object => object.greekSearchResults),
  y: slicedData.map(object => object.greekName),
  text: slicedData.map(object => object.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

let arr1 = slicedData.map(object => object.greekName)
let arr2 = slicedData.map(object => object.greekSearchResults)

console.log(arr1)
console.log(arr2)

// Data array
let data = [trace1];

// Apply a title to the layout
let layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
