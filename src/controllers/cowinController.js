const axios = require('axios');
const express = require('express');

let getstates1 = async function (req, res) {
    try {
        let option = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/states`
                    }

        let result = await axios(option)
        let data = result.data
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}
    //get list of districts
    let getDistrict1 = async function(req,res){
        try{
            let id= req.params.state_id
            let option = {
                method : "get",
                url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
                
                }
        let result = await axios (option)
        console.log(result.data)
        res.status(200).send({data:result.data})

    }
        catch (err){
            console.log(err)
            res.status(500).send({msg:err.message})
        }
    }

    let getByPin1= async function(req,res){
        try{
            let pin = req.query.pincode
            let date = req.query.date
             let option={
                method:"get",
                url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
                }
            let result = await axios (option)
            let data = result.data
            res.status(200).send({data:result.data})
         }
        catch (err){
            console.log(err)
            res.status(500).send({msg:err.message})
        }
}
    

    let getOtp = async function (req, res) {
        try {
            let blahhh = req.body

            console.log(`body is : ${blahhh} `)
            var options = {
                method: "post",
                url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
                data: blahhh
            }

            let result = await axios(options)
            console.log(result.data)
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }

    //get vaccination session by district id

    let getSessionsByDistrict=async function(req,res){
        try{
            let id=req.query.district_id
            let date = req.query.date
            let option={
                method:'get',
                url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
            }
        let result = await axios(option)
        res.status(200).send({data:result.data})
         }
        catch (err){
            console.log(err)
            res.status(500).send({msg:err.message})
        }
    }

    // let getdistrictSessions = async function (req, res) {
    //     try {
    //         let district = req.query.district_id
    //         let date = req.query.date
    //         let options = {
    //             method: "get",
    //             url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
    //         }
    //         let result = await axios(options)
    //         console.log(result.data)
    //         res.status(200).send({ msg: result.data })
    //     }
    //     catch (err) {
    //         console.log(err)
    //         res.status(500).send({ msg: err.message })
    //     }
    // }
    module.exports.getstates1 = getstates1
    module.exports.getDistrict1=getDistrict1
    module.exports.getByPin1=getByPin1
    module.exports.getOtp = getOtp
    module.exports.getSessionsByDistrict=getSessionsByDistrict
