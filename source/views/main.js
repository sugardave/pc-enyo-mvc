enyo.ready(function () {

	enyo.kind({
		name: "PropertyCross.MainView",
		kind: enyo.Panels,
		draggable: false,
		wrap: false,
		fit: true,
		controller: "app.controllers.panels",
		bindings: [
			{from: ".controller.index", to: ".index", twoWay: true}
		],
		components: [
			{name: "searchPanel", kind: "PropertyCross.SearchPanel"},
			{name: "resultsPanel", kind: "PropertyCross.ResultsPanel"}
		]
	});
	
});
