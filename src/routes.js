import express from "express";
import cartRouter from "./routes/cartRouter.js"
import productsRouter from "./routes/productRouter.js";
import messageRouter from "./routes/messageRouter.js";

const router = express.Router();

router.get("/", async(req, res) => {
    res.render("home");
});

router.use("/cart", cartRouter);
router.use("/products", productsRouter);
router.use("/messages", messageRouter);

export default router;