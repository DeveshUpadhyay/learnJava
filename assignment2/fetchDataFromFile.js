var startingPoint=0;


document.getElementById("1").onclick=getData(0);
document.getElementById("2").onclick=getData(10);
document.getElementById("3").onclick=getData(20);
document.getElementById("4").onclick=getData(30);
document.getElementById("5").onclick=getData(40);
document.getElementById("6").onclick=getData(50);
document.getElementById("7").onclick=getData(60);
document.getElementById("8").onclick=getData(70);
document.getElementById("9").onclick=getData(80);
document.getElementById("10").onclick=getData(90);




// Getting Data from API
function getData(start) {

    const data = new Promise((resolve, reject) => {
        setTimeout(() => {
            let apiData = fetch('./data.json').then((apidata) => { return apidata.json() });
            resolve(apiData);
            reject("Api Data not Fetched");
        }, 2000);    
    });    

    data.then((apiData) => {
        console.log(apiData.Students);
        var Data=apiData.Students;




        document.getElementById("tableBody").remove();

        var table=document.getElementById("table");
        var tableBody = document.createElement("tbody");
        tableBody.setAttribute('id','tableBody')

        if(Math.min(start+10, Data.length-1) < start){
            alert("There is no more data");
        }

        for (let i = start; i < Math.min(start+10, Data.length-1); i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');

            var text1 = document.createTextNode(i+1);
            var text2 = document.createTextNode(Data[i].rollNo);
            var text3 = document.createTextNode(Data[i].name);
            var text4 = document.createTextNode(Data[i].Standard);

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            tableBody.appendChild(tr);
        }    
        table.appendChild(tableBody);



    }).catch((Error) => {
        console.log(`Error... ${Error}`);
    })    
}    
