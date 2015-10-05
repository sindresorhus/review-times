import test from 'ava';
import fn from './';

test(async t => {
	const times = await fn();

	t.is(typeof times.ios, 'number');
	t.is(typeof times.mac, 'number');
	t.true(times.ios > 0);
	t.true(times.mac > 0);
});
