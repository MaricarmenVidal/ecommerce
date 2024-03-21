import express from "express";
import cartManager from "../dao/services/cartManager.js";

const cartRouter = express.Router();

// Maneja la solicitud para comprar productos en tiempo real
cartRouter.post("/addCart", cartManager.addCart);

export default cartRouter;