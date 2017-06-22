(function() { //This is called a closure, a good habit to get into.
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gems;
	});

	var gems = [
	{
		name: "Individual",
		price: "60/Hr",
		description: "Individual shoots with unlimited outfit changes",
		canPurchase: "true",
		soldOut: "false",
		images: [
			"individual/DSC_002.jpg", 
			"individual/DSC_0049.jpg", 
			"individual/DSC_0113.jpg", 
			"individual/DSC_0164.jpg", 
			"individual/DSC_0299.jpg", 
			"individual/DSC_0383.jpg",
			"individual/DSC_0986.jpg", 
			"individual/DSC_0991.jpg",
			"individual/File_000.jpeg"
		]
	},
	{
		name: "Group",
		price: "$60/Hr + $10/Person",
		description: "Group shots with unlimited outfit changes",
		canPurchase: "true",
		soldOut: "false",
		images: [
			"group/DSC_0980.jpg",
			"group/DSC_0436.jpg",
			"group/DSC_0009.jpg", 
			"group/DSC_0011.jpg"			
		]
	}
	];

})();
