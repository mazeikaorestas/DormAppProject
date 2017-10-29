// create the module and name it scotchApp    
var dorm = angular.module('dormApp', ['ngRoute']);

dorm.controller('loginCtrl', function ($scope) {
    $scope.submit = function () {
        var uname = $scope.username;
        var password = $scope.password;
        if($scope.username == 'admin' && $scope.password == 'admin'){
            window.location.href = "#/dashboard"
            //$location.path('../views/dashboard.html');
        }

        else {
            alert("Login information is incorrect!!!");
        }
    }

})

dorm.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);  

// configure our routes    
dorm.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/login', {
		templateUrl: 'views/login.html'
	})

        .when('/dashboard', {
            templateUrl: 'views/dashboard.html'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html'
        })
}]);



