'use strict';

angular.module('htc.services')

.factory('reportService', ['$http', 'routerService', function ($http, routerService) {
  var reports = [];
  return {
    
    //Create report
    createReport: function (report, cb) {
      $http.post(routerService.createReportUrl, JSON.stringify(report)).then(function (response) {
        cb(response);
      });
    },
    
    //Get list of reports
    getReports: function (reports) {
      $http.get(routerService.getListOfReports + '?criteria=null').then(function (reports) {
        reports.reports = reports.data;
      });
      return reports;
    },
    
    get: function (reportId) {
      for (var i = 0; i < reports.length; i++) {
        if (reports[i].id === parseInt(reportId)) {
          return reports[i];
        }
      }
      return null;
    },
    relevance: function (report) {
      report.relevance++;
    },
    getPostDate: function (report) {
      var diff = new Date() - report.date;
      var milliseconds, seconds, minutes, hours, days, months, years;
      var result;

      diff = (diff - (milliseconds = diff % 1000)) / 1000;
      diff = (diff - (seconds = diff % 60)) / 60;
      diff = (diff - (minutes = diff % 60)) / 60;
      diff = (diff - (hours = diff % 24)) / 24;
      diff = (diff - (days = diff % 30)) / 30;
      years = (diff - (months = diff % 12)) / 12;

      if (years > 0) {
        result = years === 1 ? '1 ano' : years + ' anos';
      } else if (months > 0) {
        result = months === 1 ? '1 mes' : months + ' meses';
      } else if (days > 0) {
        result = days === 1 ? '1 dia' : days + ' dias';
      } else if (hours > 0) {
        result = hours === 1 ? '1 hora' : hours + ' horas';
      } else if (minutes > 0) {
        result = minutes === 1 ? '1 minuto' : minutes + ' minutos';
      } else if (seconds > 0) {
        result = seconds === 1 ? '1 segundo' : seconds + ' segundos';
      }

      return result;
    }
  };
}]);