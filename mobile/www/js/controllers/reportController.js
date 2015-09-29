angular.module('htc.controllers')

.controller('reportController', function($scope, reportService) {

	$scope.reports = reportService.getReports();

	$scope.getImage = function () {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(
          function(message) {
                    alert('get picture sucess');}, 
          function(message) {
                    alert('get picture failed');},
          {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            });
    };
	  
	$scope.saveAbuse = function(){
		alert('enviado!');
	
	};

});

