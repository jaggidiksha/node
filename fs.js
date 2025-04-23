const fs=require("fs")

const os=require("os")

// os.freemem()
// os.homedir()

//  c r u d
// create  read   update  delete

// fs.readFile("file.txt","utf-8",(err,data)=>{
// console.log(err,data)
// })

// fs.writeFile("file1.txt","this is some data ",()=>{
//     console.log("File written successfully.")
// })

// fs.open("abc.txt","a",function(){
//     console.log("file opened!")
// })

// fs.rename("home.html","new.html",function(err){
//  if (err) throw err 
//  console.log("file renamed successfully")
// })

fs.unlink("new.html",function(err){
if (err) throw err;
console.log("file deleted")
})