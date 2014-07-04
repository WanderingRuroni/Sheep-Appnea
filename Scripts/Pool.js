// JavaScript Document
var sag = sag || {};

sag.Pool = 
{
	size: 0,
	pool: [],
	
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
	
	init: function(maxSize,oType,sContext)
	{
		size = maxSize;
		
		if(oType == "sheep")
		{
			for(var i = 0; i < size; i++)
			{
				var sheep = sag.Sheep.extend({
					context: sContext
				});
				// initialization will be changed once I have sprites
				sheep.init(0,0,15,15);
				pool[i] = sheep;
			}
		}
	},
	
	// Pops a member of the pool out of its array and spawns the object into
	// the game world
	getMember: function(type)
	{
		if(!pool[size - 1].alive)
		{
			pool[size - 1].spawn(type);
			pool.unshift(pool.pop());
		}
	},
	
	animate: function()
	{
		for(var i = 0; i < size; i++)
		{
			if(pool[i].alive)
			{
				pool[i].update();
			}
			else
			{
				pool[i].shear();
				var tempItem = pool[0];
				pool[0] = pool[i];
				pool[i] = tempItem;
				pool.push(pool.shift());
				/* Will come back to this if my solution causes problems
				pool.push((pool.splice(i,1))[0]);
				 */
				i--;
			}
		}
	}
};