import express from "express";
import cartManager from "../dao/services/cartManager.js";

const cartRouter = express.Router();


cartRouter.post("/addCart", cartManager.addCart);

export default cartRouter;