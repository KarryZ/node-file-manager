import { homedir } from 'os';
import { getDirName } from './filelocation.js';

export const getHomedir = async () => {
    console.log(`Your home directory is ${homedir()}`);
    console.log(`You are currently in ${getDirName()}`);
};