import udgerParser from '../')('test/db/udgerdb_v3_test.dat';
import http from 'http';

var app = require('connect')();

http.createServer(app).listen(8082, '127.0.0.1');

app.use(function (req, res) {

    udgerParser.set({
        ua:req.headers['user-agent'],
        ip:req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    const result = udgerParser.parse();

    if (result['ip_address']['ip_classification_code'] === 'fake_crawler') {
        res.status(403);
        res.end('Sorry, you are not allowed');
        return;
    } else {
        res.end('Welcome !');
    }
});
