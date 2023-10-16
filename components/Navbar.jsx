"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";

const Navbar = () => {
  const { token, userData } = useAuthContext();

  return (
    <nav className="min-w-screen flex flex-col bg-white shadow-slate-800  drop-shadow-md">
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
        <div className="">
          <div className="flex gap-2 justify-center">
            <Image
              src="/images/magnifier.png"
              alt="magnifier"
              width={100}
              height={100}
              quality={100}
              className="h-8 w-8"
            />
            <input
              type="text"
              className="bg-transparent border-b-[1.4px] border-black focus:border-none text-center h-6"
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
            <Image
              src="/images/user.png"
              alt="user icon"
              width={50}
              height={50}
              priority
              className="w-6 h-6 ml-16 object-contain "
            />
          </Link>
          <Link href="/cart" className="center">
            <Image
              src="/images/shopping-cart.png"
              alt="user icon"
              width={50}
              height={50}
              priority
              className="w-6 h-6 ml-16 object-contain "
            />
          </Link>
          <Link href={"/profile/favorites"} className="center">
            <Image
              src="/images/heart.png"
              alt="user icon"
              width={50}
              height={50}
              priority
              className="w-6 h-6 ml-16 object-contain "
            />
          </Link>
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
