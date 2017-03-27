// function that loks to console if the "a key is pressed

// function checkKeyPressed(e) {
// 	if (e.keyCode == "65") {
// 		console.log("The 'a' key is pressed");
// 	}
// }
// // listens for the a key being pressed 
// window.addEventListener("keydown", checkKeyPressed, false);



var roland = document.getElementsByClassName('playerOne');
console.log(roland);

//listens for the keydown events and tries to run the movePlayerOne function
window.addEventListener("keydown", movePlayerOne);

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
	  	  console.log('right key presed');
	  	  rightPressed();
	  	break;
	  case 40: // down key
	  	  console.log('down key pressed');
	    break;
	}
}
//function that is called in the movePlayerOne function when the right key is pressed
function rightPressed() {
	console.log(roland);
	document.querySelector('.playerOne').style.left = "30px";
}
