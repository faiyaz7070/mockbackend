const mongoose=require("mongoose")

const Schema=mongoose.Schema({
Title:String,

 Author:String,
Genre:String,
 Description:String,
 Price:Number
})

const BookModel=mongoose.model("book",Schema)

module.exports={
    BookModel
}