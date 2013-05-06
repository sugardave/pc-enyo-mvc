enyo.ready(function () {

	enyo.kind({
		name: "PropertyCross.MainView",
		kind: enyo.Panels,
		draggable: false,
		wrap: false,
		fit: true,
		controller: "app.controllers.panels",
		bindings: [
			{from: ".controller.index", to: ".index", twoWay: true},
			{from: ".selectPanelByName", to: ".controller.selectPanelByName", transform: "bindMethod"}
		],
		components: [
			{name: "searchPanel", kind: "PropertyCross.SearchPanel"},
			{name: "favoritesPanel", kind: "PropertyCross.FavoritesPanel"},
			{name: "resultsPanel", kind: "PropertyCross.ResultsPanel"},
			{name: "listingPanel", kind: "PropertyCross.ListingPanel"}
		],
		create: function() {
			this.inherited(arguments);
			//this.$.listingPanel.set("controller", new PropertyCross.ListingController());
			
			app.controllers.panels.set("panels", this); // for some later hackery
		},
		bindMethod: function(inMethod) {
			return this.bindSafely(inMethod);
		}
	});
	
});
