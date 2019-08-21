const express = require("express");
const Revenue = require("./controllers/RevenueController");
const Images = require("./controllers/ImagesController");
const User = require("./controllers/UsersController");

const routes = express.Router();

//Users
routes.post("/api/user/autentic", User.autentic)

//Imagens
routes.get("/api/revenue/image/:image", Images.index);

//Pratos e receitas
routes.get("/api/revenues", Revenue.index);
routes.get("/api/revenue/:id", Revenue.indexById);

routes.use(User.middleToken);

//Pratos e receitas
routes.post("/api/revenue",Revenue.store);
routes.put("/api/revenue/:id", Revenue.update);
routes.delete("/api/revenue/:id", Revenue.delete);

module.exports = routes;