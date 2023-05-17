const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    task: String
    
})

module.exports = mongoose.model("task",userSchema)