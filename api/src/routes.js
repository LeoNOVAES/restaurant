const express = require("express");
const Revenue = require("./controllers/RevenueController");
const Images = require("./controllers/ImagesController");
const routes = express.Router();

//Pratos e receitas
routes.get("/api/revenues", Revenue.index);
routes.get("/api/revenue/:id", Revenue.indexById);
routes.post("/api/revenue",Revenue.store);
routes.put("/api/revenue/:id", Revenue.update);
routes.delete("/api/revenue/:id", Revenue.delete);

//Imagens
routes.get("/api/revenue/image/:image", Images.index);

module.exports = routes;