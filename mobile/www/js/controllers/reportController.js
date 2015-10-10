angular.module('htc.controllers')

.controller('reportController', ['$scope', '$http', '$location', 'reportService', 'routerService', 'localStorageService', function ($scope, $http, $location, reportService, routerService, localStorageService) {

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
      console.log(response);
    });
    $location.path('/tab/listOfReports');
  };

  /* Get Reports*/
  $scope.listOfReports = [];

  $scope.getListOfReports = function () {
    $http.get(routerService.getListOfReports + '?criteria=null').then(function (reports) {
      reports.data.forEach(function (report) {
        $http.get(routerService.getUserUrl + report.userId).then(function (user) {
          $scope.listOfReports.push({
            reportId: report.id,
            reportDescription: report.description,
            reportImage: report.image,
            userName: user.data.name,
            userId: user.data.id,
            userImage: user.data.image

          });
        });
      });
    });
  };

  /* Capturated a image*/
  $scope.getImage = function () {
    navigator.camera.getPicture(
      function onSuccess(imageData) {
        $scope.report.image = "data:image/jpeg;base64," + imageData;
      },
      function (message) {
        alert('teste');
      }, {
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
    console.log("entrou");
    $scope.like = "like";
  }

  }]);