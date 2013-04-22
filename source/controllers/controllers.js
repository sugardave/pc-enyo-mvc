enyo.ready(function () {

	enyo.kind({
		name: "PropertyCross.LocationsController",
		kind: enyo.ArrayController
	});

	enyo.kind({
		name: "PropertyCross.PanelsController",
		kind: enyo.Controller,
		index: 0
	});
	
	enyo.kind({
		name: "PropertyCross.ListingController",
		kind: enyo.Controller,
		data: "DEFAULT LISTING"
	});

	enyo.kind({
		name: "PropertyCross.ListingsController",
		kind: enyo.ArrayController
	});
});
