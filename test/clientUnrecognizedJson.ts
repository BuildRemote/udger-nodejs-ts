import tap from 'tap';
import config from './lib/config.js';

const myUa = 'myUnknowUA';

const expected = {
    'userAgent': {
        'ua': {
            'string': 'myUnknowUA',
            'class': 'unrecognized'
        }
    }
};

tap.test(
    'User Agent: myUnknowUA should return unrecognized',
    (t) => {
        config.udgerParser.set({ ua:myUa });
        const ret = config.udgerParser.parse({ json:true });
        t.same(ret, expected);
        t.end();
    }
);
