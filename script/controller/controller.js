angular.module("myApp")
	.controller("myCtrl", ['$scope', 'MyApis', 'Helper', function($scope, MyApis, Helper) {

	$scope.cData = {			
		products: [],			
		selectedProduct: null
	}

	$scope.buyProduct = function buyProduct(product) {
		$location.path('/buyProduct').search({id: product.id});
	};

	
	$scope.displayProductDetails = function displayProductDetails(product) {
		$scope.cData.selectedProduct = product;
	};	

	$scope.getProducts = function getProducts() {		
		MyApis.getProducts().then(function(products) {
			$scope.cData.products = products;
	    }, function(errorMessage) {});
	};
    

	$scope.init = function init() {
		$scope.getProducts();
	};

	$scope.init();

}]);
