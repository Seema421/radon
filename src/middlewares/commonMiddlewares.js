// const app = express();
const productModel = require ("../models/productModel")
const mid1= function ( req, res, next) {
    if((req.header.isFreeAppUser==false)){
        return res.send({msg:"This is mendatory"})
    }
    else
    next()
}
 const headerValidation = async function(req,res,next){
    let header = req.headers
    let appType=header["isFreeAppUser"]
    if(!appType){
        appType = header["isfreeappuser"]
    }
  
    if(!appType) {
        return res.send({msg:"Header is compulsory"})
    }
    //we will set header true here as header present in header is string value
    if (appType=='true'){
    req.appTypeFree=true
    } else {
        req.appTypeFree=false
    }    
    next()

 }



//app.use(mid1)
module.exports.mid1= mid1
module.exports.headerValidation=headerValidation
