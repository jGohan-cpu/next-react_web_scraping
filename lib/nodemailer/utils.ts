import { Product } from "@/types";
import { getLowestPrice } from "../actions/utils";

const Notification = {
    WELCOME: 'WELCOME',
    LOWEST_PRICE: 'LOWEST_PRICE',
}

export const getEmailNotifType = (
    scrapedProduct: Product,
    currentProduct: Product
) => {
    const lowestPrice = getLowestPrice(currentProduct.priceHistory);

    if (scrapedProduct.currentPrice < lowestPrice) {
        return Notification.LOWEST_PRICE as keyof typeof Notification;
    }

    return null;
};