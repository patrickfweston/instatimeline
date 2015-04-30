var instagramApp = angular.module('instagramApp', []);

instagramApp.controller('indexController', ['$scope', 
	function($scope){

	$scope.generate = function(){
  		alert("generating timeline");
  	};

}]);



instagramApp.controller('instagramController', ['$scope', 'Instagram', '$http',
	function($scope, Instagram, $http){

		$scope.example1 = {
			hash: 'marcheet'
		};

		// $scope.example2 = {
		// 	hash: 'hanksparty'
		// };

		// $scope.example3 = {
		// 	hash: 'pagingthemarcels'
		// };

		var instagramSuccess = function(scope, res) {
			if (res.data.length > 0) {
				scope.items = res.data;
				console.log(res.data[0])

				instaItem = res.data[0];
				var testObject = {
					    "timeline":
					    {
					        "headline":"WEDDING PHOTO",
					        "type":"default",
					        "text": instaItem.caption.text,
					        "asset": {
					            "media": instaItem.images.standard_resolution.url,
					            "credit": "@" + instaItem.user.username
					        },
					        "date": [
					            {
					                "startDate": Date(instaItem.created_time * 1000),
					                "headline":"Headline Goes Here",
					                "text":"<p>Body text goes here, some HTML is OK</p>",
					                "tag":"This is Optional",
					                "classname":"optionaluniqueclassnamecanbeaddedhere",
					                "asset": {
					                    "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
					                    "thumbnail":"optional-32x32px.jpg",
					                    "credit":"Credit Name Goes Here",
					                    "caption":"Caption text goes here"
					                }
					            }
					        ],
					        

					    }
					}
				createStoryJS({
                    type:       'timeline',
                    width:      '800',
                    height:     '600',
                    source:     testObject,
                    embed_id:   'my-timeline'
                });

			} else {
				scope.error = "This hashtag has returned no results";
			}
		};

		Instagram.get(20, $scope.example1.hash).success(function(response) {
			instagramSuccess($scope.example1, response);
		});

		// Instagram.get(20, $scope.example2.hash).success(function(response) {
		// 	instagramSuccess($scope.example2, response);
		// });

		// Instagram.get(20, $scope.example3.hash).success(function(response) {
		// 	instagramSuccess($scope.example3, response);
		// });

		$http.get('tests.json').
		    success(function(data, status, headers, config) {
		      $scope.tests = data;
		      
		    }).
		    error(function(data, status, headers, config) {
		      console.log("error");
		    });

	}


]);

