/*
   We're going to rebuild our event and interaction code using jQuery
   Note how much simpler it is to grab elements
   By convention, all jQuery variables start with $
*/

/*
   Lets use jQuery's document load function to ensure our code starts only after the page loads
   This is a short form of jQuery(document).ready(function() { --your code here-- });
*/
$(function() {
	testEvents();
});

function testEvents() {

	// let's add an event listener and call a function
	$("#submit").on("click", myClickFunction);

	// let's look at managing bubbling
	$("#page").on("click", function(event) {
		  updateText($(this).attr("id"));
		  
		  // prevents the default action from taking place (submitting, linking, etc.)
		  event.preventDefault();
		  // IMPORTANT
		  
		  // stops the propagation (bubbling) of an event
		  event.stopPropagation();
		  // this can also be achieved by returning false
	});
	
	// we assign events using the "on" jQuery function
	$("#greeting").on("mouseover", function() {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
		updateText($(this).attr("id"));
	});
}

/*
 updateText will help us see how events are being fired
*/
function updateText(elemID) {
	// Note use of "append" to add content to the element using jQuery
	$("#status").append("<br/>" + elemID + " is processing an event!");
}

/*
 We'll skip creating a variable and just use jQuery's selector syntax directly
*/
function myClickFunction() {
	$("#greeting").css("background-color", "blue");
	$("#greeting").css("color", "black");
	updateText($(this).attr("id"));
}

/*
 We can removes our event listeners from ALL elements with a single call
 Run this manually from the console to test it out
*/
function removeAll() {
	$("*").off();
}