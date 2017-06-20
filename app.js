(function() { //This is called a closure, a good habit to get into.
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gems;
	});

	var gems = [
	{
		name: "Diamond",
		price: "299.95",
		description: "This is one of the most expensive gems you can buy",
		canPurchase: "true",
		soldOut: "false"
	},
	{
		name: "Ruby",
		price: "249.95",
		description: "This is one of the most expensive gems you can buy, but less expensive than a diamond",
		canPurchase: "true",
		soldOut: "false"
	}
	];

})();
