/* globals describe, it */
var englishDates = require('../');
var assert = require('assert');

describe('#day', function () {
	it('should export the days', function () {
		assert.equal(englishDates.days[0], 'Sunday');
	});
	it('should get the right day', function () {
		assert.equal(englishDates.day(new Date(1986, 9, 14)), 'Tuesday');
	});
});

describe('#month', function () {
	it('should export the months', function () {
		assert.equal(englishDates.months[0], 'January');
	});
	it('should get the right month', function () {
		assert.equal(englishDates.month(new Date(1986, 9, 14)), 'October');
	});
});
