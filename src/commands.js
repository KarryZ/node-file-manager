import { cd } from './cd.js';
import { up } from './up.js';
import { ls } from './ls.js';
import { cat } from './cat.js';
import { add } from './add.js';
import { rn } from './rn.js';
import { cp } from './cp.js';
import { mv } from './mv.js';
import { rm } from './rm.js';
import { hash } from './hash.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';
import { endOfLine } from './endOfline.js';
import { getCPUS } from './cpus.js';
import { getHomedir } from './homedir.js';
import { getUserInfo } from './userInfo.js';
import { getArch } from './arch.js';
import { exit } from './exit.js';

export const commands = (commandwitArgs) => {
    const commandName = commandwitArgs.split(' ').shift();
    const args = commandwitArgs.split(' ').slice(1).join();
    
    switch (commandName) {
        case 'up':
            up();
            break;
        case 'cd':
            cd(args);
            break;        
        case "ls":
            ls();
            break;
        case "cat":
            cat(args);
            break;
        case "add":
            add(args);
            break;
        case "rn":
            rn(args);
            break;
        case "cp":
            cp(args);
            break;
        case "mv":
            mv(args);
            break;
        case "rm":
            rm(args);
            break;
        case 'hash':
            hash(args);
            break;
        case 'compress':
            compress(args);
            break;
        case 'decompress':
            decompress(args);
            break;
        case 'os':
          switch (args) {
            case '--EOL':
                endOfLine();
                break;
                case '--cpus':
                  getCPUS();
                  break;
              case '--homedir':
                getHomedir();
                break;
              case '--username':
                getUserInfo();
                break;
              case '--architecture':
                getArch();
                break;
              default:
                console.log('Invalid input')
                break;             
          }
          break;
        case '.exit':
          exit();
          break;
        default:
          console.log('Invalid input')
          break;
      }
}