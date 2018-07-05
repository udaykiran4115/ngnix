var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	console.log("App.js is called...")
	$routeProvider.when('/', {
    	controller: 'homeController',
		templateUrl: 'views/home.html'
	})
	$routeProvider.when('/books', {
    	controller: 'BookController',
		templateUrl: 'views/books.html'
	})
	$routeProvider.when('/characters', {
    	controller: 'CharacterController',
		templateUrl: 'views/characters.html'
	})
	$routeProvider.when('/houses', {
    	controller: 'HouseController',
		templateUrl: 'views/house.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});