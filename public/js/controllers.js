var instagramApp = angular.module('instagramApp', []);

instagramApp.controller('myController', ['$scope', function($scope) {
  $scope.generate = function(){
  		alert("generating timeline");
  };
}]);
