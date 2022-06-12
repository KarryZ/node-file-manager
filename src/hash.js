import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { access } from 'fs/promises';
import { join } from 'path';
import { getDirName } from './filelocation.js';

export const hash = async (pathToFile) => {
    const sPathToFile = join(getDirName(), pathToFile); 
    try {
        await access(sPathToFile); 
        const hash = createHash('sha256');
        hash.setEncoding('hex');
    
        const readableStream = createReadStream(sPathToFile);
        readableStream.on('end', () => {
            hash.end();
            let hashHex = hash.read();
            console.log(hashHex);
            console.log(`You are currently in ${getDirName()}`)
        });
        readableStream.pipe(hash);
    } catch (e) {
        console.error('Operation failed');
        console.log(`You are currently in ${getDirName()}`)
    }    
};