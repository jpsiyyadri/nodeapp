const path  = require("path")

// base file name
console.log(path.basename(__filename))

// dir name
console.log(path.dirname(__dirname))

// ext name
console.log(path.extname(__filename))

// create path object
console.log(path.parse(__filename).base)

// concatenate pathnames
console.log(path.join(__dirname, 'test', 'hello.html'))