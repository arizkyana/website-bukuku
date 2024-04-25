'use client';

import database from '@/utils/supabase';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IProduct } from '../home/elements/products/products.types';
import CatalogsList from '../home/elements/catalogs/catalogs.list';

const Catalog: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState<number>(999);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await database
          .from('product')
          .select('*')
          .filter('type', 'eq', 'catalog')
          .limit(limit)
          .order('created_at', {
            ascending: false,
          });
        const count = await database
          .from('product')
          .select('id', { count: 'exact' })
          .filter('type', 'eq', 'catalog');

        setTotal(count.count as number);
        setData(products.data as IProduct[]);
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [limit]);

  return (
    <section id="catalogs" className="font-bold pt-14 min-h-screen">
      <div className="max-w-6xl mx-auto pt-16 lg:px-0 px-3">
        <div className="text-sm breadcrumbs mb-5">
          <ul>
            <li className="font-semibold text-slate-700">
              <Link href="/">Beranda</Link>
            </li>
            <li>Katalog</li>
          </ul>
        </div>
        <h2 className="text-3xl text-left mb-5 font-bold text-cyan-500">
          {total} katalog tersedia
        </h2>
        <CatalogsList data={data} loading={loading} />
      </div>
    </section>
  );
};

export default Catalog;
