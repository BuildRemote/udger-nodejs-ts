import tap from 'tap';
import config from './lib/config.js';

tap.test(
    'set: should failed because string passed',
    (t) => {
        t.throws(
            ()=> {
                // @ts-expect-error
                config.udgerParser.set('myString');
            },
            {}
        );
        t.end();
    }
);
