/* 
   This function creates a popup
*/
function runHello() {
	alert("Hello User!");
}

/* 
   This function calls another function
*/
function runOther() {
	runHello(); 
}

/*
   This function prompts the user for a value
   It then outputs the response to the console
*/
function runPrompt() {
	let response = prompt("What is your name?");
	console.log(response + " just entered their name"); 
}

/* 
   This function has a single parameter
   It uses the value of that parameter to update the DOM
*/
function changeHtml(changeString) { 
	document.getElementById("greeting").innerHTML = changeString; 
}

/* 
   This function uses parseInt to turn a user response into an int
   Returns NaN (not a number) if the user provides bad input
*/
function getNumber() {
	// we'll request a number (as a string) from the user
	let numString = prompt("Enter a number:");
	
	// lets see if we can turn it into an int
	let numInt = parseInt(numString);
	
	// return the int to the calling function
	return numInt;
}