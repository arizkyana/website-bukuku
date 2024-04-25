import Image from 'next/image';
import Products from './elements/products';
import Catalogs from './elements/catalogs';

const Home: React.FC = () => {
  return (
    <>
      <main id="" className="pt-12 min-h-screen">
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
        <Catalogs />
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
    </>
  );
};

export default Home;
