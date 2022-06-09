const mongoose = require('mongoose');
const publisherSchema = new mongoose.Schema({
    publisherName:{ type:"String",
    unique:true},
    headquarter: "String"
    
}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema) 