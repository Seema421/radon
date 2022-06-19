const mongoose = require ('mongoose')
const userModel= require("../models/userModel");
const productModel = require("../models/productModel");
const orderModel = require("../models/orderModel")

const createUser = async function(req,res){
let data = req.body
data.isFreeAppUser = req.appTypeFree
console.log(data.isFreeAppUser)
let savedData= await userModel.create(data)
res.send({msg:savedData})

}
const createProduct = async function (req,res){
let data = req.body
let savedData= await productModel.create(data)
res.send ({msg: savedData})

}

const order = async function(req,res){
    let orderDetails = req.body
    let uId=req.body.userid
    if(!uId) return res.send({msg:"UserId is mendatory"})
    let user = await userModel.findById(uId)
    let pId=req.body.productId
    if(!pId) return res.send({msg:"ProductId is mendatory"})
    let product = await productModel.findById(pId)
    //scenerio 1 if isFreeAppUser-False and user balance>productBalance
    if(!req.appTypeFree && user.balance>=product.price){
        user.balance=user.balance-product.price
        await user.save()
        orderDetails.amount=product.price
        orderDetails.isFreeAppUser=false
        let orderCreated= await orderModel.create(orderDetails)
        return res.send ({msg:orderCreated})
    } else if(!req.appTypeFree){
        return res.send ({msg:"Insufficient Balance"})
    } else {
        orderDetails.amount=0
        orderDetails.isFreeAppUser=true
        let orderCreated = await orderModel.create(orderDetails)
        return res.send({msg:orderCreated})
     }
}
module.exports.createUser=createUser
module.exports.createProduct=createProduct
module.exports.order=order


