// Set up variables to hold values

// document.querySelector is used to make a selection of an element
//we want to send messages to the player to provide progress of the gameplay
const message = document.querySelector(".message")

// querySelectorAll is used because we have more than one element (buttons)....we will create a node list for the contents of these elements
// nodelist is similar to an array. 0 based values, but the contents of each array item are in a nodelist. 
// We can use the contents of nodelist elements to determine which button was clicked, and attach an event listener to the buttons
const buttons = document.querySelectorAll("buttons")
console.log(buttons);

// Lets create interaction with the buttons
