enyo.ready(function() {

	enyo.kind({
		name: "PropertyCross.ListingItem",
		kind: onyx.Item,
		//layoutKind: enyo.FittableColumnsLayout, // can only use this in a Repeater
		style: "font-size:20px;",
		classes: "item enyo-border-box",
		events: {
			onItemTap: ""
		},
		bindings: [
			{from: ".controller.thumb_url", to: ".$.listItemThumb.src"},
			{from: ".controller.price", to: ".$.listItemPrice.content", transform: "transformPrice"},
			{from: ".controller.title", to: ".$.listItemTitle.content"}
		],
		components: [
			{ontap: "itemTap", components: [
				{name: "listItemThumb", kind: "enyo.Image", style: "inline-block"},
				{style: "display:inline-block; margin-left:14px;", components: [
					{name: "listItemPrice", allowHtml: "true", style: "font-size:26px"},
					{name: "listItemTitle"}
				]}
			]}
		],
		transformPrice: function(inPrice) {
			if (inPrice) {
				inPrice = "&pound;" + PropertyCross.Utils.numberWithCommas(inPrice);
			}
			return inPrice;
		},
		itemTap: function() {
			this.doItemTap();
		}
	});

});