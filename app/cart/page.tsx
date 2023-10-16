"use client";
import { useCartContext } from "../../context/cartContext";

export default function Cart() {
  const { cart, setCart, removeItem, increaseQuantity, decreaseQuantity } =
    useCartContext();
  console.log(cart);
  return cart && cart.items.length ? (
    <div>
      {cart.items.map((product) => (
        <h3 key={product._id}>{product.name}</h3>
      ))}
    </div>
  ) : (
    <h1>seu carrinho está vazio</h1>
  );
}
