var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,us&units=imperial&&appid=a2bda5ca4f6366bef271b50f26cae2ba');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    document.getElementById("place").innerHTML = weatherData.city.name;
    document.getElementById("day").innerHTML = (date.getMonth()+1) + "/" + date.getDate();
    document.getElementById("currentTemp").innerHTML = weatherData.list[0].main.temp;
    document.getElementById("conditions").innerHTML = weatherData.list[0].weather[0].main;
    document.getElementById("conditionsDesc").innerHTML = weatherData.list[0].weather[0].description;  
    
let i;
for(i = 0; i <= weatherData.list.length; i+=8) {
    console.log[i];
console.log(weatherData.list[i]);

let date = document.createElement("p");
date.innerHTML = weatherData.list[i].dt_txt;
document.getElementById("day" + i/8).appendChild(date);

let temp = document.createElement("p");
temp.innerHTML = weatherData.list[i].main.temp;
document.getElementById("day" + i/8).appendChild(temp);

let dec = document.createElement("p");
dec.innerHTML = weatherData.list[i].weather[0].description;
document.getElementById("day" + i/8).appendChild(dec);
}

}







