"use server"

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongodb/mongoose";
import Product from "../mongodb/schema";
import { scrapeSheinProduct } from "../scraper"

export async function scrapeAndStoreProduct(productUrl: string) {
    if (!productUrl) return;

    try {
        await connectToDB();
        const scrapedProduct = await scrapeSheinProduct(productUrl);

        if (!scrapedProduct) return;

        let product = scrapedProduct;

        const existingProduct = await Product.findOne({ url: scrapedProduct.url });

        if (existingProduct) {
            const updatedPriceHistory: any = [
                ...existingProduct.priceHistory,
                { price: scrapedProduct.originalPrice }
            ]

            product = {
                ...scrapedProduct,
                //priceHistory: updatedPriceHistory,
            }
        }

        const newProduct = await Product.findOneAndUpdate(
            { url: scrapedProduct.url },
            product,
            { upsert: true, new: true }
        );

        revalidatePath(`/products/${newProduct._id}`)

    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}


export async function getProductById(productId: string) {
    try {
        connectToDB();

        const product = await Product.findOne({ _id: productId });

        if (!product) return null;

        return product;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllProducts() {
    try {
        connectToDB();

        const products = await Product.find();

        return products;
    } catch (error) {
        console.log(error);
    }
}

export async function getSimilarProducts(productId: string) {
    try {
        connectToDB();

        const currentProducts = await Product.findById(productId);

        if (!currentProducts) return null;

        const similarProducts = await Product.find({
            id: { $ne: productId },
        }).limit(3);

        return similarProducts;

    } catch (error) {
        console.log(error);
    }
}