// First we will get the player's choice by asking them to type it in.
let playerChoice = prompt("What is your choice? Bear, Ninja, or Hunter?");

// Then we will use a random number generator to choose the computer's choice.
let randomNumber = Math.floor(Math.random() * 3); 

let computerChoice;

// If the random number is 0, the computer's choice is Bear.
if (randomNumber === 0) {
  computerChoice = "Bear";
// If the random number is 1, the computer's choice is Ninja.
} else if (randomNumber === 1) {
  computerChoice = "Ninja";
// If the random number is 2, the computer's choice is Hunter.
} else {
  computerChoice = "Hunter";
}

// Here we show both the player's choice and the computer's choice.
console.log("Player choice: " + playerChoice);
console.log("Computer choice: " + computerChoice);