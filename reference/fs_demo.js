const fs = require('fs');
const path = require('path');

// create folder
const testDir = path.join(__dirname, 'test');
fs.mkdir(testDir, {}, (err) => {
  // if (err) throw err;
  console.log('folder created...');
});

// create and write to file
const filePath = path.join(__dirname, '/test', 'hello.txt');
fs.writeFile(filePath, 'hello world!', (err) => {
  if (err) throw err;
  fs.appendFile(filePath, '\ni love node.js', (err) => {
    if (err) throw err;
    console.log('file written to...');
  });
  console.log('file written to...');
});

// read file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// rename file
const newFileName = path.join(__dirname, 'test', 'hello_world.txt');
fs.rename(filePath, newFileName, (err) => {
  if (err) throw err;
  console.log('file renamed...');
});