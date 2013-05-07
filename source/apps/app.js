enyo.kind({
	name: "PropertyCross.Application",
	kind: "enyo.Application",
	controllers: [
		{name: "storage", kind: "PropertyCross.StorageController"},
		{name: "panels", kind: "PropertyCross.PanelsController"},
		{name: "results", kind: "PropertyCross.ListingsController"},
		//{name: "listing", kind: enyo.Controller},
		//{name: "listing", kind: "PropertyCross.ListingController"},
		//{name: "listings", kind: enyo.Controller},
		{name: "favorites", kind: enyo.Controller}
	],
	view: "PropertyCross.MainView",
	resultLimiter: 20 // use this to limit display results per "more results" request
});
