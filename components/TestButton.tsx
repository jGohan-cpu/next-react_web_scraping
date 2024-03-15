"use client"

import { connectToDB } from '@/lib/mongodb/mongoose';
import Product from '@/lib/mongodb/schema';
import React from 'react'

type TestButtonProps = {
    id: string;
}

const TestButton: React.FC<TestButtonProps> = ({ id }) => {
    const handleClick = async () => {

        // Connect to DB
        connectToDB()

        // Find product
        const product = await Product.findOne({ id });

        // window.alert(`Button with id ${id} clicked!`);
        // console.log(product)
    }

    return (
        <button onClick={handleClick}>
            Test
        </button>
    )
}

export default TestButton