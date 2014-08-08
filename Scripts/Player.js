// JavaScript Document
var sag = sag || {};

sag.Player = sag.Drawable.extend
({
	yVel: 5,
	fireRate: 15,
	counter: 0,
	cWidth: 0,
	cHeight: 0,
	
	draw: function()
	{
		if(this.context === null) 
		{
			throw new Error("context needs to be set for Sheep");
		}
		this.context.fillStyle = this.color;
		this.context.fillRect(this.xPos, this.yPos, this.iWidth, this.iHeight);
	},
	
	update: function(testSheepPool)
	{
		this.counter++;
		
		this.context.clearRect(this.xPos, this.yPos, this.iWidth, this.iHeight);
		if(KEY_STATUS.up || KEY_STATUS.down)
		{
			if(KEY_STATUS.up)
			{
				this.yPos -= this.yVel;	
				if(this.yPos <= 0) this.yPos = 0;
			}
			else if(KEY_STATUS.down)
			{
				this.yPos += this.yVel;	
				if(this.yPos >= this.cHeight - this.iHeight) 
				{
					this.yPos = this.cHeight - this.iHeight;
				}
			}
		}
		
		this.draw();
		
		if(KEY_STATUS.space && this.counter >= this.fireRate)
		{
			testSheepPool.getMember("sheep");
			this.counter = 0;	
		}
	}
});