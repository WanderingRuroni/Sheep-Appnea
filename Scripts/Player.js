// JavaScript Document
var sag = sag || {};

sag.Player = sag.Drawable.extend
({
	xVel: 0,
	yVel: 0,
	fireRate: 15,
	counter: 0,
	testSheepPool: null,
	
	init: function(pContext,testPool)
	{
		context: pContext;
		testSheepPool = testPool;
	},
	
	update: function()
	{
		counter++;
		
		this.context.clearRect(this.xPos, this.yPos, this.iWidth, this.iHeight);
		
		if(KEY_STATUS.space)
		{
			testSheepPool.getMember("sheep");	
		}
	}
});