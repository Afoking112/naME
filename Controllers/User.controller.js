const usermodel = require("../Models/User.model")
let onemessage ;
let twomessage;
const signup = (req,res)=>{
    res.render("signup",{onemessage})
}
const Usersignup = async(req,res)=>{
    try {
        const {Firstname,Lastname,Username,Password} = req.body
        if (!Firstname ||!Username ||!Password ||!Lastname) {
            onemessage = "All fields are required"
            res.render("signup", {onemessage}) 
        }else{
            const users = await usermodel.create(req.body)
            res.redirect("/login")
             Userarr.push(req.body)
        }
    } catch (error) {
        console.log(error.message);
         if(error.message.includes("E11000 duplicate key error collection")){
           onemessage = "Username Already exist"
         }else{
            onemessage = error.message
         }
         res.render("signup", {onemessage})
    }
  
}
const login = (req,res) =>{
    res.render("loginpage",{twomessage})
}
const Userlogin = async(req,res)=>{
    console.log(req.body);
    const {Username,Password} = req.body
    const existuser = await usermodel.findOne({Username})

    
    if (existuser && existuser.Password === Password) {
        console.log("login sucessfull");
        
          res.redirect("/")
    }else{
        twomessage = "login failed"
        res.render("loginpage", {twomessage}) 
        console.log("login failed");

    }
}




module.exports = {signup,Usersignup,login,Userlogin}