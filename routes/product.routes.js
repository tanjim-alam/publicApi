import { Router } from "express";
import { createProduct } from "../controllers/product.controller.js";

const productRoutes = new Router();
productRoutes.post("/", createProduct);

export default productRoutes;