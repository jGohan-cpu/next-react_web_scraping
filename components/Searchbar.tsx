"use client"

import { FormEvent, useState } from 'react'
import { scrapeAndStoreProduct } from '@/lib/actions';

const isValidSheinProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if (
            hostname.includes('shein.com') ||
            hostname.includes('shein.') ||
            hostname.endsWith('shein') ||
            hostname.includes('127')
        ) {
            return true;
        }
    } catch (error) {
        return false;
    }

    return false;
}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidSheinProductURL(searchPrompt);

        if (!isValidLink) return alert('Please provide a valid Shein link')

        try {
            setIsLoading(true);

            // Scrape the product page
            const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form
            className="flex flex-wrap gap-4 mt-12"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder="Enter product link"
                className="searchbar-input focus:border-black border border-gray-300"
            />

            <button
                type="submit"
                className="searchbar-btn"
                disabled={searchPrompt === ''}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}

export default Searchbar