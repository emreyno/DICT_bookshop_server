const express = require('express');

const bookRouter = express.Router();
const{BookModel} = require('../models/model')
const bodyParser = require('body-parser');



bookRouter.use(bodyParser.json());


bookRouter.get('/',async (req, res)=>{
    const book = await BookModel.find();
    res.json(book);
    // console.log(book)
})

bookRouter.get('/:id',async (req, res)=>{
    const book = await BookModel.findOne({"_id" : req.params.id});
    res.json(book);
});

bookRouter.get('/:id',async (req, res)=>{
    const book = await BookModel.find(req.params.id);
    res.json(book);
});

bookRouter.post('/',async (req, res)=>{
    const bookCreated = await BookModel.create(req.body);
    res.status(201).send(bookCreated);
    // console.log(bookCreated);
})

bookRouter.delete('/:id',async (req, res)=>{
    const book = await BookModel.findByIdAndDelete(req.params.id);
    res.status(201).send(book);
});


bookRouter.put('/',async (req, res)=>{
    const found = await BookModel.findByIdAndUpdate(req.params.id,{
        "title": String,
        "image":String,
        "pubYear": String,
        "author": String,
        "desc":String,
        "price":Number,
        "stock":Number,})

    res.status(201).send(found)
    
})





// houseRouter.get('/:id',(req, res)=>{
//     res.send(`This is house # ${req.params.id}`);
// })

bookRouter.all('*',(req,res)=>{
    res.status(404).send('This is not a Book route')
})

module.exports = bookRouter;