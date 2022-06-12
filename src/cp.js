import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { getDirName } from './filelocation.js';

export const cp = async (args) => {
    const [pathToFile, pathToNewDirectory] = args.split(",");
    const sPathToFile = join(getDirName(), pathToFile);   
    const sFileName = pathToFile.split('/').pop();
    const sPathToNewDirectory = join(getDirName(), pathToNewDirectory);
    const sPathToNewFile = join(getDirName(), pathToNewDirectory, sFileName);
    
   
    try {
        await access(sPathToFile);
        await access(sPathToNewDirectory);
        
            
        const readableStream = createReadStream(sPathToFile, 'utf8');
        const writableStream = createWriteStream(sPathToNewFile);
                    
        readableStream.pipe(writableStream);
        writableStream.on('finish', () => console.log(`You are currently in ${getDirName()}`))
       
    } catch (e) {
        console.error('Operation failed');
        console.log(`You are currently in ${getDirName()}`)
    }    
}