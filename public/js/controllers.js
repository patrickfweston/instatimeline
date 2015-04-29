var instagramApp = angular.module('instagramApp', []);

instagramApp.controller('indexController', ['$scope', 
	function($scope){

	$scope.generate = function(){
  		alert("generating timeline");
  	};

}]);



instagramApp.controller('instagramController', ['$scope', 'Instagram',
	function($scope, Instagram){

		$scope.example1 = {
			hash: 'marcheet'
		};

		$scope.example2 = {
			hash: 'hanksparty'
		};

		$scope.example3 = {
			hash: 'pagingthemarcels'
		};

		var instagramSuccess = function(scope, res) {
			if (res.data.length > 0) {
				scope.items = res.data;
			} else {
				scope.error = "This hashtag has returned no results";
			}
		};

		Instagram.get(20, $scope.example1.hash).success(function(response) {
			instagramSuccess($scope.example1, response);
		});

		Instagram.get(20, $scope.example2.hash).success(function(response) {
			instagramSuccess($scope.example2, response);
		});

		Instagram.get(20, $scope.example3.hash).success(function(response) {
			instagramSuccess($scope.example3, response);
		});

	}


]);

