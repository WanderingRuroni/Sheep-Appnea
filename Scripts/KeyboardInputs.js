// A helper class that keeps track of which specified keys are pressed or not
// through the document

// FUTURE ADDITIONS: Checking for scroll wheel to add different player control functionality

// A JSON object that holds all the keycodes necessary for the game
KEY_CODES = 
{
	27: 'escape',
	32: 'space',
	37: 'left',
	38: 'up',
	39: 'right',
	40:	'down',
}

/* Creates an array to store whether or not the key is pressed and sets all
   of the keys' statuses to false
 */
KEY_STATUS = {};
for(code in KEY_CODES)
{
	KEY_STATUS[KEY_CODES[code]] = false;
}

/* Makes sure the document is ready to check for onkeydown events and
   when the key is pressed, sets the status to true
 */
document.onkeydown = function(e)
{
	var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
	if(KEY_CODES[keyCode])
	{
		e.preventDefault();
		KEY_STATUS[KEY_CODES[keyCode]] = true;	
	}
}
/* Makes sure the document is also ready to check for onkeyup events and
   sets the key's status to false if the key is released
 */
document.onkeyup = function(e)
{
	var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
	if(KEY_CODES[keyCode])
	{
		e.preventDefault();
		KEY_STATUS[KEY_CODES[keyCode]] = false;	
	}	
}