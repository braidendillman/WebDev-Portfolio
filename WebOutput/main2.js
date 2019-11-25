let a = 10;
let b = 10;
let myMath = a % b;
console.log(myMath);

if (myMath == 0) {
    console.log("It's an even number!");
}
else {
    console.log("It's odd!");
}
let work = document.getElementById("myMath").value;
let working = document.getElementById("working");
if(work == 0){
    working.innerhtml = "It's an even number!";
}
else{
    working.innerhtml = "Its odd!";
}



