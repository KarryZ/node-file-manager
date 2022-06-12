import path from 'path';
import { existsSync } from 'fs';
import { getDirName, setDirName, geRootDir } from './filelocation.js';

export const cd = (sUserPath) => {
    const currentDir = getDirName();
    //const isRelative = sUserPath.startsWith('.') || sUserPath.startsWith('/') || sUserPath.startsWith('\\');
    const newPath =  path.join(currentDir, sUserPath);//isRelative ? path.join(currentDir, sUserPath) : path.join(geRootDir(), sUserPath); 
    const isExist = existsSync(newPath);
    
    if(isExist){
        if (currentDir !== newPath ) setDirName(newPath);
    } else {
        console.error('Operation failed');
    }   
    console.log(`You are currently in ${getDirName()}`); 
}