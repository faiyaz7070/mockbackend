const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://faiyaz:dulraz@cluster0.tohzp.mongodb.net/mockapi?retryWrites=true&w=majority")


module.exports={
    connection
}