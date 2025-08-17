const mongoose = require('mongoose');

async function connectDB(){
    mongoose.connection.on("connected", ()=>{
        console.log("Connected to DB")
    })
    await mongoose.connect(`${process.env.MONGO_URL}/ecommerce`)
}

module.exports = connectDB;