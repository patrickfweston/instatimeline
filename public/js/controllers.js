var instagramApp = angular.module('instagramApp', [])
	.factory('feedData', function() {
		var hashtag = 'default';

		return {
			setHashtag: function (x) {
				console.log(x);
				hashtag = x;
			},
			getHashtag: function () {
				return hashtag;
			}
		};
	});

instagramApp.controller('indexController', ['$scope', 'feedData', '$window',
	function($scope, feedData, $window){

	$scope.generate = function(){
		feedData.setHashtag('marcheet');
		console.log(feedData.getHashtag());
		$window.location.href = '/results.html';
	};

}]);


instagramApp.controller('instagramController', ['$scope', 'Instagram', '$http', 'feedData',
	function($scope, Instagram, $http, feedData){
		feedUrl = '/feed/?hashtag=' + feedData.getHashtag() +'&count=20';
		console.log(feedUrl);
		createStoryJS({
		  type:       'timeline',
		  width:      '800',
		  height:     '600',
		  source:     feedUrl,
		  embed_id:   'my-timeline'
		});
	}

		// $scope.example1 = {
		// 	hash: 'marcheet'
		// };

		// $scope.example2 = {
		// 	hash: 'hanksparty'
		// };

		// $scope.example3 = {
		// 	hash: 'pagingthemarcels'
		// };

		// var instagramSuccess = function(scope, res) {
		// 	if (res.data.length > 0) {
		// 		scope.items = res.data;
		// 		console.log(res.data[0])

		// 		instaItem = res.data[0];
		// 	} else {
		// 		scope.error = "This hashtag has returned no results";
		// 	}
		// };

		// Instagram.get(20, $scope.example1.hash).success(function(response) {
		// 	instagramSuccess($scope.example1, response);
		// });
]);

