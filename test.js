import test from 'ava';
import m from './';

test(async t => {
	const times = await m();
	t.is(typeof times.iOS, 'number');
	t.is(typeof times.macOS, 'number');
	t.true(times.iOS > 0);
	t.true(times.macOS > 0);
});
