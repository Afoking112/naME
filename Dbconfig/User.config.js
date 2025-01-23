const mongoose = require("mongoose")

const connect = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MongoURI)
        if(connect){
            console.log("connection sucessfully" );
            
        }
    } catch (error) {
        console.log(error);
    
    }
}

module.exports = connect