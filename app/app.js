// create the module and name it scotchApp    
var dorm = angular.module('dormApp', ['ngRoute']);  

dorm.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);  

// configure our routes    
dorm.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/login', {
		templateUrl: 'views/login.html'
	})
}]);

