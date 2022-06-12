import { cpus } from 'os';
import { getDirName } from './filelocation.js';

export const getCPUS = async () => {
    const cpusRes = cpus().map(item => {
        return {model: item.model, speed: item.speed / 1000}
    });
    console.log(cpusRes);
    console.log(`You are currently in ${getDirName()}`);
};