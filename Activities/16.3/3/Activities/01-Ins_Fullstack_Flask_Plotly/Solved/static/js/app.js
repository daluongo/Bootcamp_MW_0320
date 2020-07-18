// Plot the default route once the page loads
var defaultURL = "/emoji_char";
d3.json(defaultURL).then(function(data) {

  var emoji_id = data.map(d => d.emoji_char);
  var score = data.map(d => d.score);

  var trace = [{
    'x': emoji_id,
    'y': score,
    'type': 'line'
  }];
  
  var layout = { margin: { t: 30, b: 100 } };
  Plotly.plot("bar", trace, layout);
});

// Update data whenever the dropdown selection changes
function updateData(route) {
  console.log(route);
  d3.json(`/${route}`).then(function(data) {

    var x = [];
    var y = [];

    switch(route){
      case 'emoji_id':
        x = data.map(d => d.emoji_id);
        y = data.map(d => d.score);
        break;
      case 'emoji_char':
        x = data.map(d => d.emoji_char);
        y = data.map(d => d.score);
        break;
      case 'emoji_name':
        x = data.map(d => d.name);
        y = data.map(d => d.score);
        break;
    };
  
    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);
  });
}