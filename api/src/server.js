const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const server = require("http").Server(app);

mongoose.connect('mongodb://127.0.0.1:27017/restaurant',{
    useNewUrlParser:true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333,()=>{
    console.log("rodando na 3333");
});
