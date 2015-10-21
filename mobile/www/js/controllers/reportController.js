angular.module('htc.controllers')

.controller('reportController', ['$scope', '$http', '$location', '$log', '$timeout', 'reportService', 'popupService', 'connectionHandlerService', 'localStorageService', function ($scope, $http, $location, $log, $timeout, reportService, popupService, connectionHandlerService, localStorageService) {
	$scope.listOfReports = [];
	$scope.report = {};
	$scope.up = {};

	/* Inicio do mapa */
	$scope.options = {
		scrollwheel: false
	};
	$scope.coordsUpdates = 0;
	$scope.dynamicMoveCtr = 0;
	$scope.marker = {
		id: 0,
		coords: {
			latitude: -15.7918215,
			longitude: -47.8795161
		},
		options: {
			draggable: true
		},
		events: {
			dragend: function (marker, eventName, args) {
				$log.log('marker dragend');
				var lat = marker.getPosition().lat();
				var lon = marker.getPosition().lng();
				$log.log(lat);
				$log.log(lon);

				$scope.marker.options = {
					draggable: true,
					labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
					labelAnchor: "100 0",
					labelClass: "marker-labels"
				};
			}
		}
	};
	$scope.$watchCollection("marker.coords", function (newVal, oldVal) {
		if (_.isEqual(newVal, oldVal))
			return;
		$scope.coordsUpdates++;
	});

	/* Localização */
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			$scope.map = {
				center: {
					latitude: pos.lat,
					longitude: pos.lng
				},
				zoom: 15
			};

			$timeout(function () {
				$scope.marker.coords = {
					latitude: pos.lat,
					longitude: pos.lng
				};
				$scope.dynamicMoveCtr++;
				$timeout(function () {
					$scope.marker.coords = {
						latitude: pos.lat,
						longitude: pos.lng
					};
					$scope.dynamicMoveCtr++;
				}, 2000);
			}, 1000);

			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			map.setCenter(pos);
		}, function () {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
	/* Fim do mapa */

	$scope.getListOfReports = function () {
		reportService.getListOfReportsWithUser(function (reports) {
			$scope.listOfReports = reports;
			reports.forEach(function (report) {
				reportService.getRelevance(report.User.id, report.id, function (up) {
					$scope.up['report' + up.reportId] = 'red';
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

	/* Capturate an image*/
	$scope.getImage = function () {
		navigator.camera.getPicture(
			function onSuccess(imageData) {
				$scope.report.image = "data:image/jpeg;base64," + imageData;
				$scope.$apply();
			},
			function (message) {}, {
				quality: 50,
				destinationType: navigator.camera.DestinationType.DATA_URL,
				sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM,
				allowEdit: false,
				targetWidth: 400,
				targetHeight: 400,
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

		if ($scope.up['report' + reportId] !== 'red') {
			$scope.up['report' + reportId] = 'red';
			reportService.increaseRelevance(data, function (response) {}, function (err) {
				if (err === 'Access denied') {
					connectionHandlerService.disconnect();
				}
			});
		} else {
			$scope.up['report' + reportId] = null;
			reportService.decreaseRelevance(userId, reportId, function (response) {}, function (err) {
				if (err === 'Access denied') {
					connectionHandlerService.disconnect();
				}
			});
		}
	};

	/* Register report */
	$scope.createReport = function () {
		var data = {
			report: {
				date: Date.now() / 1000,
				description: $scope.report.description,
				image: $scope.report.image,
				latitude: $scope.marker.coords.latitude,
				longitude: $scope.marker.coords.longitude,
				precision: 200,
				reportCategoryId: 1,
				userId: parseInt(localStorageService.getObject('user').id)
			}
		};
		reportService.createReport(data, function (response) {
			popupService.showAlert(null, 'Ocorrência cadastrada com sucesso', function () {
				$location.path('/');
			});
			$scope.report = {};
		}, function (err) {
			if (err === 'Access denied') {
				connectionHandlerService.disconnect();
			}
		});
	};
}]);