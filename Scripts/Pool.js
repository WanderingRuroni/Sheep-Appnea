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
	
	init: function(maxSize,oType,sContext, nBounds)
	{
		this.size = maxSize;
		
		if(oType == "sheep")
		{
			for(var i = 0; i < this.size; i++)
			{
				var sheep = sag.BombSheep.extend({
					context: sContext,
					bounds: nBounds
				});
				// initialization will be changed once I have sprites
				sheep.init(0,0,15,15);
				this.pool.push(sheep);
			}
		}
	},
	
	// Pops a member of the pool out of its array and spawns the object into
	// the game world
	getMember: function(type,x,y)
	{
		if(!this.pool[this.size - 1].alive)
		{
			this.pool[this.size - 1].spawn(type,x,y);
			this.pool.unshift(this.pool.pop());
		}
	},
	
	addMember: function(newMember)
	{
		this.size = this.pool.push(newMember);
	},
	
	animate: function()
	{
		for(var i = 0; i < this.size; i++)
		{
			if(this.pool[i].alive)
			{
				if(this.pool[i].update(this))
				{
					// for the bomb sheep where its mini sheep arent permanent additions to the sheep herd
					// the mini sheep that were added need to be removed permanently
					// Upon thinking, mini sheep could be a new type but will stick with this solution for now.
					if(this.pool[i].sType == "miniCluster")
					{
						this.pool.splice(i,1);
						this.size = this.pool.length;
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
			else
			{
				break;
			}
		}
	}
};