const express = require("express");
const Revenue = require("./controllers/RevenueController");

const routes = express.Router();

routes.get("/api/revenues", Revenue.index);
routes.get("/api/revenue/:id", Revenue.indexById);
routes.post("/api/revenue",Revenue.store);
routes.delete("/api/revenue/:id", Revenue.delete);

module.exports = routes;