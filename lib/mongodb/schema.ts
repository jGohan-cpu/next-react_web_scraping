import mongoose from "mongoose";

// Schema
const productSchema = new mongoose.Schema({
    url: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    originalPrice: { type: String, required: true },
    currentPrice: { type: String, required: true },
}, { versionKey: false })

//Model
const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product;