'use strict';
const got = require('got');
const cheerio = require('cheerio');

module.exports = () => got('appreviewtimes.com').then(data => {
	const $ = cheerio.load(data.body);
	const get = sel => parseInt($(sel).text(), 10);

	return {
		iOS: get('.ios .average'),
		macOS: get('.mac .average')
	};
});
