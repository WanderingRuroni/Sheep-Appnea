// JavaScript Document
var sag = sag || {};

/* The primary enemy through this game that comes in a variety of breeds
 * (Breeds incoming soon)
 */
sag.Sheep = sag.Drawable.extend
({
	xVel: 0.0,
	yVel: 0.0,
	rotation: 0.0,
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
		this.yPos = (Math.random() * 100) + 40;
		this.sType = type;
		this.yVel = (Math.random() * 2.0) + 0.5;
		this.xVel = (Math.random() * 15) + 5;
		this.alive = true;
	},
	
	update: function()
	{
		this.context.clearRect(this.xPos-1, this.yPos-1, this.iWidth+2, this.iHeight+2);
		// functions needed for ballistic motion
		// x: x = x0 + vX*t
		// y: y = y0 + vY0*t - 0.5*g*t^2
		var iVel = Math.sqrt((this.xVel*this.xVel) + (this.yVel*this.yVel));
		//var angle = yVel/iVel * (180Math.PI);
		this.xPos -= this.xVel;
		this.yPos -= this.yVel;
		this.yVel -= (0.5*this.gravity);
		
		if(this.xPos < 0 - this.iWidth)
		{
			return true;	
		}
		else
		{
			this.draw();
		}
	},
	
	draw: function()
	{
		if(this.context === null) 
		{
			throw new Error("context needs to be set on particle");
		}
		this.context.fillStyle = this.color;
		this.context.fillRect(this.xPos, this.yPos, this.iWidth, this.iHeight);
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
		this.alive = false;
	}
});