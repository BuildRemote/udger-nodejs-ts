import tap from 'tap';
import config from './lib/config.js';

const myIp = '2001:41d0:8:d54c::1';

const expected = {
    'ipAddress': {
        'ip': '2001:41d0:8:d54c::1',
        'version': 6,
        'classification': {
            'name': 'Cgi proxy',
            'code': 'cgi_proxy'
        },
        'lastSeen': '2017-01-06 03:44:15',
        'geo': {
            'country': {
                'name': 'France',
                'code': 'FR'
            },
            'city': 'Cachan'
        },
        'datacenter': {
            'name': 'OVH',
            'code': 'ovh',
            'homepage': 'http://www.ovh.com/'
        }
    },
    'fromCache': false
};


tap.test(
    'IP Address: '+myIp+' ovh cgi should be in datacenter ipv6 list',
    (t) => {
        config.udgerParser.set({ ip:myIp });
        const ret = config.udgerParser.parse({ json:true, full:true });
        t.same(ret, expected);
        t.end();
    }
);
