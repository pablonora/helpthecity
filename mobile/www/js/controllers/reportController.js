angular.module('htc.controllers')
  .controller('reportController', ['$scope', '$http', '$location', '$log', '$timeout', 'reportService', 'popupService', 'connectionHandlerService', 'localStorageService', function ($scope, $http, $location, $log, $timeout, reportService, popupService, connectionHandlerService, localStorageService) {
    $scope.listOfReports = [];
    $scope.report = {};

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
          $scope.$apply();
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
}]);