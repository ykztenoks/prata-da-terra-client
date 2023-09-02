import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Suspense } from "react";
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
        <Navbar />

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
