// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");

var dontclickbutton = d3.select("#dont-click-me");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

inputField.on("keydown", function(){console.log(d3.event.target.value)})

// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was double-clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("dblclick", handleClick);


function handleMouseover(){
  target = d3.event.target.id;
  console.log(`Hovered over ${target}`);
}

button.on("mouseover", handleMouseover);

dontclickbutton.on("mouseover", handleMouseover);


dontclickbutton.on("click", function(){
  alert('JASON DERULO!!!!')
});

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});