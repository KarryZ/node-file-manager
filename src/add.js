import { createWriteStream } from 'fs';
import { join } from 'path';
import { getDirName } from './filelocation.js';

export const add = async (sFileName) => {
    const sFilePath = join(getDirName(), sFileName);
    const writableStream = createWriteStream(sFilePath, 'utf-8');
     
    writableStream.write("");
    writableStream.end();
    writableStream.on('finish', () => console.log(`You are currently in ${getDirName()}`))
};