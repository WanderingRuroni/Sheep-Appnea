var sag = sag || {};

/* A base class to be used for all obejcts that will be drawn to the screen in game
 * Primary use will be for the player, enemies, menu buttons and any other projectiles 
 * that may be seen in game
 */
 
sag.Drawable = 
{
	xPos: 0,
	yPos: 0,
	iWidth: 0,
	iHeight: 0,
	bounds: null,
	context: null,
	color: "#000000",
	
	/* A function that allows us to use inheritance on future classes using
	 * this class framework
	 */
	extend: function(props) {
		var prop, obj;
		obj = Object.create(this);
		for(prop in props) {
			if(props.hasOwnProperty(prop)) {
				obj[prop] = props[prop];
			}
		}
		return obj;
	},
	
	// Basic initialization function that will probably need refactoring
	init: function(xPos, yPos, iWid, iHei)
	{
		this.xPos = xPos;
		this.yPos = yPos;
		this.iWidth = iWid;
		this.iHeight = iHei;
	},
	
	// abstract draw function for other classes to override
	draw: function()
	{
	}
};