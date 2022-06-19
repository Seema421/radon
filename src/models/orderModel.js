const mongoose = require('mongoose');
// const { type } = require('os');

const orderSchema = new mongoose.Schema( {
    userid: { 
        type:mongoose.Schema.Types.ObjectId,
        ref: "MUser"
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:  "Product"
    },
    amount:Number,
    date : { type : Date, default: Date.now }, 
    isFreeAppUser: Boolean,
    
  



}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
