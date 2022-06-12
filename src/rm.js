import { join } from 'path';
import { rm as remove} from 'fs';
import { access } from 'fs/promises';
import { getDirName } from './filelocation.js';

export const rm = async (pathToFile) => {
    const sPathToFile = join(getDirName(), pathToFile);   
       
    try {
        await access(sPathToFile);        
        
        remove(sPathToFile, { recursive:true }, (err) => {
            if(err) console.error('Operation failed');
        });
        console.log(`You are currently in ${getDirName()}`)

    } catch (e) {
        console.error('Operation failed');
        console.log(`You are currently in ${getDirName()}`)
    }    
}