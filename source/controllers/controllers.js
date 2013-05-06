enyo.ready(function () {

	enyo.kind({
		name: "PropertyCross.ListingController",
		kind: enyo.ObjectController,
		favorite: enyo.computed(function() {
			return true;
		})
	});

	enyo.kind({
		name: "PropertyCross.ListingsController",
		kind: enyo.ArrayController
	});

});
