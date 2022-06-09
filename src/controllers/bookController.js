const e = require("express")
const { mapReduce, find } = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")
const BookModel = require("../models/bookModel")
const publisher = require("../models/publisher")
const PublisherModel= require ("../models/publisher")

const authorData = async function(req,res){//post
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send ({msg : savedData} )
}
const publisherData = async function(req,res){//post
    let data= req.body
    let savedData= await PublisherModel.create(data)
    res.send ({meg:savedData})
}
const newBook = async function(req,res){//post
    let data = req.body
    console.log(data)
   let author_id= data.author_id
   console.log(author_id)
   if(!author_id) res.send({msg:"author_id is mendatory"})
   let authorOid=await AuthorModel.find().select({_id:1})
   console.log(authorOid)
   if (!authorOid) res.send({msg:"This author is not present"})
   let publisherId= await PublisherModel.find().select({_id:1})
   console.log(publisherId)
   if(!publisherId) res.send ({msg:"PublisherID is required"})
   let savedData= await BookModel.create(data)
   res.send ({msg:savedData})

}
const newAuthor1 = async function(req,res){//post
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send ({msg: savedData})
}
const newPublisher2 = async function(req,res){//post
    let data = req.body
    let publisher = await PublisherModel.create(data)
    res.send ({msg: publisher})
}
const newBook2=async function(req,res){//post
let data=req.body
let savedData = await BookModel .create(data)
res.send({msg:savedData})
}
const getBookData=async function(req,res){//get
    
    let bookDetail = await BookModel.find().populate("author_id").populate("publisher")
     res.send (bookDetail)
   
}

module.exports.newAuthor1=newAuthor1
module.exports.getBookData=getBookData
module.exports.authorData=authorData
module.exports.publisherData=publisherData
module.exports.newBook=newBook
module.exports.newPublisher2=newPublisher2
module.exports.newBook2=newBook2
