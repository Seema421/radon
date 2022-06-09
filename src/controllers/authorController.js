const y = require ("express")
const AuthorModel = require("../models/authorModel")
const BookModel=require("../models/bookModel")

const authorData = async function(req,res){//post
    let aData = await AuthorModel.create()
    res.send ({msg : aData} )
}

const getAuthorData=async function(req,res){//get
    let authorDetail = await AuthorModel.find()
     res.send (authorDetail)
   
}

module.exports.authorData=authorData
module.exports.getAuthorData=getAuthorData