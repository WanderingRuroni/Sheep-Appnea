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
	alive: false,
	sType: "",
	mass: 0,
	
	/* Based on the type of sheep being spawned,
	 * each one will have different stats based on their unique behaviors
	 * ex/ Bomb sheep explode shortly after hitting the player
	 */
	spawn: function(type, x, y)
	{
		if(type != "miniCluster")
		{
			this.xPos = this.bounds.x2 + this.iWidth/2;
			this.yPos = (Math.random() * 100) + 40;
			this.sType = type;
			this.yVel = (Math.random() * 2.0) + 0.5;
			this.xVel = 2;
			this.alive = true;
		}
		else
		{
			this.xPos = x;
			this.yPos = y;
			this.sType = type;
			this.xVel = 2;
			this.yVel = (Math.random() * 2.0) + 0.5;
			this.alive = true;
		}
	},
	
	// refactoring for inheritance into more sheep classes with special behaviors and stats
	// will be used as an abstract method that will be changed by each child
	// I will keep previous code there in case I need to revert
	update: function(herd)
	{
		this.context.clearRect(this.xPos-1, this.yPos-1, this.iWidth+2, this.iHeight+2);
		// functions needed for ballistic motion
		// x: x = x0 + vX*t
		// y: y = y0 + vY0*t - 0.5*g*t^2
		var iVel = Math.sqrt((this.xVel*this.xVel) + (this.yVel*this.yVel));
		//var angle = yVel/iVel * (180Math.PI);
		this.xPos -= this.xVel;
		this.yPos -= this.yVel;
		this.yVel -= 0.5;
		
		// makes sure the sheep will bounce/hop if they hit the ground
		if(this.yPos > this.bounds.y2 - this.iHeight/2)
		{
			this.yPos = this.bounds.y2 - this.iHeight/2;
			this.yVel *= -0.9;	
		}
		
		if(this.isColliding)
		{
			this.xVel *= -1;
			this.xPos += this.iWidth/2;
			this.isColliding = false;	
		}
		
		if(this.xPos < 0 - this.iWidth || this.xPos > this.bounds.x2 + this.iWidth*2)
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
			throw new Error("context needs to be set for Sheep");
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