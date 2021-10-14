const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    image:String,
    pubYear: String,
    author: String,
    desc:String,
    price:Number,
    stock:Number,
    updated:{type:Date, default:Date.now}
});

module.exports = BookSchema;

