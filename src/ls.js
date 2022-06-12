import { readdir } from 'node:fs/promises';
import { getDirName } from './filelocation.js';

export const ls = async () => {
    try {
        const path = getDirName();
        const aFiles = await readdir(path);
        console.log(aFiles)
    } catch (err) {
        console.error('Operation failed')
    } finally {
        console.log(`You are currently in ${getDirName()}`);
    }
};