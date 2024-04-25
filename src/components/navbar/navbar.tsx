import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AlignJustify } from 'react-feather';

const NavbarMobile: FC = () => {
  return (
    <div className="lg:hidden block flex-1 drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex justify-end items-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="">
          <AlignJustify />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
          <li className="hover:text-orange-500">
            <Link href="/">Beranda</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link href="/products">Produk</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link href="/catalogs">Katalog</Link>
          </li>
          <li className="hover:text-orange-500">
            <a href="#programs">Program</a>
          </li>
          <li className="hover:text-orange-500">
            <Link href="/contact">Kontak</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto py-4 flex justify-between items-center px-3 lg:px-0">
        <div className="flex-1">
          <Link href="/">
            <Image
              alt="logo"
              src="/images/logo.png"
              className="block w-[45px] h-[45px] object-cover"
              width={300}
              height={300}
            />
          </Link>
        </div>
        <div className="flex-1 lg:flex justify-end items-center hidden">
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
              <a href="/#program">Program</a>
            </li>
            <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
              <Link href="/contact">Kontak</Link>
            </li>
          </ul>
        </div>
        <NavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;
