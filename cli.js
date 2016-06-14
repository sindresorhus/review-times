#!/usr/bin/env node
'use strict';
const meow = require('meow');
const reviewTimes = require('./');

meow(`
	Example
	  $ review-times
	  iOS    8 days
	  macOS  6 days
`);

reviewTimes().then(times => {
	console.log(`
iOS    ${times.iOS} days
macOS  ${times.macOS} days
	`.trim());
});
