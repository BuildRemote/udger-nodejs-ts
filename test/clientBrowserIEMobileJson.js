const tap = require('tap');
const config = require('./lib/config');

const myUa = 'IEMobile 1.1';

const expected = {
    'userAgent': {
        'ua': {
            'string': 'IEMobile 1.1',
            'class': 'mobile_browser',
            'name': 'IE Mobile 1.1',
            'family': 'ie_mobile',
            'engine': 'Trident'
        },
        'device': {
            'class': 'smartphone'
        }
    }
};

tap.test(
    'User Agent: IEMobile 1.1 should be recognized',
    (t) => {
        config.udgerParser.set({ ua:myUa });
        const ret = config.udgerParser.parse({ json:true });
        t.same(ret, expected);
        t.end();
    }
);
