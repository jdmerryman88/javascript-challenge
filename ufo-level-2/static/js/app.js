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
var form = d3.select("#form-date");
var city = d3.select("#form-city");
var state = d3.select("#form-state");
var country = d3.select("#form-country");
var shape = d3.select("#form-shape");


button.on("click", runEnter);
form.on("submit", runEnter);
city.on("submit", runEnter);
state.on("submit", runEnter);
country.on("submit", runEnter);
shape.on("submit", runEnter);

function runEnter(event){

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputCity  = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    var inputValue = inputElement.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");


    // console.log(inputValue);
    // console.log(cityValue);
    // console.log(stateValue);
    // console.log(countryValue);
    // console.log(shapeValue);
    
    
    // // Filters data based on input date
    function filterSightings(date){

        if (inputValue != ""){
        return date.datetime == inputValue;
        }
        else {
            return date,
            console.log('not date added')
        }
        
    };
    
    function filterCity(city){
        
        if (cityValue != ""){
            return filteredSightings.city == cityValue;
            }
            else {
                return city,
                console.log("no city added") 
            }


    };

    var filteredSightings = data.filter(filterSightings);
        filteredSightings = filteredSightings.filter(filterCity);
    
    console.log(filteredSightings);
    
    // Inserts only filtered data into chart
    tbody.html("");
    filteredSightings.forEach(function (sighting) {

        let row = tbody.append("tr");
        Object.entries(sighting).forEach(function ([key, value]) {
            //console.log(key, value);
            let cell = row.append('td');
            cell.text(value);
        });
    });

}
