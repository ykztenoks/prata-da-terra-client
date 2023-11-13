import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { AuthProvider } from "../context/authContext";
import { CartProvider } from "../context/cartContext";

import Navbar from "../components/Navbar";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prata da terra",
  description: "",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar />

            <Suspense fallback={<Loading />}>{children}</Suspense>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
