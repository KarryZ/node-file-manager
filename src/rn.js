import { rename as changeName, access  } from 'node:fs';
import { join } from 'path';
import { getDirName } from './filelocation.js';


export const rn = async (sFileNames) => {
    const [oldPath, newPath] = sFileNames.split(",");
    const sOldPath = join(getDirName(), oldPath);
    const sNewPath = join(getDirName(), newPath);

    await access(sNewPath, (err) => {
        if(err) return;
        console.error('Operation failed');
    });

    await changeName(sOldPath, sNewPath, (err) => {
        if (err) {
            console.error('Operation failed');
            return;
        }
         console.log('Rename complete!');
         console.log(`You are currently in ${getDirName()}`);
    });  
};

