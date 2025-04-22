let str="john";
let bfr=Buffer.from(str);
console.log(bfr)
let a=bfr.toString("utf-8")
console.log(a)


console.log(Buffer.alloc(5))