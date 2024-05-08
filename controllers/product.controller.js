import productModel from "../models/product.model.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";

export const createProduct = async (req, res, next) => {
    console.log(req.body)
    const { title, price, description, image } = req.body;
    if (!title || !price || !description || !image) {
        return next(new ApiError(400, "all fileds are required"))
    }

    try {
        const product = await productModel.create({
            title,
            price,
            description,
            image
        });
        res.status(201).json(
            new ApiResponse(200, product, "Product created Successfully")
        )
    } catch (error) {
        console.log(error)
        return next(new ApiError(501, "Failed to create product"))
    }
};

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await productModel.find();
        // if (!products) {
        //     return next(new ApiError(501, "Something went wrong"))
        // }
        res.status(201).json(
            new ApiResponse(200, products, "Products data fetched successfully")
        )
    } catch (error) {
        console.log(error)
        return next(new ApiError(501, "Failed to fetch products"))
    }
};

export const updateProduct = async (req, res, next) => {
    const { title, price, description, image } = req.body;
    const { pid } = req.params;
    if (!pid) {
        return next(new ApiError(501, "Product not found"));
    }
    try {
        const product = await productModel.findById(pid);
        if (!product) {
            return next(new ApiError(501, "Product not found"));
        }

        const updatedProduct = await productModel.findByIdAndUpdate(pid, {
            title: title || product.title,
            price: price || product.price,
            description: description || product.description,
            image: image || product.image
        }, { new: true });

        res.status(201).json(
            new ApiResponse(201, updatedProduct, "Product updated successfully")
        )
    } catch (error) {
        console.log(error)
        return next(new ApiError(501, "Failed to update products"));
    };
};

export const deleteProduct = async (req, res, next) => {
    const { pid } = req.params;
    if (!pid) {
        return next(new ApiError(204, "Please provide correct product id"))
    }
    try {
        await productModel.findByIdAndDelete(pid);
        res.status(201).json(
            new ApiResponse(200, "Product deleted successfully")
        )
    } catch (error) {
        console.log(error)
        return next(new ApiError(501, "Failed to delete product"));
    }
}