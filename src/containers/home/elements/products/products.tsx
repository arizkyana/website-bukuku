'use client';

import database from '@/utils/supabase';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface Product {
  id: number;
  created_at: string;
  title: string;
  description: string;
  price: number;
  category: string | null;
  specification: string;
  order: string;
  images: string[];
}

const Products: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await database
          .from('product')
          .select('*')
          .limit(3)
          .order('created_at', {
            ascending: false,
          });
        setData(products.data as Product[]);
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <section id="products" className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-5 font-bold text-cyan-500">
          Produk
        </h2>

        <div className="w-full grid grid-cols-3 gap-5 mb-5">
          {loading
            ? Array.from({ length: 3 }, (_, idx) => (
                <div
                  className="bg-slate-100 h-[30rem] rounded-lg animate-pulse"
                  key={idx}
                ></div>
              ))
            : data?.map(
                ({ title, description, specification, order, images }, idx) => (
                  <div
                    className="bg-slate-300 h-[30rem] relative rounded-lg"
                    key={idx}
                  >
                    <Image
                      alt={`product-${idx}`}
                      src={images?.[0] ?? ''}
                      className="w-full h-full object-cover rounded-lg"
                      width={600}
                      height={900}
                      loading="lazy"
                    />
                    <div
                      className={classNames(
                        'opacity-0 z-5 absolute border top-0 left-0 w-full h-full rounded-lg bg-white transition-all duration-300 ease-in-out',
                        { 'hover:opacity-100': true }
                      )}
                    >
                      <div className="flex gap-1 p-3 text-xs flex-col">
                        <span className="block font-bold">Nama Produk</span>
                        <span className="block">{title}</span>
                      </div>
                      <div className="flex gap-1 p-3 text-xs flex-col">
                        <span className="block font-bold">Spesifikasi</span>
                        <span className="block">{specification}</span>
                      </div>
                      <div className="flex gap-1 p-3 text-xs flex-col">
                        <span className="block font-bold">Keterangan</span>
                        <span className="block">{description}</span>
                      </div>
                    </div>
                    <a
                      target="_blank"
                      href={order}
                      role="button"
                      className="btn flex justify-center items-center z-10 absolute bottom-10 left-[7rem] text-white bg-orange-500 hover:bg-orange-600 border-0"
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                )
              )}
          {}
        </div>
        {!loading && (
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="btn bg-transparent hover:bg-cyan-500 hover:text-white text-cyan-500 border-cyan-600 "
            >
              Lihat Semua Produk
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
