'use strict';

angular.module('htc.services')

.factory('reportService', function () {

	// Some fake testing data
	var reports = [{
    id: 0,
    userId:{
    		id: 0,
    		name: 'Ben Sparrow',
    		image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    },
    reportCategoryId: {
    		id:0,
    		name: 'Saneamento'
    },
    date: new Date('2015-06-06T16:52:54.086Z'),
    description: 'Veja o esgoto próximo a casa Joana.',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    userId:{
    		id: 1,
    		name: 'Max Lynx',
    		image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    },
    reportCategoryId: {
    		id:0,
    		name: 'Saneamento'
    },
    date: new Date('2015-06-06T16:52:54.086Z'),
    description: 'Problema!',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 2,
    userId:{
    		id: 2,
    		name: 'Adam Bradleyson',
    		image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    },
    reportCategoryId: {
    		id:0,
    		name: 'Saneamento'
    },
    date: new Date('2015-06-06T16:52:54.086Z'),
    description: 'Problema0',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 3,
    userId:{
    		id: 2,
    		name: 'Adam Bradleyson',
    		image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    },
    reportCategoryId: {
    		id:0,
    		name: 'Saneamento'
    },
    date: new Date('2015-06-06T16:52:54.086Z'),
    description: 'Problema1',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
  	id: 4,
    userId:{
    		id: 1,
    		name: 'Max Lynx',
    		image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    },
    reportCategoryId: {
    		id:0,
    		name: 'Saneamento'
    },
    date: new Date('2015-06-06T16:52:54.086Z'),
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    description: 'Problema2'    
  }];

	return {
		getReports: function () {
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
});