// const { appendFile } = require("fs")

// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }
const mid2= function(req,res,next){
    const currentDay= new Date();
    const currentTime = currentDay.getTime() + " "
                    + (currentDay.getMonth()+1)+" "
                    +currentDay.getFullYear()+ " "
                    + currentDay.getHours() + ":"
                    + currentDay.getMinutes()+ ":"
                    +currentDay.getSeconds();
    let ip=req.ip
    let url = req.orignalURL

    console.log(`${currentTime} ${ip} ${url}`)
    next()

}



// module.exports.mid1= mid1
module.exports.mid2= mid2

