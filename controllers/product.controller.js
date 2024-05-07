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