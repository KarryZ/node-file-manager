import {fileURLToPath} from "url";
import { dirname, parse } from "path";
let workingPath = '';
export const getDirName = () => {
  //const __filename = fileURLToPath(metaUrl);
 // this.dirname = dirname(metaUrl);
  return workingPath;
}

export const setDirName = (sPath) => {
    workingPath = sPath;
}

export function geRootDir(){
    return parse(process.env.HOME || process.env.USERPROFILE).root;
}