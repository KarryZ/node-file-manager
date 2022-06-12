import { createReadStream } from 'fs';
import { join } from 'path';
import { getDirName } from './filelocation.js';

export const cat = async ( sFileName ) => {
    try {
        const sFilePath = join(getDirName(), sFileName);
        const readableStream = await createReadStream(sFilePath, 'utf-8');
        readableStream.on('data', chunk => process.stdout.write(chunk)); 
        readableStream.on('close', () => console.log(`You are currently in ${getDirName()}`))
    } catch (err) {
        console.error('Operation failed');
    }
    
};