"use client";

import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import { useAuthContext } from "./authContext";
import { useRouter } from "next/navigation";
import api from "../lib/api";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const { userData } = useAuthContext();
  const router = useRouter();

  const updateCartDB = async () => {
    try {
      await api.put(`/carts/${cart._id}`, cart);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = (item) => {
    if (!userData) return router.push("/auth/login");
    cart
      ? cart.items.find((element) => element._id === item._id)
        ? increaseQuantity(item)
        : setCart((prev) => ({
            ...prev,
            items: [...prev.items, { ...item, quantity: 1 }],
          }))
      : setCart([{ ...item, quantity: 1 }]);
  };

  const removeItem = (item) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((element) => element._id !== item._id),
    }));
  };

  const increaseQuantity = (item) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((element) => {
        return element._id === item._id
          ? { ...element, quantity: (element.quantity += 1) }
          : element;
      }),
    }));
  };

  const decreaseQuantity = (item) => {
    const product = cart.items.find((element) => element._id === item._id);
    product && product.quantity === 1
      ? removeItem(item)
      : setCart((prev) => ({
          ...prev,
          items: prev.items.map((element) => {
            if (element._id === item._id) element.quantity -= 1;
            return element;
          }),
        }));
  };

  useEffect(() => {
    async function fetchUserCart() {
      try {
        const response = await api.get(`/carts/${userData._id}`);
        if (!response.data) {
          setCart(null);
          return;
        }
        setCart(response.data);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    userData && fetchUserCart();
  }, [userData]);

  useEffect(() => {
    console.log(cart);
    cart && updateCartDB();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("context must be used inside a provider");
  }
  return context;
}
