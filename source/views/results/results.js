enyo.ready(function() {

	enyo.kind({
		name: "PropertyCross.ResultsPanel",
		kind: enyo.FittableRows,
		controller: ".app.controllers.results",
		components: [
			{kind: "onyx.Toolbar", components: [
				{name: "resultsHeader", content: "X of X matches", classes: "header-center"},
				{kind: "onyx.Button", content: "Back", classes:"header-button-left", ontap: "goBack"}
			]},
			{name: "resultsError", kind: "onyx.Drawer", open: false, classes: "panel-row error-drawer", components: [
				{name: "resultsErrorContent", content: "There was a problem loading the listings."}
			]},
			{name: "resultsBox", kind: "onyx.Groupbox", classes: "panel-row", fit: true, layoutKind:"FittableRowsLayout", components: [
				{kind: "onyx.GroupboxHeader", content: "Found locations"},
				/*{name: "resultsList", kind: "List", fit: true, touch: true, onSetupItem: "setupResultsListItem", components: [
					{name: "item3", style: "font-size:20px;", classes: "item enyo-border-box", ontap: "resultsListItemTap", components: [
						{name: "listItemThumb", kind: "enyo.Image", style: "inline-block"},
						{style: "display:inline-block; margin-left:14px;", components: [
							{name: "listItemPrice", allowHtml: "true", style: "font-size:26px"},
							{name: "listItemTitle"}
						]}
					]}
				]}*/
				{kind: enyo.Scroller, fit: true, touch: true, horizontal: "hidden", components: [
					{name: "resultsList", kind: "wip.Repeater", controller: ".app.controllers.results", onItemTap: "resultsListItemTap", components: [
						{name: "resultItem", kind: "PropertyCross.ListingItem"}
					]}
				]}
			]},
			{name: "moreDrawer", kind: "onyx.Drawer", open: false, components: [
				{name: "moreButton", kind: "onyx.Button", style: "display:block;margin-left:20px;margin-bottom:20px;", showing: false, content: "Load more...", onclick: "getMoreListings"}
			]},

			{name: "loadingPopup", kind: "PropertyCross.MessagePopup", message: "Loading..."}
		],
		controllerChanged: function() {
			this.log(this.controller);
		},
		goBack: function() {
			var ap = app.controllers.panels;
			var goBack = ap.get("goBack");
			if (goBack === this.name) {
				ap.set("goBack", "searchPanel"); // Sloppy
			}
			ap.selectPanelByName(ap.get("goBack"));
		},
		resultsListItemTap: function(inSender, inEvent) {
			this.log();
		}
	});

});