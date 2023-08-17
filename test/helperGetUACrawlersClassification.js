import tap from 'tap';
import config from './lib/config.js';

tap.test(
    'Get User-Agent Crawlers classification',
    (t) => {
        config.udgerParser.getUACrawlersClassification((err, results) => {
            t.equal(err, null, 'should NOT return an error');
            t.equal(results.length>0, true, 'should return some results');
            t.end();
        });
    }
);
