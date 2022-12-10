const userChoice = prompt("heads or tails?");
const randomNumber  = Math.round(Math.random()>=0.5)? 1 : 0;
let computerChoice;
if (randomNumber >= 1) {
    computerChoice = "tails"
} else {
    computerChoice = "heads"
}

if (userChoice == computerChoice) {
    alert("You guessed right! The coin flipped on " + userChoice);
} else {
    alert("Sorry, the coin flipped on " + computerChoice);
}

const birthYear = prompt("What year were you born?");
if ((2022 - birthYear) > 21) {
    alert("You are old enough to drink in the US");
} else if ((2022 - birthYear) < 21) {
    alert("Sorry, you are not old enough to drink in the US");
} else {
    alert("You are old enough to drink in the US...barely");
}