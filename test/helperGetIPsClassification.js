const tap = require('tap');
const config = require('./lib/config');

tap.test(
    'Get ip classification',
    (t) => {
        config.udgerParser.getIPsClassification((err, results) => {
            t.equal(err, null, 'should NOT return an error');
            t.equal(results.length>0, true, 'should return some results');
            t.end();
        });
    }
);
