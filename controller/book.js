var myApp = angular.module('myApp');

myApp.controller('BookController', ['$scope', '$http', 'FetchingDataThroughAPI', function($scope, $http, FetchingDataThroughAPI){
	console.log('Book Controller Loaded...')
	FetchingDataThroughAPI.ajaxCall('books')
	.then(function(resultedBooks){
		console.log(resultedBooks)
		$scope.books = resultedBooks.data
	})
}])


