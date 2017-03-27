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
//switch function that responds to keydown
window.addEventListener("keydown", function moveWalter(e){
	switch (e.keyCode) {
	  case 37: //left key
	  	  console.log('left key pressed');
	    break;
	  case 38: // up key
	  	  function upPressed() {
		    document.querySelector('.playerTwo').style.bottom = 30 + "px";
		  }
		  upPressed();
	  	  console.log('up key pressed');
	  	break;
	  case 39: // right key

	  	break;
	  case 40: // down key
	  	  console.log('down key pressed');
	    break;
	}
});
window.addEventListener("keydown", function moveRoland(e){
	switch (e.keyCode) {
	  case 87: //w key
	  	function upPressed() {
		  document.querySelector('.playerOne').style.bottom = 30 + "px";
		  }
		 upPressed();
	  	console.log('w key pressed');
	    break;
	  case 65: // a key
	  	console.log('a key pressed');
	  	break;
	  case 68: // d key
	    console.log('d key pressed');
	  	break;
	  case 83: // s key
	  	  console.log('s key pressed');
	    break;
	}
});
//function that is called in the movePlayerOne function when the right key is pressed

