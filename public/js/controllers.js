var instagramApp = angular.module('instagramApp')
	.factory('feedData', function($rootScope) {
		
		var config = {};

		return {
			setHashtag: function (x) {
					config.hashtag = x;
			},
			getHashtag: function () {
				return config.hashtag;
			}
		}
	});

instagramApp.controller('indexController', ['$scope', 'feedData', '$location',
	function($scope, feedData, $location){

	$scope.generate = function(){
		feedData.setHashtag($scope.hashtag);
		$location.path('/results');
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
]);

