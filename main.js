// Set up variables to hold values

// We can use these to provide our value back
const coinArray = ["Heads","Tails"]

// we use let for score, because the value can change
// this is an array for the players, one representing the user, and the other being the computer
let score = [0,0]

// document.querySelector is used to make a selection of an element
//we want to send messages to the player to provide progress of the gameplay
const message = document.querySelector(".message")

// querySelectorAll is used because we have more than one element (buttons)....we will create a node list for the contents of these elements
// nodelist is similar to an array. 0 based values, but the contents of each array item are in a nodelist. 
// We can use the contents of nodelist elements to determine which button was clicked, and attach an event listener to the buttons
const buttons = document.querySelectorAll("button")


// Lets create interaction with the buttons

// We use a length value within a loop to find items in the nodelist
for(let i = 0; i<buttons.length; i++){
// This specifies that were listening for a click
// tossCoin is the function we will render out
buttons[i].addEventListener("click", tossCoin);
}

// this will get used anytime one of the buttons gets clicked
// we need to add an event object (e) - this triggers the content whenever the button gets clicked
function tossCoin(e) {
    // (e.target.innerText) is what finds which exact button gets clicked
    let playerGuess = e.target.innerText;
    // Add Randomness to the game with math.random
    // Math.random produces a long number
    // Math.floor gets rid of all the decimal places in Math.random
    // *2 is the multiplication used to produce a value of 0 or 1, which will help us get the random number
    let computerToss = Math.floor(Math.random()*2);
    let computerGuess = coinArray[computerToss];
    message.innerHTML = "Computer Selected " + computerGuess + "<br>";
    let output;
    if(playerGuess === computerGuess){
        // Win
        output = "Player Wins"
        score[0]++
        }else{
        // Lose
        output = "Computer Wins"
        score[1]++
        }

        message.innerHTML = output + "<br>Player: " + score[0] + " Computer: " + score[1];
}



