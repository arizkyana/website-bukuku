'use client';

import database from '@/utils/supabase';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IProduct } from '../home/elements/products/products.types';
import ProductsList from '../home/elements/products/products.list';

const Product: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState<number>(999);
  const [total, setTotal] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (search && search.length >= 3) {
          const products = await database
            .from('product')
            .select('*')
            .filter('type', 'eq', 'product')
            .filter('title', 'ilike', `%${search}%`)
            .limit(limit)
            .order('created_at', {
              ascending: false,
            });
          const count = await database
            .from('product')
            .select('id', { count: 'exact' })
            .filter('type', 'eq', 'product')
            .filter('title', 'ilike', `%${search}%`);

          setTotal(count.count as number);
          setData(products.data as IProduct[]);
        } else {
          const products = await database
            .from('product')
            .select('*')
            .filter('type', 'eq', 'product')
            .limit(limit)
            .order('created_at', {
              ascending: false,
            });
          const count = await database
            .from('product')
            .select('id', { count: 'exact' })
            .filter('type', 'eq', 'product');

          setTotal(count.count as number);
          setData(products.data as IProduct[]);
        }
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [limit, search]);

  return (
    <div className="font-bold pt-14 min-h-screen">
      <div className="max-w-6xl mx-auto pt-16 px-3 lg:px-0">
        <div className="text-sm breadcrumbs mb-5">
          <ul>
            <li className="font-semibold text-slate-700">
              <Link href="/">Beranda</Link>
            </li>
            <li>Produk</li>
          </ul>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center mb-3">
          <h2 className="text-3xl text-left mb-5 font-bold text-cyan-500">
            {total} produk tersedia
          </h2>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow text-slate-600"
                placeholder="Cari Judul Buku"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        {search && data.length === 0 && (
          <div className="flex flex-col justify-center items-center gap-2 my-3 lg:w-[50%] w-full mx-auto overflow-hidden">
            <h3>{`Nama Author "${search}" tidak ditemukan`}</h3>
            <h4>Silahkan gunakan kata kunci lain</h4>
            <button
              type="button"
              className="btn btn-sm btn-outline btn-info"
              onClick={() => setSearch('')}
            >
              Ulangi Pencarian
            </button>
          </div>
        )}
        <ProductsList data={data} loading={loading} />
      </div>
    </div>
  );
};

export default Product;
