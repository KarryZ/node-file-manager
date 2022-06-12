import { userInfo } from 'os';
import { getDirName } from './filelocation.js';

export const getUserInfo = async () => {
    try {
        console.log(`User name is ${userInfo().username}`);
    }
    catch (e) {
        console.error('Operation failed');
    }
    finally {
        console.log(`You are currently in ${getDirName()}`);
    }
    

};