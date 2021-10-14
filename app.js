const express = require('express');
const bookRouter = require('./router/book.router');
const cors = require('cors');
// const amenityRouter = require('./router/amenity.router');
const mongoose  = require("mongoose");
const dbName ="bookStore";
const bodyParser = require('body-parser');
// const { BookModel } = require("./models/model");


( async() =>{
    try{
        await mongoose.connect(`mongodb://localhost:27017/${dbName}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`);
        console.log("Succesfully connected to mongoDB");

    
           // const book2 = BookModel.create({
        //     name:"kitchen",
        //     description:"A place where you cook"
        // })


    }
    catch(err){
        console.log(err);
    }

    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    

    app.use('/books', bookRouter);
    // app.use('/amenity',amenityRouter);

    app.get('/',(req, res)=>{
        res.send('Hearbeat');
    });

    app.listen(8000);

} )();
