const userModel = require("../controllers/userController")
// const mongoose = require ('mongoose')
const express = require ("express")
const jwt = require ('jsonwebtoken')

const mid = async function (req,res,next){
    let token = req.headers ["x-auth-token"];
    if (!token) return res.send ({msg: "invalid user"})
    let decodedToken = await jwt.verify(token, "functionup-thorium")
    if (!decodedToken) return res.send ({msg: "User Authentication falied"})
    let userId=req.params.userId
     
next()
}
module.exports.mid=mid