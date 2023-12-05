import Image from "next/image"
import Searchbar from "@/components/Searchbar"
import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"

const Home = async () => {

  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="orange">
              Search Section
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </h2>

            <h1 className="head-text">
              Unleash the Power of
              <span className="orange-gradient"> PriceTracker</span>
            </h1>

            <p className="mt-6">
              Enter a Shein URL below to keep track of price changes to
              get notified and save money
            </p>

            <Searchbar />
          </div>

          <Image
            src="/assets/images/hero-1.png"
            alt="shein-logo"
            width={600}
            height={600}
            className="rounded-image"
          />

        </div >
      </section >

      <hr className="border border-gray-350" />

      <section className="trending-section">
        <h2 className="section-text short-gradient"><span className="short-gradient">Trending Section</span></h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section >
    </>
  )
}

export default Home