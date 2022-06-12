import * as readline from 'readline';
import { homedir } from 'os';
import { getDirName, setDirName } from './filelocation.js';
import { commands } from './commands.js';
import { getUserName } from './userName.js';


export const runApp = async () =>  {
    const sUserName = getUserName();
    setDirName(homedir());
    const pathToWorkingDirectory = getDirName();

    console.log(`Welcome to the File Manager, ${sUserName}!`);
    console.log(`You are currently in ${pathToWorkingDirectory}`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
       
    rl.on('line', (answer) => {              
        commands(answer.trim());
    });

    rl.on('SIGINT', () => {
        console.log(`Thank you for using File Manager, ${sUserName}!`);
        rl.close();
    });   
    
}

runApp();