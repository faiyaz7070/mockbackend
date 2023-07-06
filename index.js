const express=require("express")
const app=express()
const cors=require("cors")

const {connection}=require("./config/db")
const {router}=require("./routes/book.routes.")

app.use(cors())
app.use(express.json())
app.use(router)



app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }


    console.log("server is running on port 8080");
})