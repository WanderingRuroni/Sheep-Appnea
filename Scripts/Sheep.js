// JavaScript Document
var sag = sag || {};

/* The primary enemy through this game that comes in a variety of breeds
 * (Breeds incoming soon)
 */
sag.Sheep = sag.Drawable.extend
({
	xVel: 0,
	yVel: 0,
	rotation: 0,
	gravity: 4.9,
	alive: false,
	sType: "",
	mass: 0,
	color: "#000000",
	
	/* The spawn function now is for testing purposes to see if the movement
	 * works as intended
	 * It will be updated to include new sheep types that have different 
	 * behaviors and characteristics associated with them
	 */
	spawn: function(type)
	{
		this.xPos = this.bounds.x2 + this.iWidth;
		this.yPos = (Math.random() * 240) + 40;
		this.sType = type;
		this.yVel = (Math.random() * 4) + 4;
		this.xVel = (Math.random() * 5) + 5;
	},
	
	update: function()
	{
		this.context.clearRect(this.xPos-1, this.yPos-1, this.iWidth+1, this.iHeight+1);
		// functions needed for ballistic motion
		// x: x = x0 + vX*t
		// y: y = y0 + vY0*t - 0.5*g*t^2
		var iVel = Math.sqrt((xVel*xVel) + (yVel*yVel));
		//var angle = yVel/iVel * (180Math.PI);
		xPos += xVel;
		yPos -= yVel;
		yVel += (0.5*gravity);
		
		if(this.xPos < 0 - this.iWidth)
		{
			alive = false;	
		}
		
		this.draw();
	},
	
	draw: function()
	{
		if(this.context === null) 
		{
			throw new Error("context needs to be set on particle");
		}
		this.context.fillStyle = this.color;
		this.context.fillRect(this.xPos - 7.5, this.yPos - 7.5, iWidth, iHeight);
	},
	
	/* Resets all the values for the sheep object when it gets destroyed
	 * or goes off screen
	 * Also, jokes were made
	 */
	shear: function()
	{
		this.xPos = 0;
		this.yPos = 0;
		this.xVel = 0;
		this.yVel = 0;
		this.rotation = 0;
	}
});