const tap = require('tap');
const config = require('./lib/config');

const defaultResult = config.defaultResult;

const myIp = '2001:41d0::';

let expected = {
    'ip_address': {
        'ip': myIp,   // OVH datacenter
        'ip_ver': 6,
        'ip_classification': 'Unrecognized',
        'ip_classification_code': 'unrecognized',
        'datacenter_name': 'OVH',
        'datacenter_name_code': 'ovh',
        'datacenter_homepage': 'http://www.ovh.com/'
    }
};

expected = config.merge(defaultResult, expected);

tap.test(
    'IP Address: '+myIp+' ovh should be in datacenter ipv6 list',
    (t) => {
        config.udgerParser.set({ ip:myIp });
        const ret = config.udgerParser.parse();
        t.same(ret, expected);
        t.end();
    }
);
