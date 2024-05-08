import dotenv from "dotenv";
import express from "express";
import dbConnection from "./config/dbConnection.js";
import productRoutes from "./routes/product.routes.js";
import cors from "cors";
import morgan from "morgan";
import productModel from "./models/product.model.js";



const app = express();
const PORT = 8081;

const corsOption = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}

app.use(cors(corsOption))
app.use(express.json());
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to public api - Tanjim"
    })
})

app.get("/getall", async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
})
app.use("/api/v1/product", productRoutes);

dbConnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});