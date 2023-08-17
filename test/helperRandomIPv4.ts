import tap from 'tap';
import config from './lib/config.js';

const max = 2;

tap.test(
    'Random Bad IP Addresses ('+max+')',
    (t) => {
        config.udgerParser.randomIPv4(max, (err, results) => {
            t.equal(err, null, 'should NOT return an error');
            t.equal(results.length, max, 'should return '+max+' results');
            t.end();
        });
    }
);
