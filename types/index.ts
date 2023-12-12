export type PriceHistoryItem = {
    price: number;
};

export type User = {
    email: string;
};

export type Product = {
    _id?: string;
    url: string;
    image: string;
    title: string;
    currentPrice: number;
    originalPrice: number;
    priceHistory: PriceHistoryItem[] | [];
    highestPrice: number;
    lowestPrice: number;
    users?: User[];
};

export type NotificationType =
    | "WELCOME"
    | "LOWEST_PRICE"

export type EmailContent = {
    subject: string;
    body: string;
};

export type EmailProductInfo = {
    title: string;
    url: string;
};