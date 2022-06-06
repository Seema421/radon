const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createUser1= async function (req, res) {
    let detail = req.body
    let savedData = await UserModel.create(detail) //use this userModel to interect with mongoDB to save our data.We are asking UserModel go ahead and create data in database
    res.send({ data: detail })
}

const allData = async function (req, res) {
    let detail = req.body
    let allDetail = await UserModel.find() //use this userModel to interect with mongoDB to save our data.We are asking UserModel go ahead and create data in database
    res.send({ data: allDetail })
}
const allBookData=async function(req,res){
    let bookDetail=req.body
    let savedData=await UserModel.create(bookDetail)
    res.send({msg:savedData})
   
} 
const getBookData=async function(req,res){
    let bookDetail=req.body
    let savedData=await UserModel.find()
    res.send({data: bookDetail})
    // let authorName=req.body.authorName;
    console.log("Book list are "+ JSON.stringify(bookDetail))
    console.log("Book detail is "+ JSON.stringify(bookDetail))
}

module.exports.getBookData=getBookData
module.exports.allBookData=allBookData
module.exports.createUser1=createUser1
module.exports.allData=allData
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData