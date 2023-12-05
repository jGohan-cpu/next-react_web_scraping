import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getProductById, getSimilarProducts } from '@/lib/actions'
import Link from 'next/link'
import PriceInfoCard from '@/components/PriceInfoCard'
import ProductCard from '@/components/ProductCard'
import Modal from '@/components/Modal'
import ShareButton from '@/components/ShareButton'

type Props = {
    params: {
        id: string
    }
}

const ProductDetails = async ({ params: { id } }: Props) => {

    const product = await getProductById(id)

    if (!product) redirect('/')

    const similarProducts = await getSimilarProducts(id)

    const imageUrl = product?.image?.startsWith('//') ? `https:${product.image}` : product.image;

    return (
        <div className="product-container">
            <div className="flex gap-28 xl:flew-row">
                <div className="product-image">
                    <Image
                        src={imageUrl}
                        alt={product.title}
                        width={580}
                        height={400}
                        className="mx-auto"
                    />
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
                        <div className="flex flex-col gap-3">
                            <p className="text-[28px] text-secondary font-semibold">
                                {product.title}
                            </p>

                            <Link
                                href={product.url}
                                target="_blank"
                                className="text-base text-black opacity-50">
                                Visit Product
                            </Link>

                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white-200 rounded-10">
                                    <ShareButton />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className="mb-4 px-64 border border-gray-350" />
                            <div className=" flex flex-col gap-2">
                                <p className="text-[34px] text-secondary font-bold">
                                    {product.currentPrice}
                                </p>
                                <p className="text-[21px] text-black opacity-50 line-though">
                                    {product.originalPrice}
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3">
                                </div>

                            </div>
                            <hr className="mt-4 px-64 border border-gray-350" />
                        </div>
                        <div className="my-7 flex flex-col gap-5">
                            <div className="flex gap-5 flex-wrap">
                                <PriceInfoCard
                                    title="Original Price"
                                    iconSrc="/assets/icons/price-tag.svg"
                                    value={product.originalPrice}
                                    borderColor="#b6dbff"
                                />
                                <PriceInfoCard
                                    title="Current Price"
                                    iconSrc="/assets/icons/chart.svg"
                                    value={`${product.currentPrice}`}
                                    borderColor="#b6dbff"
                                />
                                <PriceInfoCard
                                    title="Highest Price"
                                    iconSrc="/assets/icons/arrow-up.svg"
                                    value={`${product.price}`}
                                    borderColor="#b6dbff"
                                />
                                <PriceInfoCard
                                    title="Lowest Price"
                                    iconSrc="/assets/icons/arrow-down.svg"
                                    value={`${product.price}`}
                                    borderColor="#BEFFC5"
                                />
                            </div>
                        </div>
                        <Modal productId={id} />
                    </div>
                </div>
            </div>
            <hr className="border border-gray-350" />
            {similarProducts && similarProducts?.length > 0 && (
                <div className="py-14 flex flex-col gap-2 w-full">
                    <p className="section-text">
                        Trending Section
                    </p>
                    <div className="flex flex-wrap gap-10 mt-7 w-full">
                        {similarProducts.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default ProductDetails