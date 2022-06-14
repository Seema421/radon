// const app = express();
const productModel = require ("../models/productModel")
const mid1= function ( req, res, next) {
    if((req.header.isFreeAppUser==false)){
        return res.send({msg:"This is mendatory"})
    }
    else
    next()
}

//app.use(mid1)
module.exports.mid1= mid1
