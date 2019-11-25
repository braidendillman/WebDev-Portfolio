
function addMonths(elem) {
    let annualUseKw = 0, dailyUseKw = 0, i=0, x=0;
    let months = document.getElementById(elem).getElementsByTagName('input');
    
    
    for (i=0; i<months.length; i++) {
        x = Number(months[i].value);
        annualUseKw += x;
    }
    dailyUseKw = annualUseKw/365;
    return dailyUseKw;

}

 var dailyUsekw = addMonths('mpc');
 //console.log(dailyUsekw);



 function sunHours(){ 
let hrs;
 let theZone = document.forms.solarForm.zone.selectedIndex;
 theZone += 1;
 switch(theZone){
     case 1:
            hrs = 6;
            break;
            case 2:
                hrs = 5.5;
                break;
                 case 3: hrs=5;
                 break;
                    case 4: hrs=4.5;
                    break;
                        case 5: hrs=4.2;
                        break;
                        case 6: hrs =3.5;
                        break;
                        default: hrs = 0;
                        break;
                            


 }
 return hrs;
}

function calculateSolar(){
    let dailyUseKw = addMonths('mpc');
 //console.log(dailyUsekw);

let sunHoursPerDay = sunHours();
//console.log(sunHoursPerDay)

let minKwNeeds = dailyUseKw/sunHoursPerDay;
//console.log(minKwNeeds);

let realKWNeeds = minKwNeeds * 1.25;
//console.log(realKWNeeds);

let realWattNeeds = realKWNeeds * 1000;
console.log(realWattNeeds);

let panelInfo = calculatePanel();
let panelOutput = panelInfo[0];
let panelName = panelInfo[1];

let panelsNeeded = Math.ceil(realWattNeeds / panelOutput);
//console.log(panelsNeeded);
let feedback = "";
feedback+="<p>Based on your average daily use of "+ Math.round(dailyUseKw) +" KWh, you will need to purchase "+ panelsNeeded +" "+ panelName +" solar panels to offset 100% of your electricity bill.</p>";
feedback+="<h2>Additional details</h2>";
feedback+="<p>Your average daily electricty comsumption: "+Math.round(dailyUseKw)+" Kwh per day.<p>";
feedback+="<p>Average sunshine hours per day: "+ sunHoursPerDay +" hours</p>";
feedback+="<p>Realistic watts needed per hour: "+ Math.round(realWattNeeds)+" watts/hour.</p>";
feedback+="<p>The "+ panelName +" panel you selcted generates about "+ panelOutput +" watts per hour.</p>";
document.getElementById('feedback').innerHTML=feedback;

}




function calculatePanel(){
    let userChoice = document.forms.solarForm.panel.selectedIndex;

    let panelOptions = document.forms.solarForm.panel.options;
    let power = panelOptions[userChoice].value;
    let name = panelOptions[userChoice].text;
    let x = [power, name];
    return x;
}




 

