import productManager from "../dao/services/productManager.js";
import express from "express";
import { configureMulter } from "../utils.js";

const productRouter = express.Router();
const imgUpload = configureMulter();

productRouter.get("/realtimeproducts", productManager.getProducts);

productRouter.post("/addProduct", imgUpload.single("image"), productManager.addProduct);

productRouter.delete('/deleteProduct/:id', productManager.deleteProduct);

export default productRouter;