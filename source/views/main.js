enyo.ready(function () {

	enyo.kind({
		name: "PropertyCross.MainView",
		kind: enyo.Panels,
		draggable: false,
		wrap: false,
		fit: true,
		bindings: [
			{from: ".app.controllers.panels.index", to: ".index", twoWay: true}
		],
		components: [
			{name: "searchPanel", kind: "PropertyCross.SearchPanel"}
		]
	});
	
});
