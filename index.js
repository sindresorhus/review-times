'use strict';
var got = require('got');
var cheerio = require('cheerio');

module.exports = function () {
	return got('appreviewtimes.com').then(function (data) {
		var $ = cheerio.load(data.body);

		var get = function (sel) {
			return parseInt($(sel).text(), 10);
		};

		return {
			ios: get('.ios .average'),
			mac: get('.mac .average')
		};
	});
};
