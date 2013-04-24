enyo.ready(function() {
	
	enyo.kind({
		name: "PropertyCross.PanelsController",
		kind: enyo.Controller,
		index: 0,
		back: function() {
			this.set("index", this.lastIndex);
		},
		indexChanged: function(fromIndex, toIndex) {
			this.set("lastIndex", fromIndex);
		}
	});

});