enyo.ready(function() {

	enyo.kind({
		name: "PropertyCross.PanelsController",
		kind: enyo.ObjectController,
		index: 0,
		panels: null, // this will get set by the Panels instance that uses it
		getActive: function() {
			return this.panels.getActive;
		}
	});

});