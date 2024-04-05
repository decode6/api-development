const express = require('express');
const app = express();


app.get("/products",(req, res )=>{
    console.log("get request incoming");
    res.send({message: "Get request Successfull"})
})


app.listen(8080,()=>{
    console.log("server running ");
})