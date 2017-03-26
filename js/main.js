function checkKeyPressed(e) {
	if (e.keyCode == "65") {
		console.log("The 'a' key is pressed");
	}
}

window.addEventListener("keydown", checkKeyPressed, false);