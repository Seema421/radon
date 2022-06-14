const mongoose= require ("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    balance:{
        type:Number,
        default:100
    },
    age:Number,
    gender: {
        type:String,
        enum:["Male","Female","others"]
    },
    isFreeAppUser: {type:Boolean,
        default:true},
  
    
}, { timestamps: true });

module.exports = mongoose.model('MUser', userSchema)

