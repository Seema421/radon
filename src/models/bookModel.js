const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookAuthor: String,
    year: {
        type: Number,
        default: 2021
    },
        tags: [String],
    prices: {
        indianRupee: String,
        euroRupee: String
    },
    sales: {
        type: Number,
        default: 20
    },
    totalPages: Number,
    stockAvailable: Boolean,
    summary : mongoose.Schema.Types.Mixed


}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 
