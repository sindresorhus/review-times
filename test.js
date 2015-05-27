'use strict';
var test = require('ava');
var reviewTimes = require('./');

test(function (t) {
	t.plan(5);

	reviewTimes(function (err, times) {
		t.assert(!err, err);
		t.assert(typeof times.ios === 'number');
		t.assert(typeof times.mac === 'number');
		t.assert(times.ios > 0);
		t.assert(times.mac > 0);
	});
});
