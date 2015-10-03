angular.module('htc.controllers')

.controller('reportController', ['$scope', '$http', 'routerService', function ($scope, $http, routerService) {


  $scope.reports = [];
  $http.get(routerService.getListOfReports + '?criteria=null').then(function (reports) {
    $scope.reports = reports.data;
    console.log(reports.data);
  });



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
    alert('enviado!');

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