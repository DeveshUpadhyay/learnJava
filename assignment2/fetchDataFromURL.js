var x=document.getElementById("driver")
if(x){
    x.addEventListener("click", (e) => {
        e.preventDefault();
        getData(10);
    });
}else{
    console.log("Not Selected");
}


// Getting Data from API
function getData(start) {

    const data = new Promise((resolve, reject) => {
        setTimeout(() => {
            let apiData = fetch('https://api.covid19api.com/summary').then((apidata) => { return apidata.json() });
            // let apiData = fetch('./data.json').then((apidata) => { return apidata });
            resolve(apiData);
            reject("Api Data not Fetched");
        }, 2000);    
    });    

    data.then((apiData) => {
        console.log(apiData.Countries);
        var Data=apiData.Countries;

        var table = document.getElementById("tableBody");
        for (let i = 0; i < Math.min(start+9, Data.length-1); i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');

            var text1 = document.createTextNode(Data[i].ID);
            var text2 = document.createTextNode(Data[i].NAME);
            var text3 = document.createTextNode(Data[i].TOTAL);
            var text4 = document.createTextNode(Data[i].TOTAL_RECOVERED);

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);
        }    




    }).catch((Error) => {
        console.log(`Error... ${Error}`);
    })    
}    
