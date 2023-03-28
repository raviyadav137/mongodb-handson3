const mongoose = require('mongoose');
const url = "mongodb+srv://rabiyadav137:rabiyadav137@cluster0.urne7od.mongodb.net/Human_Resource?retryWrites=true&w=majority"

const Connection = async()=>{
    try{
        console.log('connecting to db');
        const dbConn = await mongoose.connect(url)
        console.log("Connection sucessfull");
    }
    catch(err){
        console.log('error in db connection')
    }
}

module.exports = Connection;