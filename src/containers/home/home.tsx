const Home: React.FC = () => {
  return (
    <>
      <nav className="bg-white shadow-sm fixed top-0 left-0 w-full">
        <div className="max-w-6xl mx-auto py-8 flex justify-between items-center">
          <div>Logo</div>
          <div>
            <ul className="inline-flex gap-3 justify-end items-center">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Catalog</a>
              </li>
              <li>
                <a href="">Programs</a>
              </li>
              <li>
                <a href="">About Us</a>
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
          <div className="bg-slate-400 h-full w-[40%]">
            <div className="w-full h-full p-6 flex flex-col justify-center gap-3 items-center">
              <div className="text-center">
                <h1 className="text-5xl">Headline</h1>
                <h2 className="text-3xl">Sub Headline</h2>
              </div>
              <button
                type="button"
                // className="bg-white px-3 py-2 text-green-600 rounded-lg"
                className="btn"
              >
                CTA Here
              </button>
            </div>
          </div>
          <div className="bg-slate-300 h-full w-[60%]">
            <div className="w-full h-full flex justify-center items-center">
              <div>Banner Here</div>
            </div>
          </div>
        </section>
        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-5">Features</h2>
            <div className="w-full h-[25rem] grid grid-cols-3 gap-5 mb-5">
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
            </div>
            <div className="w-full h-[10rem] grid grid-cols-4 gap-5">
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
              <div className="bg-slate-300"></div>
            </div>
          </div>
        </section>
        <section id="catalog" className="py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mb-5">Catalog</h2>
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
