enyo.ready(function() {

	enyo.kind({
		name: "PropertyCross.SearchPanel",
		kind: enyo.FittableRows,
		components: [
			{name: "test", kind: enyo.Controller},
			{name: "recentLocations", kind: enyo.ArrayController},
			{name: "suggestedLocations", kind: enyo.ArrayController},
			{kind: onyx.Toolbar, layoutKind: enyo.FittableColumnsLayout, components: [
				{kind: enyo.FittableColumns, fit: true, classes: "enyo-center", components: [
					{fit: true, content: "PropertyCross"}
				]},
				{kind: onyx.Button, content: "Faves", ontap: "showFaves"}
			]},
			{classes: "panel-row", content: "Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!"},
			{kind: "onyx.InputDecorator", classes: "input-wide panel-row", components: [
				{classes: "input-wide-box", components: [
					{name: "searchInput", kind: "enyo.Input", placeholder: "Search term", onkeypress: "searchInputKeypress"}
				]},
				{kind: "onyx.Icon", classes: "input-right", src: "assets/cancel.png", ontap: "clearSearchInput" }
			]},
			{classes: "panel-row", components: [
				{kind: "onyx.Button", content: "Go", onclick: "search"},
				{kind: "onyx.Button", content: "My location", onclick: "geolocate"}
			]},
			{name: "searchError", kind: "onyx.Drawer", open: false, classes: "panel-row error-drawer", components: [
				{name: "searchErrorContent", content: "There was a problem with your search."}
			]},
			{kind: "Panels", name:"searchBoxes", fit:true, realtimeFit: true, classes: "panel-row", style: "margin-bottom:20px", components: [
				{name: "recentBox", kind: "onyx.Groupbox", fit: true, layoutKind:"FittableRowsLayout", components: [
					{kind: "onyx.GroupboxHeader", content: "Recent searches"},
					{name: "recentList", kind: "List", fit: true, touch: true, onSetupItem: "setupRecentListItem", components: [
						{name: "item1", style: "font-size:20px;", classes: "item enyo-border-box", ontap: "recentListItemTap", components: [
							{name: "listItemRecent", classes: "recent"},
							{name: "listItemMatches", classes: "matches"}
						]}
					]}
				]},
				{name: "suggestedBox", kind: "onyx.Groupbox",  fit: true, layoutKind:"FittableRowsLayout", components: [
					{kind: "onyx.GroupboxHeader", content: "Suggested locations"},
					{name: "suggestedList", kind: "List", fit: true, touch: true, onSetupItem: "setupSuggestedListItem", components: [
						{name: "item2", style: "font-size:20px;", classes: "item enyo-border-box", ontap: "suggestedListItemTap", components: [
							{name: "listItemSuggested", classes: "recent"}
						]}
					]}
				]}
			]},
			{name: "searchingPopup", kind: "PropertyCross.MessagePopup", message: "Searching..."}
		],
		create: function() {
			this.inherited(arguments);
			this.log(this.$.recentLocations);
		}
	});

});