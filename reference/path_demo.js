const path = require('path');

// base file name
console.log(__filename);
console.log(path.basename(__filename));

// dir name
console.log(__dirname);
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concatonate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test/hello.html'))
