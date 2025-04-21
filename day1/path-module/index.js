//path module in Node.js is a built-in core module used for working with file and 
//directory paths in a way that's cross- platform safe

const path= require('path')
const result= path.join(__dirname, 'folder', 'file.txt');
console.log(result);

// const name= path.extname(result)
// console.log(name);

// const name= path.parse(result)
// console.log(name);

const name= path.resolve(result)
console.log(name);