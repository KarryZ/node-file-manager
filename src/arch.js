import { arch } from 'os';
import { getDirName } from './filelocation.js';

export const getArch = async () => {
    try {
        console.log(JSON.stringify(arch()));
    }
    catch (e) {
        console.error('Operation failed');
    }
    finally {
        console.log(`You are currently in ${getDirName()}`);
    }
    

};