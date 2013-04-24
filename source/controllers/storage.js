enyo.ready(function () {

	enyo.kind({
		name: "PropertyCross.StorageController",
		kind: enyo.Controller,
		/* Store the value of item[key] to the stringified version of obj. */
		store: function(name, obj) {
			localStorage.setItem(name, enyo.json.stringify(obj));
		},
		/* Retrieve the item with the key 'name'. */
		retrieve: function(name) {
			var result;
			if(typeof name === "string") {
				result = localStorage.getItem(name);
			}

			if(typeof result === "string"){
				return enyo.json.parse(result);
			} else if(typeof result === "object" && result !== null) {
				enyo.log("OBJECT:", result);
				throw "ERROR [Storage.get]: getItem returned an object. Should be a string.";
			} else if(typeof result === "undefined" || result === null){
				throw "ERROR: [Storage.get]: getItem returned a falsey value. Should be a string.";
			}
			throw "ERROR: Unspecified";
		},
		/* Remove the item with the key 'name'. */
		remove: function(name){
			if(typeof name === "string") {
				localStorage.remove(name);
			} else {
				throw "ERROR [Storage.remove]: 'name' was not a String.";
			}
		}
	});

});
