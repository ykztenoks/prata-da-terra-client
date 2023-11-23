"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "../../../../lib/api";
import { useAuthContext } from "../../../../context/authContext";
import { useCartContext } from "../../../../context/cartContext";
export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const { userData } = useAuthContext();
  const { cart, addItem, decreaseQuantity, increaseQuantity } =
    useCartContext();
  useEffect(() => {
    async function getProduct() {
      try {
        const res = await api.get(`/products/${params.id}`);
        setProduct(res.data);
        setSelectedImg(res.data.images[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [params]);
  console.log(product);

  return (
    product && (
      <main className="min-h-[90vh] center flex-col lg:flex-row">
        <section className="center w-screen flex-col lg:flex-row">
          <div className="center w-3/4 flex-col-reverse lg:flex-row ">
            <div className="lg:w-1/3 grid lg:grid-cols-1 grid-cols-4 mb-12  lg:mb-0  p-6 gap-4">
              {product.images &&
                product.images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt=""
                    width={100}
                    height={100}
                    onClick={() => setSelectedImg(src)}
                    unoptimized="true"
                    loading="lazy"
                    className="object-cover w-full h-full my-6 hover:scale-105 transition-all "
                  />
                ))}
            </div>
            <div className="w-full lg:p-12 center ">
              <Image
                src={selectedImg}
                alt=""
                width={100}
                height={100}
                unoptimized="true"
                loading="lazy"
                className="object-contain w-full"
              />
            </div>
          </div>
          <div className="center flex-col gap-6 w-3/4 lg:w-2/4 lg:mr-11 text-center">
            <h2 className="text-3xl">{product.name}</h2>
            <p>{product.description}</p>
            <span className="border-b-2 solid w-full text-center pb-6">
              R$ {product.price.toFixed(2)}
            </span>

            <span className="border-b-2 solid w-full text-center pb-6">
              ⭐⭐⭐⭐⭐ AVALIAÇÕES{" "}
            </span>
            <hr />
            <div className="lg:w-full center ">
              {userData && userData.role === "ADMIN" ? (
                <Link href={`/admin/products/editar/${product._id}`}>
                  <button className="bg-verde w-[100%] p-2 rounded-sm">
                    Oi! Quer editar esse produto?
                  </button>
                </Link>
              ) : cart &&
                cart.items &&
                cart.items.find((item) => item._id === product._id) ? (
                <div className="w-full flex justify-between ">
                  <button
                    className=" bg-verde w-8"
                    onClick={() => {
                      decreaseQuantity(product);
                    }}
                  >
                    -
                  </button>
                  <span className="text-2xl">
                    {
                      cart?.items.find((item) => item._id === product._id)
                        .quantity
                    }
                  </span>
                  <button
                    className=" bg-verde w-8"
                    onClick={() => {
                      increaseQuantity(product);
                    }}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="  rounded-sm   text-sm font-semibold  py-3 bg-verde w-full"
                  onClick={() => addItem(product)}
                >
                  adicionar ao carrinho
                </button>
              )}
            </div>
            <label htmlFor="frete" className="font-bold mr-4 text-start">
              CALCULAR FRETE
            </label>
            <div>
              <input type="text" name="frete" />
              <button>CONSULTAR</button>
            </div>
          </div>
        </section>
        <section></section>
      </main>
      // <section className="overflow-hidden  py-11 font-poppins ">
      //   <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      //     <div className="flex flex-wrap -mx-4">
      //       <div className="w-full px-4 md:w-1/2 ">
      //         <div className="sticky top-0 z-50 overflow-hidden ">
      //           <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
      //             <Image
      //               src={product.images[0]}
      //               alt=""
      //               width={100}
      //               height={100}
      //               unoptimized="true"
      //               loading="lazy"
      //               className="object-cover w-full lg:h-full "
      //             />
      //           </div>
      //         </div>
      //       </div>
      //       <div className="w-full px-4 md:w-1/2 ">
      //         <div className="lg:pl-20">
      //           <div className="mb-8 ">
      //             <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">
      //               {product.name}
      //             </h2>

      //             <p className="max-w-md mb-8  ">{product.description}</p>
      //             <p className="inline-block mb-8 text-4xl font-bold  ">
      //               <span>R${product.price.toFixed(2)}</span>

      //               {/* if discount */}
      //               {/* <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
      //                 $1500.99
      //               </span> */}
      //             </p>
      //             {product.inStock ? (
      //               <p className="text-verde  ">Em estoque</p>
      //             ) : (
      //               <p className="text-red-400  ">Sem estoque ):</p>
      //             )}
      //           </div>

      //           <div className="flex items-center mb-8">
      //             <h2 className="w-16 text-xl font-bold ">Size:</h2>

      //             {product.size}
      //           </div>
      //           <div className="w-32 mb-8 ">
      //             <label htmlFor="" className="w-full text-xl font-semibold ">
      //               Quantity
      //             </label>
      //             <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
      //               <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer ">
      //                 <span className="m-auto text-2xl font-thin">-</span>
      //               </button>
      //               <input
      //                 type="number"
      //                 className="flex items-center w-full font-semibold text-center   outline-none  focus:outline-none text-md hover:text-black"
      //                 placeholder="1"
      //               />
      //               <button className="w-20 h-full  rounded-r outline-none cursor-pointer ">
      //                 <span className="m-auto text-2xl font-thin">+</span>
      //               </button>
      //             </div>
      //           </div>
      //           <div className="flex flex-wrap items-center -mx-4 ">
      //             <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
      //               <button className="flex items-center justify-center w-full p-4  border  rounded-md ">
      //                 Add to Cart
      //               </button>
      //             </div>
      //             <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
      //               <button className="flex items-center justify-center w-full p-4  border  rounded-md ">
      //                 Add to wishlist
      //               </button>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    )
  );
}
