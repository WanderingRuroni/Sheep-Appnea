// JavaScript Document
var sag = sag || {};

sag.Player = sag.Drawable.extend
({
	xVel: 0,
	yVel: 0,
	fireRate: 15,
	counter: 0,
	testSheepPool: null,
	
	init: function(testPool)
	{
		this.testSheepPool = testPool;
	},
	
	update: function()
	{
		this.counter++;
		
		this.context.clearRect(this.xPos, this.yPos, this.iWidth, this.iHeight);
		
		if(KEY_STATUS.space && this.counter >= this.fireRate)
		{
			this.testSheepPool.getMember("sheep");
			this.counter = 0;	
		}
	}
});