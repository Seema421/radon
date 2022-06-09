const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
    author_name:"String",
    author_id: { type:Number,
        required:true },
    age : Number,
    adress : "String"
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema) 