"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();

    const goToMainPage = () => {
        router.push('/')
    }
    return (
        <div className="space-y-8">
            <section id="intro" className="p-6 bg-gray-100 rounded shadow-md flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-700 text-center">What is PriceTracker?</h1>
                <p className="mt-2 text-gray-600 text-center text-xl font-semibold leading-relaxed">PriceTracker is a application that keeps track any Shein.com product and notifies you when the price gets lowered.</p>
                <button onClick={goToMainPage} className='mt-8 px-4 py-2 mx-auto block text-white bg-orange-500 rounded hover:bg-orange-700'>
                    Go To Main Page
                </button>
            </section>

            <section id="feature" className="p-6 bg-gray-100 rounded shadow-md">
                <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">Features</h1>
                <hr className="border-t border-gray-400 mt-4 mb-4" />

                <div className='flex items-center mb-4'>
                    <img src='/assets/images/1.png' className="w-1/2 rounded-lg shadow" />
                    <div className='ml-4 justify-center'>
                        <p className='ml-40 text-2xl font-medium text-gray-700'>1. Enter the shein URL</p>
                    </div>
                </div>
                <hr className="border-t border-gray-400 mt-4 mb-4" />
                <div className='flex items-center mb-4'>
                    <img src='/assets/images/2.png' className="w-1/2 rounded-lg shadow" />
                    <div>
                        <p className='ml-40 text-2xl font-medium text-gray-700 justify-center'>2. Insert your personal Gmail</p>
                    </div>
                </div>
                <hr className="border-t border-gray-400 mt-4 mb-4" />
                <div className='flex items-center mb-4 justify-center' >
                    <img src='/assets/images/3.png' className="w-1/4 rounded-lg shadow" />
                    <div className='ml-24 justify-center'>
                        <p className='ml-4 text-2xl text-center font-medium text-gray-700'>3. Receive confirmation email</p>
                    </div>
                </div>
            </section>

            <section id="about" className="p-6 bg-gray-100 rounded shadow-md">
                <h1 className="text-2xl font-bold text-gray-700 text-center">About Us</h1>
                <p className="mt-2 text-gray-600 text-center">This project is a Portfolio project for Holberton School. This is web scraping project that was born outhttps://github.com/figue0122
                    of a common frustration: the hassle of manually monitoring price changes online.
                    Recognizing the need for a more efficient solution, we embarked
                    on this project to automate price tracking and notification processes when prices drop.</p>

                <h2 className="mt-4 text-xl font-bold text-gray-700 text-center">Our Team</h2>
                <ul className="mt-2 space-y-2 text-center">
                    <li className="text-gray-600">Jose Jose Rivera Maldonado <a href='https://www.linkedin.com/in/jose-rivera-98654b240/' className='text-blue-700 hover:text-blue-900 underline'>LinkedIn</a> <a href='https://github.com/jGohan-cpu' className='text-blue-700 hover:text-blue-900 underline'>Github</a></li>
                    <li className="text-gray-600">Miguel Figuerroa Weir <a href='https://www.linkedin.com/in/miguel-figueroapr/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='text-blue-700 hover:text-blue-900 underline'>LinkedIn</a> <a href='https://github.com/figue0122' className='text-blue-700 hover:text-blue-900 underline'>Github</a></li>
                    <li className="text-gray-600">Kelvin Abdiel Santana Collazo <a href='https://www.linkedin.com/in/kelvinsantana19/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='text-blue-700 hover:text-blue-900 underline'>LinkedIn</a> <a href='https://github.com/santacoll19' className='text-blue-700 hover:text-blue-900 underline'>Github</a></li>
                    <li className="text-gray-600">Neischaly Cristal Ruidiaz Cosme <a href='http://linkedin.com/in/neischaly-r-c' className='text-blue-700 hover:text-blue-900 underline'>LinkedIn</a> <a href='https://github.com/neisnei' className='text-blue-700 hover:text-blue-900 underline'>Github</a></li>
                </ul>
                <div className='mt-12 text-center'>
                    <a href="https://github.com/jGohan-cpu/next-react_web_scraping"
                        className="text-2xl text-blue-700 hover:text-blue-900 underline"
                        target="_blank"
                        rel="noopener noreferrer">
                        View the project on GitHub
                    </a>
                </div>
            </section>

        </div >
    )
}

export default Page;