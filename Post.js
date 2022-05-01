const mongoose = require("mongoose")

const Post = mongoose.Schema({
    author: {type: String, required: true}, //oluşturulan kolonlardan biri authordur.
    title: {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String},
})

module.exports = mongoose.model('Post', Post);
