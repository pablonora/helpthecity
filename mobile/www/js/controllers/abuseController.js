'use strict';

angular.module('htc.controllers')

.controller('abuseController', ['$scope', '$http', '$location', '$stateParams', 'abuseService', 'abuseCategoryService', 'connectionHandlerService', function ($scope, $http, $location, $stateParams, abuseService, abuseCategoryService, connectionHandlerService) {
	$scope.reportId = $stateParams.reportId;
	$scope.userId = $stateParams.userId;
	$scope.abuseCategoriesList = [];
	$scope.abuse = {};

	/*Get Abuse Category*/
	abuseCategoryService.readAbuseCategories(function (abuseCategoriesList) {
		$scope.abuseCategoriesList = abuseCategoriesList;
	}, function (err) {
		if (err === 'Access denied') {
			connectionHandlerService.disconnect();
		}
	});

	$scope.saveAbuse = function () {
		var data = {
			abuse: {
				description: $scope.abuse.description,
				date: Date.now() / 1000,
				userId: $scope.userId,
				abuseCategoryId: $scope.abuse.categoryId,
				reportId: $scope.reportId
			}
		};
		abuseService.createAbuse(data, function (response) {
			$location.path('/tab/listOfReports');
		}, function (err) {
			if (err === 'Access denied') {
				connectionHandlerService.disconnect();
			}
		});
	};
}]);