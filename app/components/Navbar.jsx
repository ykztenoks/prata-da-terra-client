"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "../../context/authContext";
import { useEffect, useState } from "react";
import DarkModeButton from "./DarkMode";
import { SlMagnifier } from "react-icons/sl";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
const Navbar = () => {
  const { token, userData } = useAuthContext();
  const [mounted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);
  if (!mounted) return null;
  return (
    <nav className="min-w-screen flex flex-col shadow-slate-800  drop-shadow-md mb-20">
      <div className="flex justify-evenly items-center w-full">
        <div className="image-container">
          <Link href="/">
            <Image
              width={300}
              height={200}
              layout="responsive"
              src="/images/logo-nobg.png"
              alt="logo"
              quality={100}
              className="image"
            />
          </Link>
        </div>
        <div className="w-1/3 ">
          <div className="flex w-auto gap-4 justify-center">
            <SlMagnifier />
            <input
              type="text"
              className="bg-transparent mb-4 border-b-[1.4px]  focus:border-none text-center h-6"
              maxLength={36}
            />
          </div>
          <ul className="center gap-4">
            <Link href="/">
              <li>HOME</li>
            </Link>
            <Link href="/catalogo">
              <li>CATÁLOGO</li>
            </Link>
            <Link href="/sobre">
              <li>SOBRE</li>
            </Link>
          </ul>
        </div>
        <div className=" w-auto center">
          <Link href={token ? "/profile" : "/auth/login"} className="center">
            <AiOutlineUser size={28} className="ml-12" />
          </Link>
          <Link href="/cart" className="center">
            <AiOutlineShoppingCart size={28} className="ml-12" />
          </Link>
          <Link href={"/profile/favorites"} className="center">
            <AiOutlineHeart size={28} className="ml-12" />
          </Link>
          <DarkModeButton />
        </div>
      </div>
      <div
        id="nav-products"
        className="bg-[#75B12C] flex justify-center items-center "
      >
        <ul className="flex flex-row gap-4 justify-center items-center h-11 w-0 invisible md:visible md:w-auto">
          {userData?.role !== "ADMIN" ? (
            <>
              <Link href="/catalogo/aneis">
                <li>ANEIS</li>
              </Link>
              <Link href="/catalogo/berloques">
                <li>BERLOQUES</li>
              </Link>
              <Link href="/catalogo/braceletes">
                <li>BRACELETES</li>
              </Link>
              <Link href="/catalogo/brincos">
                <li>BRINCOS</li>
              </Link>
              <Link href="/catalogo/colares">
                <li>COLARES</li>
              </Link>
              <Link href="/catalogo/correntes">
                <li>CORRENTES</li>
              </Link>
              <Link href="/catalogo/pingentes">
                <li>PINGENTES</li>
              </Link>
              <Link href="/catalogo/piercings">
                <li>PIERCINGS</li>
              </Link>
              <Link href="/catalogo/pulseiras">
                <li>PULSEIRAS</li>
              </Link>
              <Link href="/catalogo/tornozeleiras">
                <li>TORNOZELEIRAS</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/admin/products/create">
                <li> Criar produtos</li>
              </Link>
              <Link href="/catalogo">
                <li> Ver produtos</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
