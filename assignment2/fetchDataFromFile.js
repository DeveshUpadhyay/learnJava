var currentPage = 0;

let asdf;
var maxPages;

window.onload = function () {
    init();
    console.log(asdf);


    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const entriesCount = document.getElementById("EntriesLength");

    entriesCount.addEventListener("change", incrementValueChanged);
    prevButton.addEventListener("click", prevButtonWorking);
    nextButton.addEventListener("click", nextButtonWorking);

    createDynamicButtons();

    // const dynamicButtons = document.getElementsByClassName("dbutton");
    // for (let i = 0; i < dynamicButtons.length; i++) {
    //     dynamicButtons[i].addEventListener("click", function () {
    //         getHttpdata(dynamicButtons[i].value);
    //         currentPage = dynamicButtons[i].value;
    //     })
    // }

    loadData();
}


async function init() {

    var initHttp = new XMLHttpRequest();
    initHttp.open("GET", "data.json", true);
    initHttp.responseType = "json";

    initHttp.onload = async () => {
        asdf = await initHttp.response.Students;

        var increment = document.getElementById("EntriesLength").value;
        let tlength = asdf.length;
        maxPages = Math.ceil(tlength / increment);

        createDynamicButtons();
    }
    initHttp.onerror = () => {
        alert("Error... " + xhttp.statusText);
    }
    initHttp.send();
}

var fetchedData;

async function loadData(){
    var rinitHttp=new XMLHttpRequest();
    rinitHttp.onreadystatechange= async function(){
        if(this.readyState==4 && this.status==200){
            fetchedData= await this.responseText;
            fetchedData=JSON.parse(fetchedData).Students;
        }
    }
    rinitHttp.open("GET","data.json", true);
    rinitHttp.send();
}


function incrementValueChanged() {
    console.log("MaxPages Updated")
    var increment = document.getElementById("EntriesLength").value;
    let tlength = asdf.length;
    maxPages = Math.ceil(tlength / increment);

    createDynamicButtons();
    getHttpdata(currentPage);
}

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
            getHttpdata(button.value);
            currentPage = button.value;
        })
    }

    dynamicButtonsContainer.appendChild(dynamicButtons);
}

function prevButtonWorking() {
    currentPage = parseInt(currentPage) - 1;
    console.log(currentPage + " " + currentPage);
    if (currentPage < 0) {
        currentPage = parseInt(currentPage) + 1;
        alert("This is the First Page");
        getHttpdata(currentPage);
    } else {
        getHttpdata(currentPage);
    }
}


function nextButtonWorking() {
    currentPage = parseInt(currentPage) + 1;
    console.log("currentPage:" + currentPage + " maxPages:" + maxPages);

    if (currentPage >= maxPages) {
        currentPage = parseInt(currentPage) - 1;
        alert("No More Data Left");
        getHttpdata(currentPage)
    } else {
        getHttpdata(currentPage);
    }
}



function getHttpdata(currentPage) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json", true);
    xhttp.responseType = "json";

    xhttp.onload = () => {
        if (xhttp.status == 200) {
            var data = xhttp.response.Students;
            console.log("Data received");
            console.log(data);

            createDynamicTable(currentPage, asdf);
        } else {
            alert("Error... ", xhttp.statusText);
        }
    };
    xhttp.send();
}

function createDynamicTable(currentPage, data) {
    var increment = document.getElementById("EntriesLength").value;

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
    document.getElementById("tfoot").innerHTML = `<td colspan="4">Showing entries from ${currentStart + 1} to ${Math.min(counterMax, (data.length - 1))} of ${data.length-1}</td>~`;

}


// // Getting Data from API
// function getData(start) {

//     const data = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let apiData = fetch('./data.json').then((apidata) => { return apidata.json() });
//             resolve(apiData);
//             reject("Api Data not Fetched");
//         }, 2000);
//     });

//     data.then((apiData) => {
//         console.log(apiData.Students);
//         var Data = apiData.Students;

//         document.getElementById("tableBody").remove();

//         var table = document.getElementById("table");
//         var tableBody = document.createElement("tbody");
//         tableBody.setAttribute('id', 'tableBody')

//         if (Math.min(start + 10, Data.length - 1) < start) {
//             alert("There is no more data");
//         }

//         for (let i = start; i < Math.min(start + 10, Data.length - 1); i++) {
//             var tr = document.createElement('tr');
//             rowData = Data[i];

//             var td = document.createElement('td');
//             var text = document.createTextNode(i + 1);
//             td.appendChild(text);
//             tr.appendChild(td);

//             for (let key in rowData) {
//                 var td = document.createElement('td');
//                 var text = document.createTextNode(rowData.key);
//                 td.appendChild(text);
//                 tr.appendChild(td);
//             }
//             tableBody.appendChild(tr);
//         }
//         table.appendChild(tableBody);



//     }).catch((Error) => {
//         console.log(`Error... ${Error}`);
//     })
// }    
