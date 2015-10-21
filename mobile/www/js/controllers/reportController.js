angular.module('htc.controllers')

.controller('reportController', ['$location', '$scope', '$http', 'reportService', 'popupService', 'connectionHandlerService', function ($location, $scope, $http, reportService, popupService, connectionHandlerService) {
	$scope.listOfReports = [];
	$scope.report = {};
	$scope.class = {};

	$scope.map = {
		center: {
			latitude: -15.7918215,
			longitude: -47.8795161
		},
		zoom: 4
	};

	/* Register report */
	$scope.createReport = function () {
		var data = {
			report: {
				date: Date.now() / 1000,
				description: $scope.report.description,
				image: $scope.report.image,
				latitude: -22.206368,
				longitude: -45.909593,
				precision: 200,
				reportCategory: 1,
				userId: 1
			}
		};
		reportService.createReport(data, function (response) {
			$location.path('/tab/listOfReports');
		}, function (err) {
			if (err === 'Access denied') {
				connectionHandlerService.disconnect();
			}
		});
	};

	$scope.getListOfReports = function () {
		reportService.getListOfReportsWithUser(function (reports) {
			$scope.listOfReports = reports;
			reports.forEach(function (report) {
				reportService.getRelevance(report.User.id, report.id, function (up) {
					$scope.class['report' + up.reportId] = 'red';
				}, function (err) {
					if (err === 'Access denied') {
						connectionHandlerService.disconnect();
					}
				});
			});
		}, function (err) {
			if (err === 'Access denied') {
				connectionHandlerService.disconnect();
			}
		});
	};

	/* Capturated a image*/
	$scope.getImage = function () {
		navigator.camera.getPicture(
			function onSuccess(imageData) {
				$scope.report.image = "data:image/jpeg;base64," + imageData;
			},
			function (message) {}, {
				quality: 50,
				destinationType: navigator.camera.DestinationType.DATA_URL,
				sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
				allowEdit: false,
				targetWidth: 100,
				targetHeight: 100,
				popoverOptions: CameraPopoverOptions,
				saveToPhotoAlbum: false
			}
		);
	};

	$scope.changeRelevance = function (userId, reportId) {
		var data = {
			up: {
				date: Date.now() / 1000,
				userId: userId,
				reportId: reportId
			}
		};

		if ($scope.class['report' + reportId] !== 'red') {
			$scope.class['report' + reportId] = 'red';
			reportService.increaseRelevance(data, function (response) {}, function (err) {
				if (err === 'Access denied') {
					connectionHandlerService.disconnect();
				}
			});
		} else {
			$scope.class['report' + reportId] = null;
			reportService.decreaseRelevance(userId, reportId, function (response) {}, function (err) {
				if (err === 'Access denied') {
					connectionHandlerService.disconnect();
				}
			});
		}
	};
}]);