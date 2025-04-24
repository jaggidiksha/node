const http=require("http")

http.createServer((req,res)=>{
res.write("hello this is a basic server!")
res.end()
}).listen(8080)