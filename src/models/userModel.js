const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    age: Number,
    posts: {
        type: [],
        default:[]
    },
    isDeleated:{type:Boolean,
    default:false}
}, { timestamps: true });

module.exports = mongoose.model('FBUser', userSchema) //users



// String, Number
// Boolean, Object/json, array