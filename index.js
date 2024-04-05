const express = require("express");
const app = express();
app.use(express.json());
// app.use(middleman);

app.get("/products", (req, res) => {
  console.log("get request incoming");
  res.send({ message: "Get request Successfull" });
});

//post request

app.post("/products", (req, res) => {
  console.log(req.body)
  res.send({ message: "post working" });
});

//delete request

app.delete("/products/:id", (req, res) => {
console.log(req.params.id);
res.send({ message: "Delete Successfull"});
})

//put request

app.put("/products/:id", (req, res) =>{
    console.log(req.params.id);
    console.log(req.body);
    res.send({ message:"put successful"});

});



//id variable

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.send({ message: "user response" });
});

app.get("/testing/:id", middleman, (req, res) => {
  res.send({ message: "testing request " });
  console.log("next");
});

//middleware function

function middleman(req, res, next) {
  if (req.params.id < 10) {
    res.status(401).send({ message: "You are blocked" });
  } else {
    next();
  }
}

app.listen(8080, () => {
  console.log("server running ");
});
