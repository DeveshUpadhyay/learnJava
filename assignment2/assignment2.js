var currentPage = 0;
var fetchedData;
var maxPages;
var increment=10;
window.onload = function () {
    //Loading Data into the local memory.
    loadData();
    console.log(fetchedData);

    // adding listners(Individual Functionalities) to buttons
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.addEventListener("click", prevButtonWorking);
    nextButton.addEventListener("click", nextButtonWorking);

    createDynamicButtons();

}


//Function to loadData into memory
async function loadData() {
    var rinitHttp = new XMLHttpRequest();
    rinitHttp.onreadystatechange = async function () {
        if (this.readyState == 4 && this.status == 200) {
            fetchedData = await this.responseText;
            fetchedData = JSON.parse(fetchedData).Students;

            let tlength = fetchedData.length;
            maxPages = Math.ceil(tlength / increment);

            createDynamicButtons();
        }
    }
    rinitHttp.onerror = function () {
        console.log("Error in loading Data....");
        console.log("Status Code: " + this.status);
        console.log("Status Text: " + this.statusText);
        console.log("ReadyStatecode: " + this.readyState);
        alert("Error in loading Data");
    }
    rinitHttp.open("GET", "data.json", true);
    rinitHttp.send();
}

//Creating Dynamic Pagination Buttons
function createDynamicButtons() {

    document.getElementById("dynamic-buttons").remove();

    var dynamicButtonsContainer = document.getElementById("buttonContainer");
    var dynamicButtons = document.createElement("div");
    dynamicButtons.setAttribute('id', 'dynamic-buttons')

    for (let i = 0; i < maxPages; i++) {
        const button = document.createElement("BUTTON");
        button.innerHTML = i + 1;
        button.setAttribute("value", i);
        button.setAttribute("class", "dbutton");

        dynamicButtons.appendChild(button);

        button.addEventListener("click", function () {
            createDynamicTable(button.value, fetchedData);
            currentPage = button.value;
        })
    }

    dynamicButtonsContainer.appendChild(dynamicButtons);
}

//Previous Button Functionality
function prevButtonWorking() {
    currentPage = parseInt(currentPage) - 1;
    console.log(currentPage + " " + currentPage);
    if (currentPage < 0) {
        currentPage = parseInt(currentPage) + 1;
        alert("This is the First Page");
        createDynamicTable(currentPage, fetchedData);
    } else {
        createDynamicTable(currentPage, fetchedData);
    }
}

//Next Button Functionality
function nextButtonWorking() {
    currentPage = parseInt(currentPage) + 1;
    console.log("currentPage:" + currentPage + " maxPages:" + maxPages);

    if (currentPage >= maxPages) {
        currentPage = parseInt(currentPage) - 1;
        alert("No More Data Left");
        createDynamicTable(currentPage, fetchedData)
    } else {
        createDynamicTable(currentPage, fetchedData);
    }
}

//Creating table Dynamically as per the pagination
function createDynamicTable(currentPage, data) {

    document.getElementById("tableBody").remove();

    var table = document.getElementById("table");
    var tableBody = document.createElement("tbody");
    tableBody.setAttribute('id', 'tableBody')


    var currentStart = currentPage * increment;
    var counterMax = (parseInt(currentStart) + parseInt(increment));

    for (let i = currentStart; i < Math.min(counterMax, (data.length - 1)); i++) {
        var tr = document.createElement('tr');
        rowData = data[i];

        var td = document.createElement('td');
        var text = document.createTextNode(i + 1);
        td.appendChild(text);
        tr.appendChild(td);

        for (let key in rowData) {

            var td = document.createElement('td');
            var text = document.createTextNode(rowData[key]);
            td.appendChild(text);
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }

    table.appendChild(tableBody);
    document.getElementById("tfoot").innerHTML = `<td colspan="4">Showing entries from ${currentStart + 1} to ${Math.min(counterMax, (data.length - 1))} of ${data.length - 1}</td>`;
}