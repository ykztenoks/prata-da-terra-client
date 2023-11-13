import Image from "next/image";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="px-16 py-12 flex items-center justify-between w-[100%] bg-verde ">
      <section className="center flex-col">
        <Image
          width={300}
          height={200}
          layout="responsive"
          src="/images/logo-nobg.png"
          alt="logo"
          quality={100}
          className="image"
        />
        <span className="text-xs text-center">
          Copyright 2023 &copy; All rights reserved
        </span>
      </section>
      <section className="center gap-6">
        <a href="https://www.facebook.com/pratadterra/" target="_blank">
          <AiFillFacebook size={"4em"} />
        </a>
        <a href="https://www.instagram.com/pratadterra/" target="_blank">
          <AiFillInstagram size={"4em"} />
        </a>
      </section>
      <section className="border-l-2 border-[#83c236] border-solid pl-6">
        <h4>CONTATO</h4>
        <p>(47) 99107-8894 - Ana Terra</p>
        <p>(47) 99159-7074 - Daniela</p>
        <br />
        <p>pratadaterra@gmail.com</p>

        <p>Praia Brava - Itajaí/SC</p>
      </section>
    </footer>
  );
}
