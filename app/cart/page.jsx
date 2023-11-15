"use client";
import { useCartContext } from "../../context/cartContext";
import CartItems from "../components/CartItems";
export default function Cart() {
  const { cart, setCart, removeItem, increaseQuantity, decreaseQuantity } =
    useCartContext();

  return cart && cart.items.length ? (
    <div className="flex justify-center w-screen  mt-28">
      <div className="center  ">
        <table>
          <thead className="center w-[100%]">
            <tr className="w-[100%]">
              <th className="w-72 ">Pedido</th>
            </tr>
            <tr>
              <th className="w-40">Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody className="w-[100%]">
            {cart.items.map((product, i) => (
              <CartItems
                key={i}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                image={product.image}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="center flex-col">
        <h3>Resumo do pedido</h3>
        <div>
          <span>subtotal</span>
          <span>
            {cart.items.reduce((acc, product) => acc + product.price, 0)}
          </span>
        </div>
        <div>
          <input type="text" name="discount" />
          <button>resgatar</button>
        </div>

        <div className="center flex-col">
          <span>total</span>
          <span>
            {cart.items.reduce((acc, product) => acc + product.price, 0)}
          </span>
          <button>finalizar</button>
          <button>continuar comprando</button>
        </div>
      </div> */}

      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 sticky top-0">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
    </div>
  ) : (
    <h1>seu carrinho está vazio</h1>
  );
}
