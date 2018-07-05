var myApp = angular.module('myApp');

myApp.controller('HouseController', ['$scope', '$http', 'FetchingDataThroughAPI', function($scope, $http, FetchingDataThroughAPI){
	console.log(' House Controller Loaded...')
	FetchingDataThroughAPI.ajaxCall('houses')
	.then(function(houseResult){
		console.log(houseResult)
		$scope.houses = houseResult.data
	})
}])


