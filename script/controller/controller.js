angular.module("myApp")
	.controller("myCtrl", ['$scope', 'MyApis', 'Helper', function($scope, MyApis, Helper) {

	$scope.cData = {			
		partners: [],
		products: [],
		purchasedItems: [],
		selectedProduct: null,
		numberOfApiCallsInProgress: 0
	}

	$scope.buyProduct = function buyProduct(product) {
		$scope.cData.purchasedItems.push(product);
	};
	
	$scope.displayProductDetails = function displayProductDetails(product) {
		$scope.cData.selectedProduct = product;
	};

	$scope.clearSelectedProduct = function clearSelectedProduct() {
		$scope.cData.selectedProduct = null;
	};

	$scope.getRequiredProductName = function getRequiredProductName(product) {
		return $scope.cData.products.filter(item => {
			return item.id === product.requiresProductId
		})[0].name;
	};

	$scope.getProducts = function getProducts() {
		$scope.cData.numberOfApiCallsInProgress++;
		MyApis.getProducts().then(function(products) {
			$scope.cData.products = products;
			$scope.cData.numberOfApiCallsInProgress--
		}, function(errorMessage) {
			$scope.cData.numberOfApiCallsInProgress--
		});
	};
	
	$scope.getPartners = function getPartners() {
		$scope.cData.numberOfApiCallsInProgress++
		MyApis.getPartners().then(function(partners) {
			$scope.cData.numberOfApiCallsInProgress--
			$scope.cData.partners = partners;
			$scope.selectInput = $scope.cData.partners[1];
		}, function(errorMessage) {
			$scope.cData.numberOfApiCallsInProgress--
		});
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
