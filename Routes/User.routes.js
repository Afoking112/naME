const express = require("express")
const userRouter = express.Router()
const {signup,Usersignup, login, Userlogin} = require("../Controllers/User.controller")

userRouter.get("/signup",signup)
userRouter.post("/user/signup", Usersignup)
userRouter.get("/login",login)
userRouter.post("/user/login", Userlogin)

module.exports = userRouter
