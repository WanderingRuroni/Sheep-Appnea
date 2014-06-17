// JavaScript Document
var sag = sag || {};

sag.Player = sag.Drawable.extend
({
	xVel: 0,
	yVel: 0,
	fireRate: 15,
	counter: 0,
	testSheepPool: sag.Pool.extend(),
	
	init: function()
	{
		testSheepPool.init(10,"sheep");
	},
	
	update: function()
	{
		counter++;
		
		this.context.clearRect(this.xPos, this.yPos, this.iWidth, this.iHeight);
		
	},
});