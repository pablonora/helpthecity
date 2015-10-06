angular.module('htc.controllers')

.controller('reportController', ['$scope', '$http', 'routerService', 'localStorageService', function ($scope, $http, routerService, localStorageService) {

  /* This method is responsable for get Reports*/
  $scope.listOfReports = [];

  $scope.getListOfReports = function () {

    //Pegar a lista de reports
    console.log(localStorageService.get('user'));
    $http.get(routerService.getListOfReports + '?criteria=null').then(function (reports) {
      reports.data.forEach(function (report) {
        //Pegar o usuário daquele report
        console.log(localStorageService.get('user'));
        $http.get(routerService.getUserUrl + report.userId).then(function (user) {
          //console.log(user.data);
          $scope.listOfReports.push({
            reportDescription: report.description,
            reportImage: report.image,
            userName: user.data.name,
            userImage: user.data.image

          });
        });
      });
    });
  };


  /* This method is responsable for capturated a image*/
  $scope.getImage = function () {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(
      function (message) {
        alert('get picture sucess');
      },
      function (message) {
        alert('get picture failed');
      }, {
        quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
      });
  };

  $scope.saveAbuse = function () {
    navigator.notification.alert(
      'You are the winner!', // message
      alertDismissed, // callback
      'Game Over', // title
      'Done' // buttonName
    );

  };
  //google map
  $scope.showGoogleMap = function GoogleMap() {

    this.initialize = function () {
      var map = showMap();
    }

    var showMap = function () {
      var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(-33, 151),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

      return map;
    }
  };
  //google maps

      }]);