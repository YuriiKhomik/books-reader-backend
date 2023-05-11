const { string } = require("joi");
const { Schema, model } = require("mongoose");

const bookSchema = new Schema({});

const Book = model("book", bookSchema);

module.exports = Book;
