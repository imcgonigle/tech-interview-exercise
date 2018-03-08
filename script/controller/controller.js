angular.module("myApp")
	.controller("myCtrl", ['$scope', 'MyApis', 'Helper', function($scope, MyApis, Helper) {

	$scope.cData = {			
		partners: [],
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
	
	$scope.getPartners = function getPartners() {
		MyApis.getPartners().then(function(partners) {
			$scope.cData.partners = partners;
			$scope.selectInput = $scope.cData.partners[1];
		}, function(errorMessage) {});
	};

	$scope.productFilter = function productFilter(value) {
		var selectInput = $scope.cData.selectInput;
		return (selectInput == undefined || selectInput["products"].indexOf(value.id) !== -1) 
	};

	$scope.init = function init() {
		$scope.getPartners();
		$scope.getProducts();
	};

	$scope.init();

}]);
