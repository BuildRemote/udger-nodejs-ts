import { Address4, Address6 } from '@laverdet/beaugunderson-ip-address'

function phpRegexpToJs(str: string) {
    let re = str.replace(/^\//, '').trim();
    let flags = re.match(/\/([a-z]{0,3})$/);
    if (flags?.length == 0 || flags == null) {
        throw "could not convert php regex to js"
    }
    const sFlags = flags[1].replace(/s/, '');
    re = re.replace(/\/[a-z]{0,3}$/, '');
    return new RegExp(re, sFlags);
}

function getIpVersion(ip: string) {

    let addr: Address6 | Address4 | undefined;
    try {
        addr = new Address6(ip);
    } catch(e) {
        //
    }

    if (addr) return 6;

    try {
        addr = new Address4(ip);
    } catch(e) {
        //
    }

    if (addr) return 4;

    return false;
}

function inetPton (a) {
    let m;
    let x;
    let i;
    let j;
    const f = String.fromCharCode;
    // IPv4
    m = a.match(/^(?:\d{1,3}(?:\.|$)){4}/);
    if (m) {
        m = m[0].split('.');
        m = f(m[0]) + f(m[1]) + f(m[2]) + f(m[3]);
        // Return if 4 bytes, otherwise false.
        return m.length === 4 ? m : false;
    }
    const r = /^((?:[\da-f]{1,4}(?::|)){0,8})(::)?((?:[\da-f]{1,4}(?::|)){0,8})$/;
    // IPv6
    m = a.match(r);
    if (m) {
        // Translate each hexadecimal value.
        for (j = 1; j < 4; j++) {
            // Indice 2 is :: and if no length, continue.
            if (j === 2 || m[j].length === 0) {
                continue;
            }
            m[j] = m[j].split(':');
            for (i = 0; i < m[j].length; i++) {
                m[j][i] = parseInt(m[j][i], 16);
                // Would be NaN if it was blank, return false.
                if (isNaN(m[j][i])) {
                    // Invalid IP.
                    return false;
                }
                m[j][i] = f(m[j][i] >> 8) + f(m[j][i] & 0xFF);
            }
            m[j] = m[j].join('');
        }
        x = m[1].length + m[3].length;
        if (x === 16) {
            return m[1] + m[3];
        } else if (x < 16 && m[2].length > 0) {
            return m[1] + (new Array(16 - x + 1)).join('\x00') + m[3];
        }
    }
    // Invalid IP
    return false;
}

function inetNtop (a) {
    let i = 0;
    let m = '';
    const c: any = [];
    a += '';
    if (a.length === 4) {
        // IPv4
        return [
            a.charCodeAt(0),
            a.charCodeAt(1),
            a.charCodeAt(2),
            a.charCodeAt(3)
        ].join('.');
    } else if (a.length === 16) {
        // IPv6
        for (i = 0; i < 16; i++) {
            c.push(((a.charCodeAt(i++) << 8) + a.charCodeAt(i)).toString(16));
        }
        return c.join(':')
            .replace(/((^|:)0(?=:|$))+:?/g, function (t) {
                m = (t.length > m.length) ? t : m;
                return t;
            })
            .replace(m || ' ', '::');
    } else {
        // Invalid length
        return false;
    }
}


const multipliers = [0x1000000, 0x10000, 0x100, 1];

function ip2long(ip) {
    var longValue = 0;
    ip.split('.').forEach(function(part, i) {longValue += part * multipliers[i];});
    return longValue;
}

function long2ip(longValue) {
    return multipliers.map(function(multiplier) {
        return Math.floor((longValue % (multiplier * 0x100)) / multiplier);
    }).join('.');
}

export default {
    phpRegexpToJs,
    getIpVersion,
    inetPton,
    inetNtop,
    ip2long,
    long2ip
}
