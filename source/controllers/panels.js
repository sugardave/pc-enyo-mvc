enyo.ready(function() {

	enyo.kind({
		name: "PropertyCross.PanelsController",
		kind: enyo.ObjectController,
		index: 0,
		panels: null, // this will get set by the Panels instance that uses it
		getActive: function() {
			this.log(this.panels.getActive());
			return this.panels.getActive;
		},
		selectPanelByNameFoo: function() {
			//return enyo.bind(this, this.panels.selectPanelByName);
			this.log(arguments);
			this.log(this.panels.selectPanelByName.apply(arguments));
			return enyo.bind(this.panels.owner, this.panels.selectPanelByName);
		}
	});

});