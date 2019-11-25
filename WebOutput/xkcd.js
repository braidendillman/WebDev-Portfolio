let xkcdData;
let request = new XMLHttpRequest();

document.getElementById("btnHandler").addEventListener('click', handleclick)
function handleclick(event){
    event.preventDefault();

    let numOneInp = document.getElementById('num');
    let numOne = numOneInp.value;
    console.log(numOne);

    if(numOne >= 0 && numOne <= 2224) {
        fetch('https://xkcd.com/' + numOne + '/info.0.json')
        .then(res => res.json())
        .then(function(data){
            console.log(data);
            console.log(data.month);
      document.getElementById('DatesJSON').innerHTML = `${data.month} / ${data.day} / ${data.year}`
      document.getElementById('titleJSON').innerHTML = data.title;
      document.getElementById('imgJSON').src = data.img;
      document.getElementById('altJSON').innerHTML = data.alt;
    
        
        })
    }
    else{
        alert('Make sure your input is a numerical character, and it is between 0 and 2,224.')
    }

}

loadData();

function loadData() {
    request.open('GET', 'https://xkcd.com/info.0.json');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    xkcdData = JSON.parse(request.responseText);
    xkcdData.month;
    xkcdData.day;
    xkcdData.year;
    xkcdData.title;
    xkcdData.img;
    xkcdData.alt;
    console.log(xkcdData);
document.getElementById('DatesJSON').innerHTML = `${xkcdData.month} / ${xkcdData.day} / ${xkcdData.year}`
document.getElementById('titleJSON').innerHTML = xkcdData.title;
document.getElementById('imgJSON').src = "https://imgs.xkcd.com/comics/voting_referendum.png";
document.getElementById('altJSON').innerHTML = xkcdData.alt;
 
}
