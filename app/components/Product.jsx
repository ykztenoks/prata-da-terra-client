"use client";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "../../context/cartContext";
import { useAuthContext } from "../../context/authContext";
export default function Product({ product }) {
  const {
    cart,
    setCart,
    increaseQuantity,
    decreaseQuantity,
    addItem,
    removeItem,
  } = useCartContext();
  const { userData } = useAuthContext();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center justify-between">
      <Link href={`/catalogo/${product.type}/${product._id}`}>
        <Image
          width={50}
          height={50}
          loading="lazy"
          unoptimized="true"
          className="w-72 h-96 hover:scale-110 transition ease-in-out duration-700 object-cover"
          src={product.images[0]}
          alt="product image"
        />
      </Link>
      <div className="px-6 py-4 pt-6">
        <Link href={`/catalogo/${product.type}/${product._id}`}>
          <div className="font-bold text-xl mb-2 text-center">
            {product.name}
          </div>
        </Link>
        <p className="text-gray-700 text-base text-center">
          <span>R$</span>
          {product.price.toFixed(2)}
        </p>
      </div>
      <div className="text-center   w-full bg-verde center btn-hover ">
        {userData && userData.role === "ADMIN" ? (
          <Link href={`/admin/products/editar/${product._id}`}>
            {" "}
            Editar produto{" "}
          </Link>
        ) : cart &&
          cart.items &&
          cart.items.find((item) => item._id === product._id) ? (
          <div>
            <button
              onClick={() => {
                decreaseQuantity(product);
              }}
            >
              -
            </button>
            <span>
              {cart?.items.find((item) => item._id === product._id).quantity}
            </span>
            <button
              onClick={() => {
                increaseQuantity(product);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="  rounded-sm   text-sm font-semibold text-gray-700 py-3 "
            onClick={() => addItem(product)}
          >
            adicionar ao carrinho
          </button>
        )}
      </div>
    </div>
  );
}
