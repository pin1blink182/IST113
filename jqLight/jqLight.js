var switchOff = true;

$(function() {
			myClickFunction();
});

function myClickFunction() {
	$("#button").on("click", function() {
		switchOff = !switchOff;
		if (switchOff) {
			$("body").css("background-color", "black");
			$("body").css("color", "white");
			$("#lightswitch").css("float", "right");
			$("#button").text("Off");
		}
		else {
			$("#body").css("background-color", "white");
			$("#body").css("color", "black");
			$("#lightswitch").css("float", "left");
			$("#button").text("On");
		}
	});
}