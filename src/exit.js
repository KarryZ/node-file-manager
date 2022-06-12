import { getUserName } from './userName.js';

export const exit = async () => {
    console.log(`Thank you for using File Manager, ${getUserName()}!`);
    process.exit();    
};