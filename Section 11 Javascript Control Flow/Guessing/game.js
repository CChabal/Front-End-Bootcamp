var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
var secretNumber = 12;

if (guess === secretNumber) {
	alert("You guessed the right number");
}
else if (guess > secretNumber) {
	alert("To high, please guess again.");
}
else {
	alert("To low, please guess again.");
}