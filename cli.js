#!/usr/bin/env node
'use strict';
var meow = require('meow');
var reviewTimes = require('./');

meow([
	'Example',
	'  $ review-times',
	'  iOS    8 days',
	'  macOS  6 days'
]);

reviewTimes().then(function (times) {
	console.log('iOS    ' + times.ios + ' days');
	console.log('macOS  ' + times.macos + ' days');
});
