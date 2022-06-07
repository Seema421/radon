const e = require("express")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

const bookData = async function(req,res){//post
    let bdata= req.body
    let savedBdata = await BookModel.create(bdata)
    res.send ({msg : savedBdata})
}

const getBookData=async function(req,res){//get
    
    // let particularBook = await BookModel.find()//it gives us all data in an array
    //let particularBook = await BookModel.findOne()//it gives us ist book that to an object
    //if we apply condition it will gives us ist result corresponding to that result that too an object
    //let particularBook = await BookModel.findOne({bookAuthor: "Nysha"})
    //if we do not have book author in our data base fineOne will send null result to avaoid this we will write condition here
    let particularBook = await BookModel.findOne({bookAuthor: "Seema"})
     if (particularBook) res.send({msg: particularBook})
     else res.send ({msg: "Book Not Valiable"})
   
}
const updateBooks = async function(req,res){//post
     
    // let allBook = await BookModel.updateMany( //usually user send and data will get updated
    //     { bookAuthor: "Tulsi Das"},//condition
    //     { $set: {bookAuthor:"Seema"}})//update in data
    //if we want to update specific data
    // let updateddata =req.body
    // let allBook = await BookModel.findOneAndUpdate( 
    // { bookAuthor: "Nysha"},
    // { $set: updateddata},
    // {new:true})
    let updateddata =req.body
    let allBook = await BookModel.findOneAndUpdate( 
    { bookAuthor: "ABC"},
    { $set: updateddata},
    {new:true,upsert:true})//if we will not give new value upsert it will give null value so upsert create if it wil not found that particular attribute
    res.send ({msg : allBook})

}
module.exports.bookData=bookData
module.exports.getBookData=getBookData
module.exports.updatebooks=updateBooks