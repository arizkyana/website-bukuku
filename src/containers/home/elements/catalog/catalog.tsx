import { FC } from 'react';

const Catalog: FC = () => {
  return (
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
  );
};

export default Catalog;
