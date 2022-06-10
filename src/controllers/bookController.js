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
const publisher3 = async function(req,res){//post
let data= req.body
let savedData=await PublisherModel.create(data)
res.send ({msg: savedData})
}

const newBook2=async function(req,res){//post
let data=req.body
let savedData = await BookModel .create(data)
res.send({msg:savedData})
}
const author2 = async function(req,res){//
let data = req.body
let savedData = await AuthorModel.create(data)
res.send=({msg: savedData})
}
const author3= async function(req,res){//post
let data=req.body
let savedData= await AuthorModel.create(data)
res.send({msg:savedData})
}
const author4 = async function(req,res){//post
let data = req.body
let savedData=await AuthorModel.create(data)
res.send({msg:savedData})
}
const author5 =async function(req,res){//post
let data= req.body
let savedData=await AuthorModel.create(data)
res.send({msg:savedData})

}

const getBookData=async function(req,res){//get
    
    let bookDetail = await BookModel.find().populate("author_id").populate("publisher")
     res.send (bookDetail)
   
}

const book3 = async function(req,res){//post
let data = req.body
let savedData=await BookModel.create(data)
res.send({msg:savedData})
}
const book4 = async function(req,res){//
let data = req.body
let savedData=await BookModel.create(data)
res.send({msg:savedData})
}
const book5 = async function(req,res){//
    let data = req.body
    let savedData=await BookModel.create(data)
    res.send({msg:savedData})
    }
const book6 = async function(req,res){//
    let data = req.body
    let savedData=await BookModel.create(data)
    res.send({msg:savedData})
    }
const book7 = async function(req,res){//
    let data = req.body
    let savedData=await BookModel.create(data)
    res.send({msg:savedData})
    }
const book8 = async function(req,res){//
    let data = req.body
    let savedData=await BookModel.create(data)
    res.send({msg:savedData})
    }
const book9 = async function(req,res){
let data = req.body
let savedData=await BookModel.create(data)
res.send({msg:savedData})
}
const book10 = async function(req,res){
let data = req.body
let savedData= await BookModel.create(data)
res.send({msg:savedData})
}
const updateBook = async function(req,res){//put
let data =req.body
let updatedData= await BookModel.updateOne(
    {publisherName
        :"Pengiun"},
    {HardCover:true})
res.send({msg:"Updated"})
console.log(updatedData)

}
const updatePrize = async function(req,res){//put
    let data =req.body
    let rating=await AuthorModel .find({rating : {$gte:3.5}}).select({_id:1})
    .updateMany(

        {price: {$inc:10}},
        {new:true},
        {upsert:true}
    )
   
     
    res.send({msg:"Updated"})
    console.log(rating)
    
    }
module.exports.newAuthor1=newAuthor1
module.exports.getBookData=getBookData
module.exports.authorData=authorData
module.exports.publisherData=publisherData
module.exports.newBook=newBook
module.exports.newPublisher2=newPublisher2
module.exports.newBook2=newBook2
module.exports.publisher3=publisher3
module.exports.author2=author2
module.exports.author3=author3
module.exports.author4=author4
module.exports.author5=author5
module.exports.book3=book3
module.exports.book4=book4
module.exports.book5=book5
module.exports.book6=book6
module.exports.book7=book7
module.exports.book8=book8
module.exports.book9=book9
module.exports.book10=book10
module.exports.updateBook=updateBook
module.exports.updatePrize=updatePrize