import Image from 'next/image';
import classNames from 'classnames';

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
              <li>
                <a href="">Beranda</a>
              </li>
              <li>
                <a href="">Produk</a>
              </li>
              <li>
                <a href="">Katalog</a>
              </li>
              <li>
                <a href="">Program</a>
              </li>
              <li>
                <a href="">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main id="" className="pt-20">
        <section
          id="banner"
          className="h-[30rem] flex justify-start items-start"
        >
          <div className=" h-full w-[40%]">
            <div className="w-full h-full p-6 flex flex-col justify-center gap-3 items-center">
              <Image
                alt="cta"
                src="/images/cta.png"
                className="block w-[10rem] h-[10rem] object-cover"
                width={300}
                height={300}
              />
              <div className="text-center">
                <h1 className="text-5xl">#Headline</h1>
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
        </section>
        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-5">Produk</h2>
            <div className="w-full h-[25rem] grid grid-cols-3 gap-5 mb-5">
              {Array.from({ length: 3 }, (_, idx) => (
                <div className="bg-slate-300 relative rounded-lg" key={idx}>
                  <Image
                    alt="produk-1"
                    src="/images/produk-1.png"
                    className="w-full h-full object-cover rounded-lg"
                    width={600}
                    height={900}
                  />
                  <div
                    className={classNames(
                      'opacity-0 z-5 absolute border top-0 left-0 w-full h-full rounded-lg bg-white transition-all duration-300 ease-in-out',
                      { 'hover:opacity-100': true }
                    )}
                  >
                    <div className="flex gap-1 p-3 text-xs flex-col">
                      <span className="block font-bold">Nama Produk</span>
                      <span className="block">Cakep</span>
                    </div>
                    <div className="flex gap-1 p-3 text-xs flex-col">
                      <span className="block font-bold">Spesifikasi</span>
                      <span className="block">
                        Ukuran 20x15cm, softcover artpaper 260 gsm, 40 halaman
                      </span>
                    </div>
                    <div className="flex gap-1 p-3 text-xs flex-col">
                      <span className="block font-bold">Keterangan</span>
                      <span className="block">
                        Bukuku.Club berkolaborasi dengan Kataba Project
                        meluncurkan buku panduan membuat pantun pertama di
                        Indonesia yang ditujukan untuk anak-anak. Disusun secara
                        menarik, penuh warna, dan interaktif. Dilengkapi dengan
                        contoh pantun asli buatan anak-anak yang belajar bersama
                        menggunakan materi dari buku ini.
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn z-10 absolute bottom-10 left-[7rem] text-white btn-success "
                  >
                    Pesan Sekarang
                  </button>
                </div>
              ))}
            </div>
            {/* <div className="w-full h-[10rem] grid grid-cols-4 gap-5">
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
            </div> */}
          </div>
        </section>
        <section id="catalog" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-5">Katalog</h2>
            <div className="w-full h-[15rem] grid grid-cols-4 gap-5 mb-5">
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
            </div>
          </div>
        </section>
        <section id="about-us" className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="w-full min-h-[30rem] gap-3 flex justify-start items-stretch">
              <div className="w-[40%] bg-slate-200">
                <div>Image Here</div>
              </div>
              <div className="w-[60%]">
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
            <div className="w-full min-h-[30rem] gap-3 flex justify-start items-stretch">
              <div className="w-[60%]">
                <p>
                  Adalah program yang dirancang untuk mendampingi anak-anak
                  menyusun cerita dan gambar menjadi sebuah buku yang dapat
                  diwujudkan dalam bentuk buku cetak dan buku elektronik
                  (eBook). Buku hasil karya ini juga bisa menjadi sarana untuk
                  anak-anak belajar mempublikasikan, menjual atau berbagi karya
                  dalam bentuk buku
                </p>
                <p>
                  Program Bikin Buku terbagi atas dua, yaitu Program Mula Bikin
                  Buku dan Program Laju Bikin Buku Program Mula ditujukan untuk
                  anak-anak yang akan membuat karya buku pertamanya bersama
                  Bukuku.Club, sedangkan Program Laju ditujukan untuk
                  #kreatorbukukuclub, yaitu anak-anak yang sudah pernah membuat
                  buku bersama Bukuku.Club.
                </p>
              </div>
              <div className="w-[40%] bg-slate-200">
                <div>Image Here</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-500">
        <div className="max-w-6xl mx-auto min-h-[20rem] py-3">footer</div>
        <div className="bg-orange-300">
          <div className="max-w-6xl mx-auto py-3 text-center">
            Copy Right 2021 All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
