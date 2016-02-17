module.exports.months = require('english-months');

// Uppercased days because that is what the Intl api does
module.exports.days = require('english-days').map(function (d) {
	return d.charAt(0).toUpperCase() + d.slice(1);
});

var _global = typeof window !== 'undefined' ? window : global;

// Gets the day of the week from a given date
module.exports.day = typeof _global.Intl !== 'undefined' ? _global.Intl.DateTimeFormat('en-US', {weekday: 'long'}).format : function (d) {
	return module.exports.days[d.getDay()];
};

// Gets the month of the year from a given date
module.exports.month = typeof _global.Intl !== 'undefined' ? _global.Intl.DateTimeFormat('en-US', {month: 'long'}).format : function (d) {
	return module.exports.months[d.getMonth()];
};
