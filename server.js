const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Hello");
    console.log("Server is running");
});
app.listen(1050, () => {
    console.log("Server started at http://localhost:1050");
});