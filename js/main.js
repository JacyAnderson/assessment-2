// function that loks to console if the "a key is pressed
function checkKeyPressed(e) {
	if (e.keyCode == "65") {
		console.log("The 'a' key is pressed");
	}
}
// listens for the a key being pressed 
window.addEventListener("keydown", checkKeyPressed, false);



var roland = document.getElementsByClassName('playerOne');


//function that is called in the movePlayerOne function below when the right key gets pressed
function rightPressed() {
	console.log(roland);
	roland.style.left = parseInt(roland.style.left)+ 5 + 'px';
}


//switch function that responds to keydown
function movePlayerOne(e) {
	switch (e.keyCode) {
	  case 37: //left key
	  	  console.log('left key pressed');
	    break;
	  case 38: // up key
	  	  console.log('up key pressed');
	  	break;
	  case 39: // right key
	  	  rightPressed();
	      console.log('right key presed');
	  	break;
	  case 40: // down key
	  	  console.log('down key pressed');
	    break;
	}
}
//listens for the keydown events and tires to run the movePlayerOne function
window.addEventListener("keydown", movePlayerOne);