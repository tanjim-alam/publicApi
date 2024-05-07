import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/product.controller.js";

const productRoutes = new Router();
productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);

export default productRoutes;