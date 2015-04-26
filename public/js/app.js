'use strict';

// Declare app level module which depends on views, and components
angular.module('instagramApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index.html'});
}]);


