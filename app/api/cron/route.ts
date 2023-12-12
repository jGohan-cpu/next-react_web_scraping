import { getHighestPrice, getLowestPrice } from "@/lib/actions/utils";
import { connectToDB } from "@/lib/mongodb/mongoose";
import Product from "@/lib/mongodb/schema";
import { generateEmailBody, sendEmail } from "@/lib/nodemailer";
import { getEmailNotifType } from "@/lib/nodemailer/utils";
import { scrapeSheinProduct } from "@/lib/scraper";
import { NextResponse } from "next/server";

export const maxDuration = 300;
export const dynamic = 'force-dynamic'
export const revalidate = 0;

export async function GET() {
    try {
        connectToDB();

        const products = await Product.find({});

        if (!products) throw new Error("No products found");

        const updatedProducts = await Promise.all(
            products.map(async (currentProduct) => {
                const scrapedProduct = await scrapeSheinProduct(currentProduct.url);

                if (!scrapedProduct) throw new Error("No product found");
                const updatedPriceHistory: any = [
                    ...currentProduct.priceHistory,
                    { price: scrapedProduct.originalPrice }
                ]

                const product = {
                    ...scrapedProduct,
                    priceHistory: updatedPriceHistory,
                    lowestPrice: getLowestPrice(updatedPriceHistory),
                    highestPrice: getHighestPrice(updatedPriceHistory),
                }

                const updatedProduct = await Product.findOneAndUpdate(
                    { url: scrapedProduct.url },
                    product,
                );

                //Check each product status and send email accordingly

                const emailNotifType = getEmailNotifType(scrapedProduct, currentProduct);

                if (emailNotifType && updatedProduct.users.lenght > 0) {
                    const productInfo = {
                        title: updatedProduct.title,
                        url: updatedProduct.url
                    }

                    const emailContent = await generateEmailBody(productInfo, emailNotifType);

                    const userEmails = updatedProduct.users.map((user: any) => user.email)

                    await sendEmail(emailContent, userEmails);
                }

                return updatedProduct;
            })
        )

        return NextResponse.json({
            message: 'Ok', data: updatedProducts
        })
    } catch (error) {
        console.log(error)
    }
}