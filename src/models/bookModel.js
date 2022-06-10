const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema({
    bookname:"String",
    author_id: { type: "ObjectId",
        ref: "newAuthor"},
        HardCover: {
            type:Boolean,
            default:false}
,    price: Number,
    ratings: Number,
    publisher: {
        type: "ObjectId",
        ref:"newPublisher"
    }


}, { timestamps: true });

module.exports = mongoose.model('newBook', bookSchema) 
