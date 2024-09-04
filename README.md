# Node File Explorer

This project is a simple Node.js application that recursively explores directories and files in a given path.

## Setup

1. Clone the repository or download the source code:
   ```
   git clone https://github.com/branhoff/node-file-explorer
   cd node-file-explorer
   ```

2. Install dependencies (if any):
   ```
   npm install
   ```

   Note: This project uses built-in Node.js modules, so you might not need to install any additional dependencies.

## Running the Application

To run the file explorer:

```
node fileExplorer.js [path]
```

- `[path]` is an optional argument. If not provided, the script will use the current directory as the starting point.

Examples:

1. Explore the current directory:
   ```
   node fileExplorer.js
   ```

2. Explore a specific directory:
   ```
   node fileExplorer.js /path/to/directory
   ```

## Output

The script will output the structure of the explored directory, listing files and subdirectories.