// JavaScript Document
var sag = sag || {};

sag.Pool = 
{
	pool: [],
	size: 0,
	
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
				this.pool.push(sheep);
			}
		}
	},
	
	// Pops a member of the pool out of its array and spawns the object into
	// the game world
	getMember: function(type)
	{
		if(!this.pool[size - 1].alive)
		{
			this.pool[size - 1].spawn(type);
			this.pool.unshift(this.pool.pop());
		}
	},
	
	animate: function()
	{
		for(var i = 0; i < size; i++)
		{
			if(this.pool[i].alive)
			{
				this.pool[i].update();
			}
			else
			{
				this.pool[i].shear();
				var tempItem = this.pool[0];
				this.pool[0] = this.pool[i];
				this.pool[i] = tempItem;
				this.pool.push(this.pool.shift());
				/* Will come back to this if my solution causes problems
				pool.push((pool.splice(i,1))[0]);
				 */
				i--;
			}
		}
	}
};