// First variable helps to keep the namespace of the program clean while 
// making sure that the overall containing object is only created once
var sag = sag || {};

sag.Screen = 
{
	paused: false,
	
	extend: function(props)
	{
		var prop, obj;
		obj = Object.create(this);
		for(prop in props) {
			if(props.hasOwnProperty(prop)) {
				obj[prop] = props[prop];
			}
		}
		return obj;	
	},
	
	pause: function()
	{
		this.paused = true;
	},
	
	resume: function()
	{
		this.paused = false;
	},
};