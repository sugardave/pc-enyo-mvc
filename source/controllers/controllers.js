enyo.ready(function () {

	enyo.kind({
		name: "PropertyCross.LocationsController",
		kind: enyo.ArrayController
	});
	
	enyo.kind({
		name: "PropertyCross.ListingController",
		kind: enyo.Controller,
		data: "DEFAULT LISTING"
	});

	enyo.kind({
		name: "PropertyCross.ListingsController",
		kind: enyo.Controller
	});

	enyo.kind({
		name: "PropertyCross.ResultsController",
		kind: enyo.Controller
	});

	enyo.kind({
		name: "PropertyCross.FavoritesController",
		kind: enyo.Controller
	});
});
