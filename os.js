// const os = require('node:os');
const path=require("path")
// const os=require("os")
// console.log(os.freemem())
// console.log(os.arch())
// console.log(os.homedir())
console.log(__dirname)
console.log(__filename)
let a=path.basename("/foo/bar/baz/asdf/quux.html")
console.log(a)

// path.join(__dirname,"folder")