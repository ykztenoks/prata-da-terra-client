import Carousel from "./components/Carousel";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="center flex-col mb-20 ">
        <h1 className="text-2xl lg:text-6xl font-extralight text-center mb-20">
          <span className="text-verde font-normal">ADORNANDO E ILUMINANDO</span>{" "}
          <br />
          PESSOAS COM JOIAS DE PRATA
        </h1>
        <Carousel />
      </main>
      <section className="center gap-8 h-[85vh] ">
        <Image
          src="/images/aneis.jpg"
          height={100}
          width={100}
          alt="carousel item"
          className="w-1/3 h-[50vh] object-cover block"
          unoptimized="true"
        />
        <div className="center flex-col gap-6 w-1/3">
          <h3 className="text-2xl lg:text-4xl text-center font-extralight">
            <span>NOVA</span> <br /> COLEÇÃO
          </h3>
          <Link
            href="/catalogo"
            className="bg-verde rounded-sm h-9 flex items-center w-1/2 justify-center"
          >
            <span className=" text-center font-bold  ">VENHA CONFERIR</span>
          </Link>
        </div>
      </section>
    </>
  );
}
