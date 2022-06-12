import path from 'path';
import { getDirName, setDirName, geRootDir } from './filelocation.js';

export const up = () => {
    const currentDir = getDirName();

    if (currentDir !== geRootDir() ) {
        const newPath = path.join(currentDir, '../'); 
        setDirName(newPath);
    }
    console.log(`You are currently in ${getDirName()}`);
    
}