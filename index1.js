const express=require("express")
let app=express()  //instance of express function 

//  c       r               u              d
// create   read           update         delete

// post     get             put           delete 

app.get("/",(req,res)=>{
res.send("home page")
})


app.get("/about",(req,res)=>{
res.send("about page")
})


app.get("/contact",(req,res)=>{
res.send("contact page")
})

app.listen(8000,()=>{
    console.log("server started")
})
