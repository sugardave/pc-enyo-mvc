enyo.ready(function() {
	enyo.kind({
		name: "PropertyCross.ResultsPanel",
		kind: enyo.FittableRows,
		controller: "app.controllers.results",
		bindings: [
			{from: ".controller.data", to: "listingsPage"}
		],
		components: [
			{kind: "onyx.Toolbar", components: [
				{name: "resultsHeader", content: "X of X matches", classes: "header-center"},
				{kind: "onyx.Button", content: "Back", classes:"header-button-left", ontap: "goBack"}
			]},
			{name: "resultsError", kind: "onyx.Drawer", open: false, classes: "panel-row error-drawer", components: [
				{name: "resultsErrorContent", content: "There was a problem loading the listings."}
			]},
			{name: "resultsBox", kind: "onyx.Groupbox", classes: "panel-row", fit: true, layoutKind:"FittableRowsLayout", components: [
				{kind: "onyx.GroupboxHeader", content: "Found locations"},
				{name: "resultsList", kind: "List", fit: true, touch: true, onSetupItem: "setupResultsListItem", components: [
					{name: "item3", style: "font-size:20px;", classes: "item enyo-border-box", ontap: "resultsListItemTap", components: [
						{name: "listItemThumb", kind: "enyo.Image", style: "inline-block"},
						{style: "display:inline-block; margin-left:14px;", components: [
							{name: "listItemPrice", allowHtml: "true", style: "font-size:26px"},
							{name: "listItemTitle"}
						]}
					]}
				]}
			]},
			{name: "moreDrawer", kind: "onyx.Drawer", open: false, components: [
				{name: "moreButton", kind: "onyx.Button", style: "display:block;margin-left:20px;margin-bottom:20px;", showing: false, content: "Load more...", onclick: "getMoreListings"}
			]},

			{name: "loadingPopup", kind: "PropertyCross.MessagePopup", message: "Loading..."}
		],

		listings: [],
		listingsPage: {},
		listingsPageChanged: function() {
			if (this.listingsPage && typeof this.listingsPage.response !== "undefined") {
				this.listings = [];
				this.processResponse(this.listingsPage);
			}
		},
		goBack: function() {
			var ap = app.controllers.panels;
			var goBack = ap.get("goBack");
			if (goBack === this.name) {
				ap.set("goBack", "searchPanel"); // Sloppy
			}
			ap.selectPanelByName(ap.get("goBack"));
		},
		processResponse: function(json) {
			this.listings = this.listings.concat(json.response.listings);
			this.$.resultsList.setCount(this.listings.length);
			this.$.resultsList.refresh();

			this.$.resultsHeader.setContent(this.listings.length + " of " + json.response.total_results + " matches");

			this.$.moreDrawer.setOpen(json.request.page < json.response.total_pages);
		},
		setupResultsListItem: function(inSender, inEvent) {
			var i = inEvent.index;
			this.$.item3.addRemoveClass("onyx-selected", inSender.isSelected(inEvent.index));
			this.$.listItemThumb.setAttribute('src', this.listings[i].thumb_url);
			this.$.listItemPrice.setContent("&pound;" + PropertyCross.Utils.numberWithCommas(this.listings[i].price));
			this.$.listItemTitle.setContent(this.listings[i].title);
		},
		getMoreListings: function() {
			this.$.loadingPopup.show();

			this.listingsPage.request.page++;

			var jsonp = new enyo.JsonpRequest({url:"http://api.nestoria.co.uk/api", callbackName:"callback"});
			jsonp.response(this, "moreResult");
			jsonp.error(this, "moreError");
			jsonp.go({
				pretty : '1',
				action : 'search_listings',
				encoding : 'json',
				listing_type : 'buy',
				'place_name': this.listingsPage.request.location,
				'page': this.listingsPage.request.page
			});
		},
		moreError: function(inSender, inResponse) {
			this.$.loadingPopup.hide();

			enyo.log(">>>> More error.");
			//this.showSearchError("An error occurred while searching. Please check your network connection and try again.");
		},
		moreResult: function(inSender, inResponse) {
			this.$.loadingPopup.hide();

			this.listingsPage = inResponse;
			var responseCode = this.listingsPage.response.application_response_code;
			enyo.log(">>>> Response: " + responseCode);
			if (responseCode === "100" || responseCode === "101" || responseCode === "102") {
				enyo.log(">>>> More results.");
				this.processResponse(inResponse);
			} else {
				enyo.log(">>>> More error.");
			}
		},
		resultsListItemTap: function(inSender, inEvent) {
			var i = inEvent.index;
			var p, panels = app.controllers.panels.get("panels");
			var lc;

			app.controllers.panels.set("goBack", this.name);
			panels.selectPanelByName("listingPanel");
			p = panels.getActive();
			this.log("ACTIVE PANEL");
			this.log(p);
			lc = p.get("controller");
			if (!lc) {
				this.log("NO LISTING CONTROLLER");
				lc = new PropertyCross.ListingController();
				//p.set("controller", lc);
			}
			lc.set("data", this.listings[i]);
			p.set("controller", lc);

			return;

			var l = new PropertyCross.ListingController();
			l.set("data", this.listings[i]);
			this.log("SETTING CONTROLLER:");
			this.log(l);
			p.set("controller", null);
			p.set("controller", l);
	
			//app.controllers.panels.selectPanelByName("listingPanel");
		},
		resultsListItemTapFoo: function(inSender, inEvent) {
			var i = inEvent.index;
			var p, panels = app.controllers.panels.get("panels");
			var l = new PropertyCross.ListingController();
			//l = panels.getActive().get("controller");
			l.set("data", this.listings[i]);
			//app.controllers.listings.set("data", this.listings[i]);
			//app.controllers.listings.set("listing", l);
			app.controllers.panels.set("goBack", this.name);
			panels.selectPanelByName("listingPanel");
			p = panels.getActive();
			this.log("SETTING CONTROLLER:");
			this.log(l);
			p.set("controller", null);
			p.set("controller", l);
	
			//app.controllers.panels.selectPanelByName("listingPanel");
		}
	});

});