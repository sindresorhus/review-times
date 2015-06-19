#!/usr/bin/env node
'use strict';
var meow = require('meow');
var reviewTimes = require('./');

meow({
	help: [
		'Example',
		'  $ review-times',
		'  iOS  8 days',
		'  Mac  6 days'
	]
});

reviewTimes(function (err, times) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log('iOS  ' + times.ios + ' days');
	console.log('Mac  ' + times.mac + ' days');
});
