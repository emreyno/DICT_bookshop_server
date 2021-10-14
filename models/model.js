const mongoose = require('mongoose');
const BookSchema = require('./books.model');
// const BuyerSchema = require('./buyer.model');
// const HouseSchema = require('./house.model');

const BookModel = mongoose.model("book", BookSchema);
// const AmenityModel = mongoose.model("amenity", AmenitySchema);
// const BuyerModel = mongoose.model("buyer", BuyerSchema);

module.exports ={
    BookModel,
    // AmenityModel,
    // BuyerModel
}