/* 
  YOUR TASK: Examine this code to get a solid understanding of
    1. Where is the data for the table coming from?
    2. How is the table being generated?
    3. How can you go about eliminating those first few blank rows?
      3a. Update the code to get rid of the blank rows.
    4. Why do there appear to be a duplicate set of temperatures?
      4a. Update the code to show only one set of temperatures.
*/

// Get a reference to the table body
var tbody = d3.select("#weather-table-body");

// Console.log the weather data from data.js
console.log(data);

/*
// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(weatherReport) {
  console.log(weatherReport);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");

  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");

  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
  });
});

*/

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)

/*
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
}); 
*/

// BONUS: Refactor to use Arrow Functions!
data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

weather_date = data.map(d => d.date);
weather_low = data.map(d => d.low);

console.log(weather_date);
console.log(weather_low);

/*
weatherReport = 
  {
    weekday: "MON",
    date: "July 2",
    high: 77,
    low: 63
  }

// After Object.entries()
  [
    ['weekday','MON'],
    ['date','July 2'],
    ['high','77'],
    ['low','63'],
  ]



*/