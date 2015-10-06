'use strict';

angular.module('htc.controllers')

.controller('userController', ['$scope', 'userService', function ($scope, userService) {
  $scope.user = {
    active: 'Y',
    coverageRadius: 1,
    image: 'img/user-icon.png',
    type: 'U'
  };

  $scope.createUser = function () {
    alert($scope.user.cpf);
    var data = {
      user: {
        image: $scope.user.image,
        email: $scope.user.email,
        name: $scope.user.name,
        gender: $scope.user.gender,
        type: $scope.user.type,
        cpf: $scope.user.cpf,
        coverageRadius: $scope.user.coverageRadius,
        active: $scope.user.active,
        password: $scope.user.password
      }
    };
    userService.createUser(data, function (response) {
      console.log(response);
    });
  };

  $scope.getImage = function () {
    navigator.camera.getPicture(
      function onSuccess(imageData) {
        $scope.user.image = "data:image/jpeg;base64," + imageData;
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
}]);