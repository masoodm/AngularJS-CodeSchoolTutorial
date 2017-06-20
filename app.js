(function() { //This is called a closure, a good habit to get into.
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: "Diamond",
		price: "299.95",
		description: "This is one of the most expensive gems you can buy"
	}

})();
