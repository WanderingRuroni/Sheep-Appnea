// JavaScript Document
var sag = sag || {};

sag.BombSheep = sag.Sheep.extend
({
	// boolean to start triggering the cluster bomb explosion
	canSplit: false,
	
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
			this.canSplit = true;
		}
		
		if(this.canSplit && this.xPos >= (this.bounds.x2 * 4/5))
		{
			this.clusterSheep(herd);
			this.canSplit = false;
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
	
	clusterSheep: function(herd)
	{
		for(var i = -1; i < 2; i++)
		{
			var tempSheep = sag.Sheep.extend
			({
				context: this.context,
				bounds: this.bounds,
			});
			
			var tempX = this.xPos + this.iWidth/2;
			var tempY = this.yPos + this.iHeight*i;
			
			tempSheep.init(0,0,7.5,7.5);
			herd.addMember(tempSheep);
			herd.getMember("miniCluster", tempX, tempY);
		}
		
		console.log("BOOM");
	}
});