const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const dbConnection=async()=>{
try {
    const conn=await mongoose.connect(process.env.DB_URL)
    console.log(`Database connected  on Host ${conn.connection.host}`)
} catch (error) {
    console.log("Error in connection")
    
}
   
}
module.exports = dbConnection;
