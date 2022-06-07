const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")

const bookData = async function(req,res){//post
    let bdata= req.body
    let savedBdata = await BookModel.create(bdata)
    res.send ({msg : savedBdata})
}

const getBookData=async function(req,res){//get
    //we want only bookName and author name so we already have data of all books through find out of them using .select we filtered bookName and author name as we dont want id so _id will be zero
    // let getData= await BookModel.find().select( {bookName: 1, bookAuthor:1, _id:0})
    //to get detail of aparticular year
    // let getData= await BookModel.find({year:2017})
    //we want all the bookName by bookAuthor-Nysha and in the year published 2017 so inside and curly bracket we will write the condition with ,
    // let getData= await BookModel.find({bookAuthor:"Nysha", year:2017})
    //we want or condition like either bookautor Nysha or Year 2010
    //inside find({$or:[{},{}]})
    // let getData= await BookModel.find({$or : [ {bookAuthor:"Nysha"}, {year:2010}]} )
    //return books whose sales is gt(greater than)100 and lt 500
    // let getData= await BookModel.find({sales : {$gt : 100,$lt :500}} )
    //find book which is published and pages are less than 200/
    let getData= await BookModel.find( { $and :[{totalPages: {$gt:10}}, {stockAvailable:true}]}  )
       //ALL BOOK DATA
    // let getData= await BookModel.find(   )
    res.send({msg:getData})
    //ALL BOOK DATA
}
module.exports.bookData=bookData
module.exports.getBookData=getBookData