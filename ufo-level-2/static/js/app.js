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
    
    var search = [];
    search.push(inputValue);
    search.push(cityValue);
    search.push(stateValue);
    search.push(countryValue);
    search.push(shapeValue);
    console.log(search);
    // // Filters data based on input date
    function filterSightings(date){

        if (inputValue == "" ){
            if (cityValue == ""){
                if (stateValue ==""){
                    if(countryValue ==""){
                        return date.shape == shapeValue;
                    }
                    else{return date.country == countryValue;}
                }
                else{return date.state == stateValue;}
            }
            else{return date.city == cityValue;}
        }
        else {
            return date.datetime == inputValue;        
        }};
    
    var filteredSightings = data.filter(filterSightings);
        
    
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

// Test filtering function
// var number = [9, 2, 3, 4, 6 , 7, 6 ,6 ,7]
    // var second = [7, 6]
    // var final = number.filter(item => second.includes(item));
    // console.log(final);