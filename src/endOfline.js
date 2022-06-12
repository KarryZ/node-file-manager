import { EOL } from 'os';
import { getDirName } from './filelocation.js';

export const endOfLine = async () => {
    console.log(JSON.stringify(EOL));
    console.log(`You are currently in ${getDirName()}`)
};