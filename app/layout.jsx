import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { AuthProvider } from "../context/authContext";
import { CartProvider } from "../context/cartContext";
import ThemeProvider from "./components/themeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./loading";
import { BsWhatsapp } from "react-icons/bs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prata da terra",
  description: "",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <a
                href="https://wa.me/5547991597074?text=Ol%C3%A1%21+Gostaria+de+ajuda+com+um+produto"
                target="_blank"
                className="sticky inline-block bottom-5 left-[95%] z-10 w-11"
              >
                {" "}
                <BsWhatsapp size={"2em"} />
              </a>

              <Footer />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
