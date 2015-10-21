'use strict';

angular.module('htc.directives')

.directive('maxLength', ['$parse', function ($parse) {
	return {
		restrict: 'A',
		scope: {
			maxLength: '='
		},
		link: function (scope, element, attrs) {
			element.bind('keypress', function (e) {
				if (element[0].value.length >= scope.maxLength) {
					e.preventDefault();
					return false;
				}
			});
		}
	}
}]);