const fs = require('fs').promises;
const path = require('path');

// Returns a Promise that resolves to a boolean
const isFile = async (fullPath) => {
    const stat = await fs.stat(fullPath);
    return stat.isFile();
};

// Returns a Promise that resolves to a boolean
const isDirectory = async (fullPath) => {
    const stat = await fs.stat(fullPath);
    return stat.isDirectory();
};

const exploreItem = async (fullPath) => {
    if (await isFile(fullPath)) {
        return `File: ${fullPath}`;
    } else if (await isDirectory(fullPath)) {
        console.log(`Directory: ${fullPath}`);
        return exploreDirectory(fullPath);
    }
};

const exploreDirectory = async (directoryPath) => {
    // Get the list of items in the directory
    const items = await fs.readdir(directoryPath);
    
    // Create an array of full paths for each item
    const fullPaths = items.map(item => path.join(directoryPath, item));
    
    // Explore each item and wait for all operations to complete
    const results = await Promise.all(fullPaths.map(exploreItem));
    
    // Flatten the results array
    return results.reduce((acc, result) => acc.concat(result), []);
};

const startPath = process.argv[2] || '.';

exploreDirectory(startPath)
    .then(results => results.forEach(result => console.log(result)))
    .catch(error => console.error('Error:', error));