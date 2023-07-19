const express = require("express");


const app = express();

app.use(express.static("public"))
app.use(express.json())

app.get("/irem", function (req, res) {
    res.send("merhaba irem");
})

app.post("/login", function (req,res) {
    console.log(req.query)
    res.send(JSON.stringify(req.body))
})

app.listen(50068)