angular.module("myApp")
	.service("MyApis", ['$timeout', function MyApis($timeout) {
		var data = {
			partners: [
				{
					name: 'partner 1',
					id: 1,
					address: '123 Partner 1 Street',
					products: [1,2,5]
				},
				{
					name: 'partner 2',
					id: 2,
					address: '456 Partner 2 Street',
					products: [3,4]
				},
				{
					name: 'partner 3',
					id: 3,
					address: '789 Partner 3 Street',
					products: [4,5]
				}
			],
			companies: [
				{
					name: 'company 1',
					id: 1,
					partnerId: 1,
					address: '123 company 1 Street'
				},
				{
					name: 'company 2',
					id: 2,
					partnerId: 1,
					address: '456 company 2 Street'
				},
				{
					name: 'company 3',
					id: 3,
					partnerId: 2,
					address: '789 company 3 Street'
				}
			],
			products: [
				{					
					id: 1,
					name: 'Product 1',
					price: 111.11,
					description: 'My cool product 1',
					imgPath: 'img-product-1.png',
					requiresProductId: 4
				},
				{					
					id: 2,
					name: 'Product 2',
					price: 222.22,
					description: 'My cool product 2',
					imgPath: 'img-product-2.png',
					requiresProductId: 5
				},
				{					
					id: 3,
					name: 'Product 3',
					price: 333.33,
					description: 'My cool product 3',
					imgPath: 'img-product-3.png',
					requiresProductId: null
				},
				{					
					id: 4,
					name: 'Product 4',
					price: 444.44,
					description: 'My cool product 4',
					imgPath: 'img-product-4.png',
					requiresProductId: null
				},
				{					
					id: 5,
					name: 'Product 5',
					price: 555.55,
					description: 'My cool product 5',
					imgPath: 'img-product-5.png',
					requiresProductId: 4
				}
			]
		};


	    var getPartners = function getPartners() {
			return $timeout(function() {
    			return {
                then: function (callback) {
                    callback(data.partners);
                }
            };
	    	}, 2000);
	    };

	    var getCompanies = function getCompanies() {
			return $timeout(function() {
    			return {
                then: function (callback) {
                    callback(data.companies);
                }
            };
	    	}, 2000);
	    };

	    var getProducts = function getProducts() {
	    	return $timeout(function() {
    			return {
                then: function (callback) {
                    callback(data.products);
                }
            };
	    	}, 2000);			
	    };
	    

	    return {
	    	getPartners: getPartners,
	    	getCompanies: getCompanies,
	    	getProducts: getProducts
	    }
}]);