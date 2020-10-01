const mongoose = require('mongoose')
const Schema = mongoose.Schema
// here we are make use of mongoose and defines all the data of the collections

let bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    authors: {
        type: [{ type: String, required: true }],
        required: true
    },

    description: {
        type: String
    },

    image: {
        type: String
    },

    link: {
        type: String
    }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book