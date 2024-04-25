'use client';

import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { IProduct } from '../products/products.types';
import database from '@/utils/supabase';
import CatalogsList from './catalogs.list';

const Products: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await database
          .from('product')
          .select('*')
          .filter('type', 'eq', 'catalog')
          .limit(3)
          .order('created_at', {
            ascending: false,
          });
        setData(products.data as IProduct[]);
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="catalogs" className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-5 font-bold text-cyan-500">
          Katalog
        </h2>

        <CatalogsList data={data} loading={loading} />

        <div className="flex justify-center items-center">
          <Link href="/catalogs">
            <button
              type="button"
              className="btn bg-transparent hover:bg-cyan-500 hover:text-white text-cyan-500 border-cyan-600 "
            >
              Lihat Semua Katalog
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
