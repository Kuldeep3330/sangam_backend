const mongoose= require('mongoose')

const bookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true, "title is required"], 
        unique:true,       
    },
    author:{
        type:String,
        required:[true, "author is required"]
    }
},{timestamps:true})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;