import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";
import { access } from 'fs/promises';
import { join } from 'path';
import { getDirName } from './filelocation.js';

//Example: decompress Desktop/archive.br Desktop

export const decompress = async (args) => {
    const [pathToFile, pathToDestination] = args.split(",");
    const sPathToFile = join(getDirName(), pathToFile); 
    const sPathToDestination = join(getDirName(), pathToDestination);
    const sPathToDestinationFile = join(getDirName(), pathToDestination, 'archive.txt');

    try {
        await access(sPathToFile);
        await access(sPathToDestination);
        // Create read and write streams
        const readStream = createReadStream(sPathToFile);
        const writeStream = createWriteStream(sPathToDestinationFile);

        // Create brotli compress object
        const brotli = createBrotliDecompress();

        // Pipe the read and write operations with brotli compression
        const stream = readStream.pipe(brotli).pipe(writeStream);

        stream.on('finish', () => {
            console.log(`Done decompressing. File: ${sPathToDestinationFile}`);
            console.log(`You are currently in ${getDirName()}`)
        });
    } catch (err) {
        console.error('Operation failed');
        console.log(`You are currently in ${getDirName()}`)
    }
};