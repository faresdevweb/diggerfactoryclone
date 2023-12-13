import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-black text-white p-3 ">
      <div className="flex justify-center items-center gap-8">
        <h1 className="text-2xl font-bold">Digger Factory</h1>
        <Link href="/shop" className="text-xl">
          Shop
        </Link>
        <Link href="/service" className="text-xl">
          Nos Services
        </Link>
        <Link href="/vinyl-box" className="text-xl">
          La box vinyle
        </Link>
        <Link href="/" className="text-xl">
          FAQ
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8">
        <Link
          href="/"
          className="text-xl border border-gray-500 py-2 px-5 rounded-full"
        >
          Créer votre projet
        </Link>
        <Link href="/" className="text-xl">
          <CiHeart className="text-xl cursor-pointer" />
        </Link>
        <Link href="/" className="text-xl">
          <FiShoppingCart className="text-xl cursor-pointer" />
        </Link>
        <Link href="/" className="text-xl">
          <CgProfile className="text-xl cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
