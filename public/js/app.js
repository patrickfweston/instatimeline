'use strict';

// Declare app level module which depends on views, and components
angular.module('instagramApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) 

{
  $routeProvider
  			.when('/index.html', {
  				templateUrl : 'index.html',
  				controller : 'indexController'
  			})

  // route for the results page
            .when('/results.html', {
                templateUrl : 'results.html',
                controller  : 'instagramController'
            })
}]);


