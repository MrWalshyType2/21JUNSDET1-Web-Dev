let container = document.querySelector("#container");

function createTableHeaderRow(headers) {
    // create table row
    const headerRow = document.createElement("tr");

    // iterate over headers array
    for (const headerText of headers) {
        // create header element
        const header = document.createElement("th");
        // set inner text of header
        header.innerText = headerText;

        // append header element to the header row element
        headerRow.appendChild(header);
    }
    return headerRow;
}

function createTableDataRow(data) {
    // creating a table row
    const dataRow = document.createElement("tr");

    // iterating over the data array
    for (const dataItem of data) {
        // creating a table data element
        const dataElement = document.createElement("td");

        // set the inner text to the current data item
        dataElement.innerText = dataItem;

        // append the data element to the data row
        dataRow.appendChild(header);
    }
    return dataRow;
}

// data should be an array of arrays
function createTable(headers, data) {
    const headerRow = createTableHeaderRow(headers);
    const dataRows = [];

    // iterate over the 2d array of data
    for (const dataSet of data) {
        // create a table row element with table data and append to the dataRows array
        dataRows.push(createTableDataRow(dataSet));
    }

    // create a table element
    const table = document.createElement("table");

    // append the header row to the table
    table.appendChild(headerRow);
    
    // iterate over the array of built data row elements
    for (dataRow of dataRows) {
        // append each dataRow element to the table
        table.appendChild(dataRow);
    }

    return table;
}

const headers = ["Forename", "Surname", "Age"];
const data = [
    ["Bob", "Ranger", 34],
    ["Eli", "Guy", 37],
    ["Sally", "Sef", 32]
];

const table = createTable(headers, data);
container.appendChild(table);