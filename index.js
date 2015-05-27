'use strict';
var got = require('got');
var cheerio = require('cheerio');

module.exports = function (cb) {
	got('appreviewtimes.com', function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		var $ = cheerio.load(data);

		var get = function (sel) {
			return parseInt($(sel).text(), 10);
		}

		cb(null, {
			ios: get('.ios .average'),
			mac: get('.mac .average')
		});
	});
};
