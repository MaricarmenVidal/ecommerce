import express from "express"
import __dirname from "./utils.js"
import handlebars from "express-handlebars"
import { Server } from "socket.io"
import http from "http"
import path from "path"
import mongoose from "mongoose"
import router from "./routes.js"
import bodyParser from "body-parser"

const app=express()
const httpServer = http.createServer(app);

//Middlewares
app.use(express.json())
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname+'/public')))
app.engine('handlebars', handlebars.engine())

//Route principal
app.use("/api/", router)

mongoose.connect("mongodb+srv://maricarmenvidal204:uS5W1cXzpwJjkOWv@cluster0.zdyix6b.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const DB=mongoose.connection

DB.on("error", (e) => {
    console.error("Failed to connect to MongoDB:", e);
});

DB.once("open", () => {
    console.log("Successful connection");
});

app.use(bodyParser.json())


const PORT = 8080

httpServer.listen(PORT,()=>console.log("Server running in ", PORT))
const io= new Server(httpServer)


io.on('connection', socket => {
    console.log("Nuevo cliente conectado!!");

    socket.on("deleteProduct", (deleteProductId) => {
        console.log("Producto borrado:", deleteProductId);
        io.emit("deleteProduct", deleteProductId);
    });

    socket.on("addProduct", (addProduct) => {
        console.log("Producto agregado:", addProduct);
        io.emit("addProduct", addProduct);
    });

    socket.on("addMessage", (addMessage) => {
        console.log("Mensaje agregado", addMessage);
        io.emit("addMessage", addMessage);
    })
})

