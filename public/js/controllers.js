var instagramApp = angular.module('instagramApp', []);

instagramApp.controller('indexController', ['$scope', 
	function($scope){

	// var _name = '';
 //    $scope.user = {
	//       name: function(newName) {
	//         if (angular.isDefined(newName)) {
	//           _name = newName;
	//         }
	//         return _name;
	//       }
 //    };
	$scope.generate = function(){
  		alert("generating timeline");
  	};

}]);



instagramApp.controller('instagramController', ['$scope', 'Instagram',
	function($scope, Instagram){

		$scope.example1 = {
			hash: 'pinerowedding2015'
		};

		$scope.example2 = {
			hash: 'BrideToBe'
		};

		$scope.example3 = {
			hash: 'FlowerGirl'
		};

		var instagramSuccess = function(scope, res) {
			// if (res.meta.code !== 200) {
			// 	scope.error = res.meta.error_type + ' | ' + res.meta.error_message;
			// 	return;
			// }
			if (res.data.length > 0) {
				scope.items = res.data;
			} else {
				scope.error = "This hashtag has returned no results";
			}
		};

		Instagram.get(10, $scope.example1.hash).success(function(response) {
			instagramSuccess($scope.example1, response);
		});

		Instagram.get(10, $scope.example2.hash).success(function(response) {
			instagramSuccess($scope.example2, response);
		});

		Instagram.get(10, $scope.example3.hash).success(function(response) {
			instagramSuccess($scope.example3, response);
		});

	}


]);

