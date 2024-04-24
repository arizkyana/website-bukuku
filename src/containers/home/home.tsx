import Image from 'next/image';

import { Instagram } from 'react-feather';
import Products from './elements/products';

const Home: React.FC = () => {
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
        <div className="max-w-6xl mx-auto py-4 flex justify-between items-center">
          <Image
            alt="logo"
            src="/images/logo.png"
            className="block w-[45px] h-[45px] object-cover"
            width={300}
            height={300}
          />
          <div>
            <ul className="inline-flex gap-3 justify-end items-center">
              <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
                <a href="">Beranda</a>
              </li>
              <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
                <a href="">Produk</a>
              </li>
              <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
                <a href="">Katalog</a>
              </li>
              <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
                <a href="">Program</a>
              </li>
              <li className="hover:border-b-2 hover:text-cyan-500 hover:font-bold border-cyan-500">
                <a href="">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main id="" className="pt-16">
        <section
          id="banner"
          className="h-[30rem] flex justify-start items-start"
        >
          <div className="bg-slate-300 h-full w-[60%]">
            <div className="w-full h-full flex justify-center items-center">
              <Image
                alt="banner"
                src="/images/banner.jpg"
                className="block w-full h-full object-cover"
                width={1440}
                height={45}
              />
            </div>
          </div>
          <div className="h-full w-[40%] bg-orange-400">
            <div className="w-full h-full p-6 flex flex-col justify-center gap-3 items-center">
              <Image
                alt="cta"
                src="/images/cta.png"
                className="block w-[10rem] h-[10rem] object-cover"
                width={300}
                height={300}
              />
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold">#Headline</h1>
                <h2 className="text-3xl">Sub Headline</h2>
              </div>
              {/* <button
                type="button"
                // className="bg-white px-3 py-2 text-green-600 rounded-lg"
                className="btn"
              >
                CTA Here
              </button> */}
            </div>
          </div>
        </section>
        <Products />
        <section id="catalog" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-5 font-bold text-cyan-500">
              Katalog
            </h2>
            <div className="w-full h-[15rem] grid grid-cols-4 gap-5 mb-5">
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="btn bg-transparent hover:bg-cyan-500 hover:text-white text-cyan-500 border-cyan-600 "
            >
              Lihat Semua Katalog
            </button>
          </div>
        </section>
        <section id="about-us" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-5 font-bold text-cyan-500">
              Tentang Kami
            </h2>
            <div className="w-full min-h-[30rem] gap-3 flex justify-start items-stretch">
              <div className="w-[40%]">
                <Image
                  alt="bubu"
                  src="/images/bubu.png"
                  width={1000}
                  height={1300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[60%] text-justify">
                <p>
                  Berawal dari komunitas kecil yang diberi nama Bukuku.Club,
                  yaitu sebuah komunitas yang mendorong dan memfasiltasi
                  anak-anak untuk berkarya dalam bentuk buku. Komunitas ini
                  berdiri sejak tahun 2016. Bermula dari dua foundernya Pipit
                  Dwia dan Nina Alni yang membukukan cerita dan gambar dari
                  anak-anaknya. Pipit dan Nina percaya bahwa setiap anak (paling
                  tidak sebagian besar anak-anak di dunia) pasti menggambar. Dan
                  ketika mereka sudah mulai bisa berbicara, pasti selalu ingin
                  berceloteh dan bercerita. Betapa berharganya kenangan masa
                  kecil yang tersimpan dalam setiap coretan dan celoteh anak.
                  Itulah yang menjadi percikan awal ide untuk membukukan gambar
                  dan cerita anak-anak. Buku-buku sederhana itu kemudian
                  menginspirasi banyak anak untuk ikut berkarya membuat buku
                  cerita bergambar. maka dibentuklah komunitas kecil. Dari
                  beberapa anak, hingga kemudian tersebar sampai di banyak kota
                  di Indonesia juga luar Indonesia. Hingga tahun 2024
                  Bukuku.Club telah menemani ratusan anak dan menerbitkan lebih
                  dari 800 judul buku karya mereka. Di tahun 2023 Komunitas ini
                  membentuk sebuah badan usaha untuk membuka peluang yang lebih
                  besar bagi siapa pun bisa berkarya. Badan usaha ini bergerak
                  di bidang penerbitan buku, produk edukasi, juga event workshop
                  dan pelatihan yang ditujukan untuk pengembangan literasi dan
                  semangat berkarya, khususnya bagi anak-anak.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="program" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-5 font-bold text-cyan-500">
              Program Buku
            </h2>
            <div className="w-full min-h-[30rem] gap-3 flex justify-start items-stretch">
              <div className="w-[60%]">
                <p className="mb-1 text-justify">
                  Adalah program yang dirancang untuk mendampingi anak-anak
                  menyusun cerita dan gambar menjadi sebuah buku yang dapat
                  diwujudkan dalam bentuk buku cetak dan buku elektronik
                  (eBook). Buku hasil karya ini juga bisa menjadi sarana untuk
                  anak-anak belajar mempublikasikan, menjual atau berbagi karya
                  dalam bentuk buku
                </p>
                <p className="mb-1 text-justify">
                  Program Bikin Buku terbagi atas dua, yaitu Program Mula Bikin
                  Buku dan Program Laju Bikin Buku Program Mula ditujukan untuk
                  anak-anak yang akan membuat karya buku pertamanya bersama
                  Bukuku.Club, sedangkan Program Laju ditujukan untuk
                  #kreatorbukukuclub, yaitu anak-anak yang sudah pernah membuat
                  buku bersama Bukuku.Club.
                </p>
                <div>
                  Jika sudah tergabung sebagai #kreatorbukukuclub, maka ada
                  beberapa hal seru yang bisa didapatkan, diantaranya:
                  <ul className="list-disc list-inside">
                    <li>Bisa mengikuti Program Laju Bikin Buku</li>
                    <li>Bisa ikut acara Kumpul Kreator dengan gratis</li>
                    <li>Bisa ikut pameran buku karya</li>
                    <li>
                      Bisa dilibatkan dalam berbagai acara (daring atau luring)
                      yang melibatkan Bukuku.Club di berbagai skala.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[40%]">
                <Image
                  alt="bubu"
                  src="/images/logo-program-buku.png"
                  width={1000}
                  height={1300}
                  className="w-full h-[80%] object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
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
                <li className="hover:text-orange-500">
                  <a href="">Katalog</a>
                </li>
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
            Copyright © 2021 - All Right Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
