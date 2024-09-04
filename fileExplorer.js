const fs = require('fs');
const path = require('path');

function exploreDirectory(directoryPath) {
    const items = fs.readdirSync(directoryPath);

    for (const item of items) {
        const fullPath = path.join(directoryPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isFile()) {
            console.log(`File: ${fullPath}`)
        } else if (stat.isDirectory()) {
            console.log(`Directory: ${fullPath}`)
            exploreDirectory(fullPath)
        }
    }

}

const startPath = process.argv[2] || '.';
exploreDirectory(startPath);