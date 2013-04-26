enyo.ready(function() {

	enyo.kind({
		name: "PropertyCross.ListingsPanel",
		kind: enyo.FittableRows,
		controller: "app.controllers.listings",
		bindings: [
			{from: ".controller.data", to: "listing"}
		],
		listing: {},

		components: [
			{kind: "onyx.Toolbar", components: [
				{name: "resultsHeader", content: "Property Details", classes: "header-center"},
				{kind: "onyx.Button", content: "Back", classes:"header-button-left", ontap: "goBack"},
				{name: "fav", kind: "onyx.ToggleIconButton", src: "assets/fav.png", classes:"header-button-right", ontap: "changeFavorite"}
			]},
			{name: "resultsBox", fit: true, layoutKind:"FittableRowsLayout", components: [
				{name: "propertyPrice", allowHtml: "true", style: "font-size:26px", classes: "panel-row"},
				{name: "propertyTitle", classes: "panel-row"},
				{name: "propertyPhoto", kind: "enyo.Image", classes: "listing-image panel-row"},
				{name: "propertyBedBath", classes: "panel-row"},
				{name: "propertySummary", classes: "panel-row"}
			]}
		],
		listingChanged: function() {
			if (this.listing && typeof this.listing !== "undefined" && this.listing !== {}) {
				this.initialize(this.listing); // using this for now until refactor
			}
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
		initialize: function(json) {
			if (json !== {}) {
				this.listing = json;
				this.$.propertyPhoto.setSrc('assets/home-b-160x120.png');
				this.$.propertyPhoto.setSrc(json.img_url);
				this.$.propertyPrice.setContent("&pound;" + PropertyCross.Utils.numberWithCommas(json.price));
				this.$.propertyTitle.setContent(json.title);
				this.$.propertyBedBath.setContent(json.bedroom_number + " bed, " + json.bathroom_number + " bath");
				this.$.propertySummary.setContent(json.summary);
			}
		},
		setFavorite: function(isFav) {
		 this.$.fav.setValue(isFav);
		},
		changeFavorite: function(inSender, inEvent) {
			//this.doChangeFav({data: this.listing});
			app.controllers.favorites.set("data", this.listing);

		}
	});


});