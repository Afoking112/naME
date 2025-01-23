const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    Firstname:{type:String,require:true,trim:true},
    Lastname:{type:String,require:true,trim:true},
    Username:{type:String,require:true,trim:true,unique:true},
    Password:{type:String,require:true,trim:true}
})

const usermodel = mongoose.model("Usercollection",userSchema)

module.exports = usermodel