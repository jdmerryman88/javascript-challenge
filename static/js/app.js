// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

let tbody = d3.select("tbody");

tableData.forEach(function(sighting){

    let row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
        console.log(key, value);
        let cell = row.append('td');
        



    });
});