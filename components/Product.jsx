import Image from "next/image";

export default function Product({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center ">
      <Image
        width={50}
        height={50}
        quality={50}
        loading="lazy"
        unoptimized="true"
        className="w-72 hover:scale-110 transition ease-in-out duration-700 object-cover"
        src={product.image}
        alt="product image"
      />
      <div className="px-6 py-4 pt-6">
        <div className="font-bold text-xl mb-2 text-center">{product.name}</div>
        <p className="text-gray-700 text-base text-center">
          {product.description}
        </p>
      </div>
      <div className="px-6  pb-2 ">
        <button className="inline-block bg-verde rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {" "}
          adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
