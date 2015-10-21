'use strict';

angular.module('htc.controllers')

.controller('userController', ['$ionicHistory', '$scope', '$location', 'userService', 'localStorageService', function ($ionicHistory, $scope, $location, userService, localStorageService) {
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
      $ionicHistory.goBack();
      $location.path('/login');
    }, function (err) {
      if (err === '') {
        popupService.showAlert('O servidor está indisponível, tente novamente mais tarde');
      }
    });
  };

  //Get Image of Profile
  $scope.getImage = function () {
    navigator.camera.getPicture(
      function onSuccess(imageData) {
        $scope.user.image = "data:image/jpeg;base64," + imageData;
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

  $scope.validate = function (form) {
    var result = true;
    form.submitted = true;
    if (!form.$valid) {
      if ($scope.user.name == null || $scope.user.name == '') {
        form.name.$setValidity('required', false);
        result = false;
      }
      if ($scope.user.email == null || $scope.user.email == '') {
        form.email.$setValidity('required', false);
        result = false;
      }
      if ($scope.user.password == null || $scope.user.password == '') {
        form.password.$setValidity('required', false);
        result = false;
      }
      if ($scope.user.cpf == null || $scope.user.cpf == '' || $scope.user.cpf.length != 11) {
        form.cpf.$setValidity('required', false);
        result = false;
      }
      if ($scope.user.gender == null || $scope.user.gender == '') {
        form.gender.$setValidity('required', false);
        result = false;
      }
    }
    if (!result) {
      popupService.showAlert('Preencha os dados solicitados');
    }
    return result;
  };

  /*Update User*/
  $scope.updateUser = function () {
    var data = {
      user: {
        id: $scope.user.id,
        image: $scope.user.image,
        email: $scope.user.email,
        name: $scope.user.name,
        gender: $scope.user.gender,
        password: $scope.user.password,
        type: $scope.user.type,
        cpf: $scope.user.cpf,
        coverageRadius: $scope.user.coverageRadius,
        active: $scope.user.active
      }
    };
    userService.updateUser(data, function (user) {
      localStorageService.set('user', user);
      $location.path('/tab-editProfile');
    }, function (err) {
      if (err === '') {
        popupService.showAlert('O servidor está indisponível, tente novamente mais tarde');
      }
    });
  };
  $scope.validateUpdate = function (form) {
    var result = true;
    form.submitted = true;
    if (!form.$valid) {
      if ($scope.user.name == null || $scope.user.name == '') {
        form.name.$setValidity('required', false);
        result = false;
      }
      if ($scope.user.email == null || $scope.user.email == '') {
        form.email.$setValidity('required', false);
        result = false;
      }
      //      if ($scope.user.password == null || $scope.user.password == '') {
      //        form.password.$setValidity('required', false);
      //        result = false;
      //      }
      if ($scope.user.gender == null || $scope.user.gender == '') {
        form.gender.$setValidity('required', false);
        result = false;
      }
    }
    if (!result) {
      popupService.showAlert('Preencha os dados solicitados');
    }
    return result;
  };
}]);