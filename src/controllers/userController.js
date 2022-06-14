const jwt = require ('jsonwebtoken')
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const loginUser=async function(req,res){
    let userName=req.body.emailId
    let passWord= req.body.password
    let user = await userModel.findOne({emailId:userName,password:passWord})
    if (!user) return res.send({status:false, msg:"UserName and Password dont match"})
    //if user is present create the JWT token and send it in response we have to install npm i jsonwebtoken here
    let token = await jwt.sign({userId: user._id.toString()},'functionup-thorium')
    res.send ({status:true, data:token})



}
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    // let token = req.headers ["x-auth-token"]//we have to set token as a x-auth-token in postman as we are testing usually it is set from front end
    // console.log(token)
    // let decodedToken = await jwt.verify(token, 'functionup-thorium' )
    // if (!decodedToken) return res.send ({msg:"not valid"})
    
    let userId=req.params.userId//same variable we will use in our post request userId /user/:userId
    let userDatail= await UserModel.findById(userId)
    if(!userDatail) return res.send ({msg:"User Id and password mismatch"})
    res.send({msg: userDatail})
}
const updateUser = async function(req,res){
    // let token = req.headers ["x-auth-token"];
    // console.log(token)
    // if (!token) return res.send ({msg: "invalid user"})
    // let decodedToken = await jwt.verify(token, "functionup-thorium")
    // if (!decodedToken) return res.send ({msg: "User Authentication falied"})
    let userId=req.params.userId
    console.log(userId)
    let user = await userModel.findById(userId);
    console.log(user)
    if (!user) return res.send ({msg:"This user does not exit"})
   
    let userUpdate = await userModel.updateOne(
      {user:1},
      {$set:{"lastName":"xyz"}},
      {new:true}
    )
   res.send(userUpdate)
}

const removeUser= async function (req,res){
// let token = req. headers ["x-auth-token"];
// if (!token) return res.send ({msg:"Authentication failed"});
// let decodedToken = await jwt.verify( token, "functionup-thorium");
// if(!decodedToken) return res.send ({msg : "User id/password in invalid"});
let userId = req.params.userId
if(!userId) return res.send ({msg:"UserName and Password mismatch"})
let user = await userModel.findById(userId)
let removeData= await userModel.updateMany(
    {user:1},
    {$set:{isDeleted:true}},
    {new: true},
   

)
res.send (removeData)

}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.loginUser=loginUser
module.exports.updateUser=updateUser
module.exports.removeUser=removeUser
