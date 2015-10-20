angular.module('htc.controllers')

.controller('reportController', ['$location', '$scope', '$http', 'reportService', 'popupService', 'connectionHandlerService', function ($location, $scope, $http, reportService, popupService, connectionHandlerService) {
	$scope.listOfReports = [];

	/* Register report */
	$scope.createReport = function () {
		var data = {
			report: {
				date: '2015-10-03 18:08:25.715-03',
				description: 'teste',
				image: 'teste',
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

	/*Up*/
	$scope.likeReport = function () {
		$scope.like = "like";
	};
}]);