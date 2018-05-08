const tap = require('tap');
const config = require('./lib/config');

let max = 2;

tap.test(
    'Random Bad IP Addresses ('+max+')',
    (t) => {
        config.udgerParser.randomIpv4(max, (err, results) => {
            console.log(results);
            t.equal(err, null, "should NOT return an error");
            t.equal(results.length, max, "should return "+max+" results");
            t.end();
        });
    }
);
