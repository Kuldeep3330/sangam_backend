const fs = require('fs')
const path = require('path')

const filePath= path.join(__dirname, 'folder', 'message.txt')
fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
    if (err) throw err;
  
    // Write data to the file
    fs.writeFile(filePath, 'Hello from Node.js using fs & path!', (err) => {
      if (err) throw err;
      console.log('File written successfully at:', filePath);
    });
  });


