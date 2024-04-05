const express = require('express');
const app = express();


app.get("/products",(req, res )=>{
    console.log("get request incoming");
    res.send({message: "Get request Successfull"})
})

app.get("/users/:id",(req, res )=>{
console.log(req.params.id);
res.send({message: "user response"})

})







app.listen(8080,()=>{
    console.log("server running ");
})