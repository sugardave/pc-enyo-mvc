enyo.kind({
	name: "PropertyCross.Application",
	kind: "enyo.Application",
	controllers: [
		{name: "storage", kind: "PropertyCross.StorageController"},
		{name: "panels", kind: "PropertyCross.PanelsController"},
		{name: "results", kind: enyo.Controller},
		{name: "listing", kind: enyo.Controller},
		{name: "listings", kind: enyo.Controller},
		{name: "favorites", kind: enyo.Controller}
	],
	view: "PropertyCross.MainView"
});
