angular.module("myApp")
	.service("Helper", [function Helper() {
		var getObjectLength = function getObjectLength(obj) {
            var count = 0;
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    count++;
                }
            }
            return count;
        };

        var convertMapToArray = function convertMapToArray(map) {
            var myArray = [];
            angular.forEach(map, function(mapItem) {
                myArray.push(mapItem);
            });
            return myArray;
        };

        var convertArrayToMap = function convertArrayToMap(theArray, key) {
            var map = {};
            key = key || 'id';
            angular.forEach(theArray, function(arrayItem) {
                map[arrayItem[key]] = arrayItem;
            });
            return map;
        };
	    

	    return {
	    	getObjectLength: getObjectLength,
	    	convertMapToArray: convertMapToArray,
	    	convertArrayToMap: convertArrayToMap
	    }
}]);

