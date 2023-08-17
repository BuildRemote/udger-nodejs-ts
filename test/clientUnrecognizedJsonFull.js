import tap from 'tap';
import config from './lib/config';

const myUa = 'myUnknowUA';

const expected = {
    'userAgent': {
        'ua': {
            'string': 'myUnknowUA',
            'class': {
                'name': 'Unrecognized',
                'code': 'unrecognized'
            }
        }
    },
    'fromCache': false
};


tap.test(
    'User Agent: myUnknowUA should return unrecognized',
    (t) => {
        config.udgerParser.set({ ua:myUa });
        const ret = config.udgerParser.parse({ json:true, full:true });
        t.same(ret, expected);
        t.end();
    }
);
