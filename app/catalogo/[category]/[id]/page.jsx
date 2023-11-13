"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import api from "../../../../lib/api";

export default function ProductDetail({ params }) {
  console.log(params);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function getProduct() {
      try {
        const res = await api.get(`/products/${params.id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [params]);
  console.log(product);

  return (
    product && (
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <Image
                    src={product.images[0]}
                    alt=""
                    width={100}
                    height={100}
                    unoptimized="true"
                    loading="lazy"
                    className="object-cover w-full lg:h-full "
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {product.name}
                  </h2>

                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {product.description}
                  </p>
                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>R${product.price.toFixed(2)}</span>

                    {/* if discount */}
                    {/* <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                      $1500.99
                    </span> */}
                  </p>
                  {product.inStock ? (
                    <p className="text-verde dark:text-green-300 ">
                      Em estoque
                    </p>
                  ) : (
                    <p className="text-red-400 dark:text-green-300 ">
                      Sem estoque ):
                    </p>
                  )}
                </div>

                <div className="flex items-center mb-8">
                  <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                    Size:
                  </h2>

                  {product.size}
                </div>
                <div className="w-32 mb-8 ">
                  <label
                    htmlFor=""
                    className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                  >
                    Quantity
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Add to Cart
                    </button>
                  </div>
                  <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
