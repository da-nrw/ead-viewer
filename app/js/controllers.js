'use strict';

/* Controllers */

function BrowseCtrl($scope, $rootScope, $location, $routeParams, $http) {

	$scope.loading = false;
	
	if ($routeParams.src) {
		$scope.loading = true;
		$http.get($routeParams.src, 
			{ 
				transformResponse: function(data) {
					var x2js = new X2JS({arrayAccessForm:"property"});
					var json = x2js.xml_str2json( data );
					return json;
				}
        	}
        ).
		success(function(data, status, headers, config) {
			console.log(data);
			$scope.ead = angular.fromJson(data).ead;
			$scope.c = $scope.ead.archdesc;
			$rootScope.pageTitle = $scope.c.did.unittitle;
			$scope.loading = false;
		}).
		error(function(data, status, headers, config) {
			$scope.error = true;
			$scope.loading = false;
		});
	} else {
		$scope.error = true;
	}

	$scope.show = function(c) {
		$scope.c = c;
	}

	$scope.open = function(c) {
		c._open = true;
	}

	$scope.close = function(c) {
		c._open = false;
	}

	$scope.hasChildren = function(c) {
		if (typeof c._children === "undefined") {
			if (typeof c.c !== "undefined"
				|| typeof c.c01 !== "undefined"
				|| typeof c.c02 !== "undefined"
				|| typeof c.c03 !== "undefined"
				|| typeof c.c04 !== "undefined"
				|| typeof c.c05 !== "undefined"
				|| typeof c.c06 !== "undefined"
				|| typeof c.c07 !== "undefined"
				|| typeof c.c08 !== "undefined"
				|| typeof c.c09 !== "undefined"
				|| typeof c.c10 !== "undefined"
				|| typeof c.c11 !== "undefined"
				|| typeof c.c12 !== "undefined"
			) {
				c._children = true;
			} else {
				c._children = false;
			}
		}
		return c._children;
	}

}
