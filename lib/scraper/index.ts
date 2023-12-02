import axios from 'axios'
import * as cheerio from 'cheerio';

export async function scrapeSheinProduct(url: string) {
    if (!url) return;

    // BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id = (1000000 * Math.random()) | 0;

    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    try {
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        const image = $('div.crop-image-container').attr('data-before-crop-src');
        const title = $('h1.product-intro__head-name').text().trim() || $('h1.product-intro__head-name.title-line-camp').text().trim();
        const originalPrice = $('div.original.from').text().trim();
        const currentPrice = $('div.original.from').text().trim();
        // const reviews = $('div.discount.from').text().trim();
        // const currentPrice
        // const originalPrice
        // const lowestPrice
        // const averagePrice
        // const highestPrice
        // const description = $('div.product-intro__description-table').text().trim()

        const data = {
            url,
            image: image,
            title,
            originalPrice,
            currentPrice,
            // reviews,
            // currentPrice
            // originalPrice
            // lowestPrice
            // averagePrice
            // highestPrice
            // priceHistory: [],
            // description,
        }

        console.log(data);
        return data;

    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}