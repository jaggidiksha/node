// in express we have two methods to extract the data from the req and present that data in the response

// query string
// parameter

const express=require("express")
const app=express()


app.get("/",(req,res)=>{
res.send("this is home page")
})


// parameter: we need to specify the name of parameter in the url itself followed by the colons 
// method: req.params.nameofparameter
app.get("/users/:userid",(req,res)=>{
  let a=req.params.userid
res.send(`user id is ${a}`)
})


// query string : we  do not need to pass the name of query in the url but we can directly access the value using method 
// req.query.nameofquery

app.get("/search",(req,res)=>{
let b=req.query.q
res.send(`search query is ${b}`)
})

const server=app.listen(0,()=>{
     let port= server.address().port
     console.log("server started at ",port)
})

