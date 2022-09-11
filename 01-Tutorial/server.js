// Node Js 
// 1 . Node JS run on server 
// 2 . The console is the terminal window
console.log('Heloo Node Js please be kind')
// 3 . Global object instead of window object 
console.log(global)
// 4 . Has Common Core Modules that we will explore
// 5 . CommonJS modules instead ES6 modules
const os = require('os')
const path = require('path')
const math = require('./math')

console.log(os.platform())

// Take a directory name 
console.log(__dirname)
// Take a file name 
console.log(__filename)

console.log(path.dirname(__filename))

console.log(math.add(1, 1))

console.log(math.divide(1, 1))

console.log(math.multiply(1, 1))

console.log(math.subtract(1, 1))