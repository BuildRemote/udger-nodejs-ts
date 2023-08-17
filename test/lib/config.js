import path from 'path';
import fs from 'fs-extra';
const db = path.resolve(__dirname, '../db/udgerdb_v3_test.dat');
import merge from 'merge-deep';

const defaultResult = fs.readJsonSync('./defaultResult.json');

const udgerParser = require('../../')(db);

module.exports = {
    defaultResult,
    udgerParser,
    merge
};
