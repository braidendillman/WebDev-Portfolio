let elementary = [];
let middleschool = [];
let highschool = [];

document.getElementById("btnHandler").addEventListener('click', handleclick)
function handleclick(event) {

    event.preventDefault();

    let firstNameInp = document.getElementById('fName');
    let firstName = firstNameInp.value;
    console.log(firstName);

    let lastNameInp = document.getElementById('lName');
    let lastName = lastNameInp.value;
    console.log(lastName);

    let gradeInp = document.getElementById('Grade');
    let Grade = gradeInp.value;
    console.log(Grade);

    let ageInp = document.getElementById('Age');
    let Age = ageInp.value;
    console.log(Age);
    

    if (!isNaN(firstName)) { alert('Please try again.');
        document.getElementById('firstName').innerHTML = "Please input a alphabetical name for first name."
    }
    if (!isNaN(lastName)) { alert('Please try again.');
        document.getElementById('lastName').innerHTML = "Please input a alhabetical name for last name."
    } console.log((isNaN(Grade) + "" + (Grade == 'K')));

    if (isNaN(Grade) && (Grade != 'K')) { alert('Please try again.');
        document.getElementById('gradeid').innerHTML = "Please insert a grade 1-12 or the letter K"
        
    }else if ("" == Grade){
        document.getElementById('gradeid').innerHTML = "Please insert a grade 1-12 or the letter K"
    }
        
    if (isNaN(Age)) { alert('Please try again.');
        document.getElementById('ageid').innerHTML = "Please insert a numerical value."
    } else if ("" == Age){
        document.getElementById('ageid').innerHTML = "Please insert a numerical value."
    }

    let person = { userFname: firstName, userLname: lastName, userGrade: Grade, userAge: Age };
    if (Grade >= 1 && Grade <= 6) {
        elementary.push(person);
        document.getElementById('elem').innerHTML = "You are part of the Elementary school group!" 
        console.log('Student Registerd!')
    } else if (Grade >= 7 && Grade <= 9) {
        middleschool.push(person);
        document.getElementById('middle').innerHTML = "You are part of the Middle school group!"
        console.log('Student Registerd!')
    } else if (Grade >= 10 && Grade <= 11) {
        highschool.push(person);
        document.getElementById('high').innerHTML = "You are part of the highschool group!"
        console.log('Student Registerd!')
        console.log(highschool);
    } else if (Grade == 'K') {
        document.getElementById('KMess').innerHTML = "To young for this contest. Parents of kindergarteners should contact Valerie @ vfrizzle@magicschool.bus for more information. Also you don't belong here!"
        console.log('Student Registerd!')
    } else if (Grade == 12) {
        console.log('is it working?');
        document.getElementById('12').innerHTML = "To old for this contest. Seniors are not eligible to participate in the contest. Also you dont belong here sorry better luck next time!"
        console.log('Student Registerd!')
    }







}




