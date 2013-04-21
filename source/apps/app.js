enyo.kind({
	name: "PropertyCross.Application",
	kind: "enyo.Application",
	controllers: [
		{name: "panels", kind: "PropertyCross.PanelsController"},
		{name: "listing", kind: "PropertyCross.ListingController"},
		{name: "listings", kind: "PropertyCross.ListingsController"}
	],
	view: "PropertyCross.MainView",
	addRecord: function (sender, event) {
		var data = this.controllers.listing.get("data");
		var listings = this.controllers.listings;
		listings.add({message: data});
	}
});
