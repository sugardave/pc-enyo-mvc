enyo.ready(function() {

	enyo.kind({
		name: "PropertyCross.ListingPanel",
		kind: enyo.FittableRows,
		//controller: enyo.ObjectController,
		bindings: [
			{from: ".controller.img_url", to: ".$.propertyPhoto.src"},
			{from: ".controller.price", to: ".$.propertyPrice.content", transform: "transformPrice"},
			{from: ".controller.title", to: ".$.propertyTitle.content"},
			{from: ".controller.bedroom_number", to: ".$.propertyBed.content", transform: "transformBed"},
			{from: ".controller.bathroom_number", to: ".$.propertyBath.content", transform: "transformBath"},
			{from: ".controller.summary", to: ".$.propertySummary.content"},
			{from: ".controller.isFavorite", to: ".$.fav.value"}
		],
		components: [
			{kind: "onyx.Toolbar", components: [
				{name: "resultsHeader", content: "Property Details", classes: "header-center"},
				{kind: "onyx.Button", content: "Back", classes:"header-button-left", ontap: "goBack"},
				{name: "fav", kind: "onyx.ToggleIconButton", src: "assets/fav.png", classes:"header-button-right", ontap: "changeFavorite"}
			]},
			{name: "resultsBox", fit: true, layoutKind:"FittableRowsLayout", components: [
				{name: "propertyPrice", allowHtml: "true", style: "font-size:26px", classes: "panel-row"},
				{name: "propertyTitle", classes: "panel-row"},
				{name: "propertyPhoto", kind: "enyo.Image", src: "assets/home-b-160x120.png", classes: "listing-image panel-row"},
				{layoutKind: enyo.FittableColumnsLayout, classes: "panel-row", components: [
					{name: "propertyBed", allowHtml: true},
					{name: "propertyBath"}
				]},
				{name: "propertySummary", classes: "panel-row"}
			]}
		],
		controllerChanged: function() {
			this.log(this.bindings[1]);
			if (!this.controller) return;
			this.bindings[1].refresh();
			this.render(); 
		},
		goBack: function() {
			var ap = app.controllers.panels;
			// TODO: Find a better way to manage differing back states
			if (this.name === ap.get("goBack")) {
				ap.selectPanelByName("searchPanel");
			} else {
				ap.selectPanelByName(ap.get("goBack"));
			}
		},
		transformBath: function(inValue) {
			if (inValue) {
				inValue = inValue + " bath";
			}
			return inValue;
		},
		transformBed: function(inValue) {
			if (inValue) {
				inValue = inValue + " bed,&nbsp";
			}
			return inValue;
		},
		transformPrice: function(inPrice) {
			this.log("TRANSFORMING PRICE");
			if (inPrice) {
				inPrice = "&pound;" + PropertyCross.Utils.numberWithCommas(inPrice);
			}
			return inPrice;
		}
	});

});