var instagramApp = angular.module('instagramApp', []);

instagramApp.controller('indexController', ['$scope', function($scope) {
	$scope.generate = function(){
  		alert("generating timeline");
  	};

}]);

instagramApp.controller('resultsController', ['$scope', function($scope) {
	$scope.results = "SHOW RESULTS";


}]);