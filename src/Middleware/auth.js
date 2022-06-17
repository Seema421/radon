const userModel = require("../controllers/userController")
// const mongoose = require ('mongoose')
const express = require('express');
const jwt = require('jsonwebtoken')

const mid = async function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        if (!token) return res.status(401).send({ msg: "invalid user" })
        let decodedToken = await jwt.verify(token, "functionup-thorium")
        if (!decodedToken) return res.status(401).send({ msg: "User Authentication falied" })
        let userId = req.params.userId
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
    next()
}

const mid2 = async function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        if (!token) return res.status(401).send({ msg: "Authorisation failed" })
        let decodedToken = await jwt.verify(token, "iamthebest");
        if (!decodedToken) return res.status(401).send({ msg: "UserName and id is not available" })
        let idToBeVarified = req.params.userid;
        let loggedInUser = decodedToken.userId
        if (idToBeVarified != loggedInUser) return res.status(403).send({ msg: "This is not valid user to remove" })

    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
    next()
}




const createBook = async function (req, res) {
    try {
        let data = req.body
        console.log(data)
        if (Object.keys(data).length != 0) {
            let savedData = await BookModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST" })
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}





module.exports.mid = mid
module.exports.mid2 = mid2