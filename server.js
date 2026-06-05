const express = require("express");

const app = express();

app.get("/", (req,res)=>{
res.send("Docker Deployment Successful");
});

app.listen(3000, ()=>{
console.log("Running");
});