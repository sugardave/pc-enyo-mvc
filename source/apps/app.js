enyo.kind({
	name: "PropertyCross.Application",
	kind: "enyo.Application",
	controllers: [
		{name: "storage", kind: "PropertyCross.StorageController"},
		{name: "results", kind: "PropertyCross.ResultsController"},
		{name: "panels", kind: "PropertyCross.PanelsController"},
		{name: "listing", kind: "PropertyCross.ListingController"},
		{name: "listings", kind: "PropertyCross.ListingsController"},
		//{name: "favorites", kind: "PropertyCross.FavoritesController"}
		{name: "favorites", kind: enyo.Controller}
	],
	view: "PropertyCross.MainView",
	addRecord: function (sender, event) {
		var data = this.controllers.listing.get("data");
		var listings = this.controllers.listings;
		listings.add({message: data});
	}
});
