const e = require("express");
const { mapReduce, find } = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")
const BookModel = require("../models/bookModel")

const authorData = async function(req,res){//post
    let data = req.body
    let authorId=data.author_id
    if (!authorId)  return res.send ({msg:"Author_id is mendatory"})
    let savedData = await AuthorModel.create(data)
    res.send ({msg : savedData} )
}

const getAuthorData=async function(req,res){//get
    let authorDetail = await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookByChetan = await BookModel.find({author_id:authorDetail[0].author_id})
     res.send ({msg:bookByChetan})
   
}

const getTwoState =async function (req,res){//get
let twoState=await BookModel.findOneAndUpdate(
    { name:"Two states"},
    {price : 100},
    { new :true, upsert :true}
)

let bookId = await BookModel.find({name:"Two states"}).select("author_id")
let authorName=await AuthorModel.find({author_id:bookId[0].author_id})
res.send({msg:authorName,twoState})
}
const costFind = async function(req,res){//get
let costOfbook = await BookModel.find ({price : {$gte:50,$lte:100}}).select({author_id:1,_id:0})
let id = costOfbook.map(input=>input.author_id)
let arry =[]
for (let i=0; i<id.length;i++){
    let x =id[i]
    // console.log(x)
    let authoris =await AuthorModel.find({author_id:x}).select({author_name:1,author_id:1,_id:0})
    //y.push({name:authoris.author_name,id :costOfbook[i].author_id})

    arry.push(...authoris)
}

const authorName=arry
console.log(authorName)
res.send({msg : authorName})
}
const authorAgeWise= async function(req,res){//get
    let data=req.body
    let savedData = await BookModel.find({ratings:{$gte:4}})
    let id = savedData.map(input=>input.author_id)
    // console.log(id)
    let age = await AuthorModel.find({$and: [{author_id:id},{age:{$gte:50}}]}).select({author_name:1,age:1,_id:0})


    console.log(age)

res.send({msg:age})

}
module.exports.authorAgeWise = authorAgeWise
module.exports.costFind = costFind
module.exports.getTwoState = getTwoState
module.exports.authorData = authorData
module.exports.getAuthorData = getAuthorData

const novelData = async function(req,res){//post
    let data = req.body
    let booksData = await BookModel.create(data)
    res.send ({msg: booksData})
}

const getBookData=async function(req,res){//get
    
    let bookDetail = await BookModel.find()
     res.send (bookDetail)
   
}

module.exports.novelData=novelData
module.exports.getBookData=getBookData
