import { Router } from "express";
import { createProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";

const productRoutes = new Router();
productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.put("/:pid", updateProduct);
export default productRoutes;