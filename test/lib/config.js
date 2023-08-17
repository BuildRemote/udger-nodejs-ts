import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const db = path.resolve(__dirname, '../db/udgerdb_v3_test.dat');
import merge from 'merge-deep';

const defaultResult = fs.readJsonSync('./defaultResult.json');

import udgerParserConstructor from '../../index.js'
const udgerParser = udgerParserConstructor(db)

export default {
    defaultResult,
    udgerParser,
    merge
}

export {
    defaultResult,
    udgerParser,
    merge
}
