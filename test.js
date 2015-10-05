import test from 'ava';
import reviewTimes from './';

test(t => {
	t.plan(5);

	reviewTimes((err, times) => {
		t.ifError(err);
		t.is(typeof times.ios, 'number');
		t.is(typeof times.mac, 'number');
		t.true(times.ios > 0);
		t.true(times.mac > 0);
	});
});
