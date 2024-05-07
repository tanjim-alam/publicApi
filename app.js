import dotenv from "dotenv";
import express from "express";
import dbConnection from "./config/dbConnection.js";
import productRoutes from "./routes/product.routes.js";



const app = express();
const PORT = 8081;

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