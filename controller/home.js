myApp.controller('homeController', ['$scope', '$http', '$location', function($scope, $http, $location){
	console.log(' Main Controller Loaded...')
	$scope.title = 'Books and Characters.'

	$scope.$on('$routeChangeStart', function(){
		$scope.page = $location.path();
		//console.log($scope.page)
	})
}])