import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="min-w-screen flex flex-col">
      <div className="center">
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
        <div className="gap-16">
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
      </div>
      <div id="nav-products" className="bg-[#75B12C]">
        <ul className="flex flex-row gap-4 justify-center items-center h-11">
          <Link href="/aneis">
            <li>ANEIS</li>
          </Link>
          <Link href="/berloques">
            <li>BERLOQUES</li>
          </Link>
          <Link href="/braceletes">
            <li>BRACELETES</li>
          </Link>
          <Link href="/brincos">
            <li>BRINCOS</li>
          </Link>
          <Link href="/colares">
            <li>COLARES</li>
          </Link>
          <Link href="/correntes">
            <li>CORRENTES</li>
          </Link>
          <Link href="/pingentes">
            <li>PINGENTES</li>
          </Link>
          <Link href="/piercings">
            <li>PIERCINGS</li>
          </Link>
          <Link href="/pulseiras">
            <li>PULSEIRAS</li>
          </Link>
          <Link href="/tornozeleiras">
            <li>TORNOZELEIRAS</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
