import mongoose from "mongoose";

// Schema
const productSchema = new mongoose.Schema({
    url: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    currentPrice: { type: Number, required: true },
    lowestPrice: { type: Number, required: true },
    highestPrice: { type: Number, required: true },
    priceHistory: [
        {
            price: { type: Number, required: true },
            date: { type: Date, required: true },
        },
    ],
    users: [
        { email: { type: String, required: true } }
    ], default: [],
}, { timestamps: true })

//Model
const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product;