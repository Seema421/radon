const mongoose = require ('mongoose')
const userModel= require("../models/userModel");
const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel")

const createUser = async function(req,res){
let data = req.body
let savedData= await userModel.create(data)
res.send({msg:savedData})

}
const createProduct = async function (req,res){
let data = req.body
let savedData= await productModel.create(data)
res.send ({msg: savedData})

}

const createuser2 = async function(req,res){
    let data = req.body
    let savedData= await userModel.create(data)
   req.headers['isFreeAppUser']='False'
   console.log(req.headers)
  
    res.send({msg:savedData})
    }

const order1 = async function(req,res){
    let data = req.body
 
    let userid=data.userid
    if (!userid) return user.send ({msg:"Id UserId is mendatory"})
    let productId=data.productId
    if (!productId) return user.send({msg:"ProductId UserId is mendatory"})
   let date = new Date()   
    let savedData= await orderModel.create(data)
    let amountToBeDeducted= await orderModel.find().select({amount:1,_id:0})
        console.log(amountToBeDeducted)
  
    let balance = 100;
    let isFreeApp=await userModel.find().select({isFreeAppUser:1})
  
    //if (amountToBeDeducted<balance) res.send ({msg :"Insufficient Balance"})
    if (isFreeAppUser=true){
        finalBalance=await orderModel .findOne({userid}).updateOne(
            {amount:0},
            {new:true},
            {upsert:true}
            
            )
    } else {
        finalBalance= await userModel.findOne({userid}).updatedOne(
            {balance:100},
            {$inc:{balance:- amountToBeDeducted}},
            {new:true},
           );
    }
    res.send({msg:finalBalance})
}
const updatePrize = async function(req,res){
    let data = await orderModel .find().populate('userid').populate('productId')
   
    res.send(data)
    let freeApp= userModel.isFreeAppUser
    // let isFreeAppUser = false
    let amount= orderModel.amount
    let productPrize=productModel.price
    let remainingBalance= userModel.balance
    console.log(productPrize)
    let response1 =""
    if (freeApp=false){  response1= ({msg:{isFreeAppUser:true,amount:0}})
        
    } else {
         response1 =// ({msg:{isFreeAppUser:false,amount:productPrize}})
         await orderModel.findById(data.userid).updateOne({$inc:{remainingBalance: -amount}})
        
        
    }   
    

     res.send ({msg:response1})
}
module.exports.createUser=createUser
module.exports.productUser=createProduct
module.exports.createuser2=createuser2
module.exports.order1=order1
module.exports.updatePrize=updatePrize
