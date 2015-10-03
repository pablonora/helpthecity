'use strict';

angular.module('htc.controllers')

.controller('userController', ['$scope', 'userService', function ($scope, userService) {
  $scope.user = {
    image: "img/user-icon.png"
  };

  $scope.createUser = function () {
    userService.createUser($scope.user, function (response) {
      console.log(response);
    });
  };

  $scope.getImage = function () {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(
      function onSuccess(userData) {
        var image = document.getElementById('user.image');
        image.src = "data:image/jpeg;base64," + userData;
      },
      function (message) {
        alert('get picture failed');
      }, {
        quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
      });
  };
}]);