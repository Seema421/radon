// const mongoose = require('mongoose');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // firstName: String,
    // lastName: String,
    // mobile: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    // age: Number,
    // gender: {
    //     type: String,
    //     enum: ["male", 'female', 'LGBQT']
    // },
    // bookName: String,
    // authorName: {
    //     type: String,
    //     required: true
    // },
    // category: String,
    // year: Number
    firstName: String,
    lastName: String,
    mobile: {
        required: true,
        type: Number
    },
    likes: {
        type: String,
        enum:[ "music", "dance"]
    }


}, { timestamps: true })
module.exports = mongoose.model('User', userSchema) //users


// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array