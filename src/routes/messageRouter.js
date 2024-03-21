import express from "express";
import messageManager from "../dao/services/messageManager.js";

const messageRouter = express.Router();

// Maneja la solicitud para obtener los mensajes en tiempo real
messageRouter.get("/", messageManager.getMessages);

// Maneja la solicitud para agregar mensajes en tiempo real
messageRouter.post("/addMessage", messageManager.addMessage);

export default messageRouter;