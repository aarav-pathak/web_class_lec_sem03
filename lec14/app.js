const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser"); 

dotenv.config();
app.use(cookieParser());

app.get("/",(req,res)=>{
  console.log("HIIIII");
  // res.cookie("UserName","Bhavesh_Pandey");
  res.send("HOME ROUTE")
  
})


app.listen(process.env.PORT,()=>{
  console.log(`Server is running at ${process.env.PORT}`);
  
})