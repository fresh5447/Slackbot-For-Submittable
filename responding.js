var readInput = function(input){
	var input = input.toLowerCase();
	if (input === "all") {
			console.log("all people");
		} else if (input ==="accepted") {
			console.log("accepted");
		} else if (input === "open") {
			console.log("open");
		} else if (input === "declined"){
			console.log("declined");
		};
}

readInput("All");