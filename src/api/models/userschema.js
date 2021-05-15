const mongoose = require('mongoose');

const user = mongoose.Schema({
    username: String,
    password: String
},{timestamps:true});

module.exports = mongoose.model('User',user);