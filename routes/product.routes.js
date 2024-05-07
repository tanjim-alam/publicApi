import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";

const productRoutes = Router();
productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.put("/:pid", updateProduct);
productRoutes.delete("/:pid", deleteProduct);
export default productRoutes;