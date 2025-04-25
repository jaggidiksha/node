const http=require("http")

http.createServer((req,res)=>{

if(req.url==="/"){
    res.write("hello this is home page")
    res.end()
}else if(req.url==="/about"){
    res.write("this is about oage")
    res.end()
}else {
    res.write("page does not exist")
    res.end()
}



}).listen(9000)