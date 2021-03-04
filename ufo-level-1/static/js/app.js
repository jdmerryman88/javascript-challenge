// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData);

// Writes data to table initially
let tbody = d3.select("tbody");

tableData.forEach(function (sighting) {

    let row = tbody.append("tr");
    Object.entries(sighting).forEach(function ([key, value]) {
        // console.log(key, value);
        let cell = row.append('td');
        cell.text(value);
    });
});


// Gets data entered into form for button click
var button = d3.select("#filter-btn");
var form = d3.select("#form");


button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(event){

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    
    //If no date entered no filetering occurs and logged to console no date entered.
    if ( inputValue == ""){
        console.log("No date entered");
    }

    // If date entered returns filtered data
    else{
        // Filters data based on input date
    function filterSightings(date){

        return date.datetime == inputValue;
    }
    var filteredSightings = data.filter(filterSightings);
    
    console.log(filteredSightings);
    
    // Inserts only filtered data into chart
    tbody.html("");
    filteredSightings.forEach(function (sighting) {

        let row = tbody.append("tr");
        Object.entries(sighting).forEach(function ([key, value]) {
            // console.log(key, value);
            let cell = row.append('td');
            cell.text(value);
        });
    });
    }
    

}
