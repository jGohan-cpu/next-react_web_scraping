import React from 'react'
import Image from 'next/image';
import { Product } from '@/types';
import Link from 'next/link';

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {

    const imageUrl = product?.image?.startsWith('//') ? `https:${product.image}` : product.image;
    const title = product.title.length > 25 ? product.title.substring(0, 25) + "..." : product.title;

    return (
        <Link href={`/products/${product._id}`}>
            <div className="product-card_img-container hover-effect rounded-image">
                <Image
                    src={imageUrl}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-image"
                />
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="product-title">{title}</h3>
                <div className="flex justify-between">
                    <p className="text-black opacity-50 text-lg capitalize">
                        {product.category}
                    </p>
                    <p>
                        <span>{product.originalPrice}</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard