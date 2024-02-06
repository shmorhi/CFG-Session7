/*const name = "Sian";
let age = 31;
let futureJob = "Web Developer";

let strConca = "My name is " + name + ", I am " + age + " years old, and I will soon become a " + futureJob;

let strInter = `My name is ${name}, I am ${age} years old and I will soon become a ${futureJob}.`

//console.log (strConca); - commenting out skips the code
//console.log (strInter);

const allergicToPrawns = "false";

if (allergicToPrawns === true) { // if allergicToPrawns is true
    console.log("Guess we're having breadsticks");
} else if (allergicToPrawns === false) { // ! equivalent to NOT 
    console.log("Bring on the shellfish!");
} else {
    console.log("Go Home");
}
*/

//function creation
function pressAlert(){
    alert("A button has been clicked!");
}

// Using JS to access a button inside the HTML document
let button = document.getElementById("myButton");

//add event listener to the button
button.addEventListener('click' , pressAlert);