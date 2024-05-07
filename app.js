import dotenv from "dotenv";
import express from "express";
import dbConnection from "./config/dbConnection.js";
import productRoutes from "./routes/product.routes.js";
import cors from "cors";



const app = express();
const PORT = 8081;

const corsOption = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}

app.use(cors(corsOption))
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to public api - Tanjim"
    })
})
app.use("/api/v1/product", productRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

dbConnection();