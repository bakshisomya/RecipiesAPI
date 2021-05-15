const mongoose = require('mongoose');
const recipe = mongoose.Schema({
    dish : String,
    chef : String,
    ingredientArray : [String],
    image : String,
    description : String
},{timestamps : true});

module.exports = mongoose.model('recipe',recipe);