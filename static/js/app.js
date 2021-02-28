// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

let tbody = d3.select("tbody");

tableData.forEach(function (sighting) {

    let row = tbody.append("tr");
    Object.entries(sighting).forEach(function ([key, value]) {
        // console.log(key, value);
        let cell = row.append('td');
        cell.text(value);
    });
});


var button = d3.select("#filter-btn");
var form = d3.select("#datetime");


button.on("click", runEnter);
form.on("submit", runEnter);
function runEnter(){

    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);


}