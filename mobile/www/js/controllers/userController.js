'use strict';

angular.module('htc.controllers')

.controller('userController', ['$scope', '$location', 'userService', 'localStorageService', function ($scope, $location, userService, localStorageService) {
  $scope.user = localStorageService.getObject('user', null) || {
    active: 'Y',
    coverageRadius: 1,
    image: 'img/user-icon.png',
    type: 'U'
  };
  
  /*Create User*/
  $scope.createUser = function () {
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
    userService.createUser(data, function (user) {
      console.log(response);
    });
    $location.path('/login');
  };

  //Get Image of Profile
  $scope.getImage = function () {
    navigator.camera.getPicture(
      function onSuccess(imageData) {
        $scope.user.image = "data:image/jpeg;base64," + imageData;
        $scope.$apply();
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