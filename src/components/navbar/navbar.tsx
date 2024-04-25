import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            alt="logo"
            src="/images/logo.png"
            className="block w-[45px] h-[45px] object-cover"
            width={300}
            height={300}
          />
        </Link>
        <div>
          <ul className="inline-flex gap-3 justify-end items-center">
            <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
              <Link href="/">Beranda</Link>
            </li>
            <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
              <a href="#products">Produk</a>
            </li>
            <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
              <a href="#catalogs">Katalog</a>
            </li>
            <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
              <a href="#program">Program</a>
            </li>
            <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
              <Link href="/contact">Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
