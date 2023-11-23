"use client";
import { useCartContext } from "../../context/cartContext";
import CartItems from "../components/CartItems";
import { useState, useEffect } from "react";
export default function Cart() {
  const { cart, setCart, removeItem, increaseQuantity, decreaseQuantity } =
    useCartContext();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    cart &&
      cart.items.length &&
      setPrice(
        cart.items.reduce((acc, product) => {
          return (acc += product.price);
        }, 0)
      );
  }, [cart]);

  useEffect(() => {
    console.log(price);
  }, [price]);

  return cart && cart.items.length ? (
    <div className="flex justify-center items-center lg:items-baseline w-screen lg:flex-row flex-col  mt-28 gap-6 min-h-screen">
      <div class="relative overflow-x-auto lg:w-2/5">
        <table class="w-full text-sm text-left rtl:text-right ">
          <thead class="text-xs  uppercase  border-b  ">
            <tr>
              <th scope="col" class="px-6 py-3">
                PRODUTO
              </th>
              <th scope="col" class="px-6 py-3">
                QUANTIDADE
              </th>

              <th scope="col" class="px-6 py-3">
                PREÇO
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((product, i) => (
              <tr class=" border-b  " key={i}>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {product.name}
                </th>

                <td class="px-6 py-4">
                  {cart &&
                    cart.items &&
                    cart.items.find((item) => item._id === product._id) && (
                      <div className="flex justify-between w-16">
                        <button
                          className="bg-verde w-4"
                          onClick={() => {
                            decreaseQuantity(product);
                          }}
                        >
                          -
                        </button>
                        <span>
                          {
                            cart?.items.find((item) => item._id === product._id)
                              .quantity
                          }
                        </span>
                        <button
                          className="bg-verde w-4"
                          onClick={() => {
                            increaseQuantity(product);
                          }}
                        >
                          +
                        </button>
                      </div>
                    )}
                </td>
                <td class="px-6 py-4">{product.price}</td>
              </tr>
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
      <div className="w-1/5">
        <h3 className="border-b">RESUMO DO PEDIDO</h3>
        <div>
          <span>Subtotal</span>
          <span>R$ {price.toFixed(2)}</span>
        </div>
        <div>
          <input type="text" placeholder="CUPOM" />
          <button className="bg-verde">RESGATAR</button>
        </div>
        <div>
          <span>TOTAL</span>
          <span>R$ {price.toFixed(2)}</span>
        </div>
        <button>FINALIZAR</button>
        <button>CONTINUAR COMPRANDO</button>
      </div>
    </div>
  ) : (
    <h1>seu carrinho está vazio</h1>
  );
}
