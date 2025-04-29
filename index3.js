const express=require("express")
const app=express()


const middleware=(req,res,next)=>{
console.log("this is middleware!"+req.url)
next()
}


app.use(middleware)

app.get("/",(req,res)=>{
res.send("hello")
})


const server=app.listen(0,()=>{
 let port= server.address().port
 console.log("server started at port ",port )
})