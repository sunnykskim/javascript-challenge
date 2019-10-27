// from data.js
var tableData = data;

/////// Populate Table  ///////

tbody = d3.select("tbody")

// get data for the table + loop 
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)


/////// Filter ///////


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(sighting => sighting.datetime===inputValue);

  console.log(filteredData)
  displayData(filteredData)
});



