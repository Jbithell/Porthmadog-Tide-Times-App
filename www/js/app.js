(function(){
	'use strict';
	var module = angular.module('app', ['onsen']);

	module.controller('AppController', function($scope, $http) {
		//Module App Controller
		
	});

	/*module.controller('DetailController', function($scope) {
		
	}*/
	module.controller('MasterController', function($scope, $http, $timeout) {
		$scope.load = function($done) {
			$http.get("https://" + "port-tides.com/api/apps/phonegap/htmllist.php")
					.success(function(data, status, headers, config) {
						document.getElementById("tidaldata").innerHTML = data;
						$done();
					}).error(function(data, status, headers, config) {
						ons.notification.alert({message: 'Sorry, we couldn\'t download Tidal Data from the server - Please check your internet connection and try again', title: 'Error',buttonLabel: 'Dismiss'});
						$done();
					});
		};
	});
})();

