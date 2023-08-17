import tap from 'tap';
import config from './lib/config.js';

tap.test(
    'set: should failed because no data passed',
    (t) => {
        t.throws(
            ()=> {
                // @ts-expect-error
                config.udgerParser.set();
            },
            {}
        );
        t.end();
    }
);
