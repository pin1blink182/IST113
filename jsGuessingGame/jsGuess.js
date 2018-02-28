function gameStart(){
		var secretnum = prompt("Player one enter a secret number: ");
	let number = parseInt(secretnum);
	document.write(number);
	var guess = prompt("Player two please begin to guess");
		var counter=1;
	while (guess != number) {
		if (guess > number){
			guess = prompt("You've guessed too high! Keep guessing!");
			counter++;
		}
		if (guess < number) {
			guess = prompt("You've guessed too low! Try again!");
			counter++;
		}
	}
	alert("Congratulations! It took you " +counter +" guesses");
}