var roland = document.getElementsByClassName('playerOne');
var walter = document.getElementsByClassName('playerTwo');

var rolandUp = 0;
var walterUp = 0;
var moveUp = 5;
console.log(roland);

/**
* listens for the keydown events and tries to run the movePlayerOne function
* TODO figure out how the fuck to add pixels to style.bottom everytime function runs
*/
window.addEventListener("keydown", function moveWalter(e) {

	// Switch function that listens for keys "up", "left", "down", "right"
	switch (e.keyCode) {

	  // left key
	  case 37: { 
	  	console.log('left key pressed');
	    break;
	  }

	  // up key
	  case 38: {
	  	function upPressed() {
		  walterUp = (walterUp + moveUp);
		  document.querySelector('.playerTwo').style.bottom = walterUp + 'px';
		}
		upPressed();
	  	console.log('up key pressed');
	  	break;
	  }

	  // right key
	  case 39: { 
	  	break;
	  }

	  // down key
	  case 40: { 
	  	console.log('down key pressed');
	    break;
	  }
	}
});


// TODO figure out how the fuck to add pixels to style.bottom everytime function runs
window.addEventListener("keydown", function moveRoland(e) {

	// Switch function that listens for keys "W", "A", "S", "D"
	switch (e.keyCode) {

	  // w key
	  case 87: {
	  	function upPressed() {
		  rolandUp = (rolandUp + moveUp);
		  document.querySelector('.playerOne').style.bottom = rolandUp + 'px';
		  checkWin();
		}
		upPressed();
	  	console.log('w key pressed');
	    break;
	  }
	  
	  // a key
	  case 65: {
	  	console.log('a key pressed');
	  	break;
	  }
	  
	  // d key
	  case 68: { 
	    console.log('d key pressed');
	  	break;
	  }
	 
	  // s key
	  case 83: {
	  	  console.log('s key pressed');
	    break;
	  }
	}
});

//Win Condition 
function checkWin() { 

  //check for Roland win
  if (rolandUp >= 220) {
  	alert ("Roland has made it to The Dark Tower. The Gunslinger wins!");
  }

  //check for Walter win
  else if (walterUp >=220) {
  	alert ("The Man in Black has made it to the tower. Go then, Gunslinger, there are other worlds than these.");
  }
}
