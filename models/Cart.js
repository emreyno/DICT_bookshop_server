const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    title: String,
    image:String,
    pubYear: String,
    author: String,
    price:Number,
    stock:Number
});

module.exports = CartSchema;

