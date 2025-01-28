const express = require("express")
const app = express()
const ejs = require("ejs")
const mongoose = require("mongoose")
require("dotenv").config()
const connect = require("./Dbconfig/User.config")
const userRouter = require("./Routes/User.routes")



app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",userRouter)
const Userarr = []

// const arr =[{
//     name:"Afolabi",
//     level:"React&Node",
//     Age:"23"
// }
    
// ]
    


app.get("/",(req,res)=>{
res.render("index")
})
// app.get("/homepage",async(req,res)=>{
//     const {Username} = req.params
//        let newarr =   await usermodel[Username]
//        newarr = req.body

//     console.log(newarr);
    
// })







// app.get("/user",(req,res)=>{
// res.send(arr)
// })

connect()
const port = 5002

app.listen(port,()=>{
    console.log(`App start on port ${port}`);
    
})