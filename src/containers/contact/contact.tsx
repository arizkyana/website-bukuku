import Link from 'next/link';
import { FC } from 'react';
import { Phone, Instagram, Mail } from 'react-feather';

const Contact: FC = () => {
  return (
    <div className="font-bold pt-14 min-h-screen">
      <div className="max-w-6xl mx-auto pt-16">
        <div className="text-sm breadcrumbs mb-5">
          <ul>
            <li className="font-semibold text-slate-700">
              <Link href="/">Beranda</Link>
            </li>
            <li>Kontak</li>
          </ul>
        </div>
        <h2 className="text-3xl text-left mb-5 font-bold text-cyan-500">
          Kontak
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex justify-start items-center gap-2">
            <span className="block">
              <Phone />
            </span>
            <span className="font-bold">081285748510</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="block">
              <Instagram />
            </span>
            <span className="font-bold">bukuku.club</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="block">
              <Instagram />
            </span>
            <span className="font-bold">katalogbukuku.club</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="block">
              <Mail />
            </span>
            <span className="font-bold">kontakbukuku@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
