import Image from 'next/image';
import { FC } from 'react';
import { Instagram } from 'react-feather';

const Footer: FC = () => {
  return (
    <footer className="bg-cyan-500 h-min w-full">
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-2">
          <div>
            <Image
              alt="logo-footer"
              src="/images/cta.png"
              width={300}
              height={300}
              className="w-[5rem] h-[5rem] object-cover block mb-3"
            />
            <ul className="inline-flex flex-col gap-2 text-white font-semibold">
              <li className="hover:text-orange-500">
                <a href="">Beranda</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="">Produk</a>
              </li>
              {/* <li className="hover:text-orange-500">
                <a href="">Katalog</a>
              </li> */}
              <li className="hover:text-orange-500">
                <a href="">Program</a>
              </li>
              <li className="hover:text-orange-500">
                <a href="">Kontak</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-end gap-3">
            <h3 className="font-bold block text-white text-2xl">Follow Us</h3>
            <div className="text-white hover:text-orange-500">
              <a
                href="https://www.instagram.com/bukuku.club/"
                target="_blank"
                className="flex justify-end items-center gap-3 w-full"
              >
                <Instagram />
                <span className=" font-bold">bukuku.club</span>
              </a>
            </div>
            <div className="text-white hover:text-orange-500">
              <a
                href="https://www.instagram.com/katalogbukuku.club/"
                target="_blank"
                className="flex justify-end items-center gap-3 w-full"
              >
                <Instagram />
                <span className="font-bold">katalogbukuku.club</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-500">
        <div className="max-w-6xl mx-auto py-3 font-bold text-white text-center">
          Copyright © 2024 - All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
