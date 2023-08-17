import tap from 'tap';
import config from './lib/config.js';

tap.test(
    'set: should failed because unknow attribute passed',
    (t) => {
        t.throws(
            ()=> {
                config.udgerParser.set({ foo:'bar' });
            },
            {}
        );
        t.end();
    }
);
