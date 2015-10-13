angular.module('htc.services')

.factory('popupService', ['$ionicPopup', function ($ionicPopup) {
	return {
		showConfirm: function (title, template, cb) {
			if (title == null) title = '';
			if (template == null) template = '';

			var confirmPopup = $ionicPopup.confirm({
				title: title,
				template: template
			});

			confirmPopup.then(function (res) {
				if (cb) cb(res);
			});
		},
		showAlert: function (title, template, cb) {
			if (title == null) title = '';
			if (template == null) template = '';

			var alertPopup = $ionicPopup.alert({
				title: title,
				template: template
			});

			alertPopup.then(function (res) {
				if (cb) cb(res);
			});
		}
	};
}]);