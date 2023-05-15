const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String
})

module.exports = mongoose.model("post",postSchema)

