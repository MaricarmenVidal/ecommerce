import productManager from "../dao/services/productManager.js";
import express from "express";
import { configureMulter } from "../utils.js";

const productRouter = express.Router();
const imgUpload = configureMulter();

// Ruta para renderizar la vista de productos en tiempo real
productRouter.get("/realtimeproducts", productManager.getProducts);

// Manejar la solicitud de agregar un producto en tiempo real
productRouter.post("/addProduct", imgUpload.single("image"), productManager.addProduct);

// Manejar la solicitud de eliminación de un producto en tiempo real
productRouter.delete('/deleteProduct/:id', productManager.deleteProduct);

export default productRouter;