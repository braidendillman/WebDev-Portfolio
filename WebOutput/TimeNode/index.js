const moment = require('moment');
let uS =  moment().format('MMMM Do YYYY');
let phraseus = 'If I were in the US, I would probably say that today is ';
console.log(phraseus + uS);

let uK = moment().locale('en-gb').format('LL');
let phraseuK = 'If I were in the UK, I would probably say that today is ';
console.log(phraseuK + uK);

let fR = moment().locale('fr').format('LL');
let phrasefR = 'If I were in France (and I could speak French), I would say that today is ';
console.log(phrasefR + fR);

let mySince = moment([2019, 10, 14, 18, 45, 00]).toNow(true);
let phraseS = "It’s been " + mySince +  " since Braiden began working on this assignment."
console.log(phraseS);

let now = moment([2019, 10, 16]).add(10 , 'd').format('MMMM Do YYYY');
let phraseD = "10 days from when this is graded will be" + " " + now + "."
console.log(phraseD);

let myQ = moment([2019, 10, 14, 18, 45, 00]).add(1, 'month').add(22, 'days').format('MMMM Do');
let phraseQ = "It’s" +myQ+  "until the end of the quarter!";
console.log(phraseQ);

