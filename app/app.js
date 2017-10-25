'use strict';

var dormApp angular.module('dormApp', ['ngRoute', 'mgcrea.ngStrap.navbar']);

dormApp.config(function($routeProvider) {
		.when('/blog', {
			templateUrl: 'views/register.html',
			controller: 'RegisterController'
		})
		.when('/blog', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		.when('/blog', {
			templateUrl: 'views/blog.html',
			controller: 'BlogController'
		})
		.when('/chat', {
			templateUrl: 'views/chat.html',
			controller: 'ChatController'
		})
		.otherwise({
			redirectTo: '/'
		});
});