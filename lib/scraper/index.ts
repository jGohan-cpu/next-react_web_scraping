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

        //original price trasnformation
        const originalPriceText = $('del.del-price').text().trim() || $('div.original.from').text().trim() || $('div.discount.from').text().trim();
        const originalPrice = Number(parseFloat(originalPriceText.replace('$', '')).toFixed(2));

        //current price trasnformation
        const currentPriceText = $('div.discount.from').text().trim() || $('div.original.from').text().trim();
        const currentPrice = Number(parseFloat(currentPriceText.replace('$', '')).toFixed(2));

        const data = {
            url,
            image: image || '',
            title,
            originalPrice,
            currentPrice,
            lowestPrice: currentPrice,
            highestPrice: currentPrice,
            priceHistory: []
        }

        console.log(data);
        return data;

    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}