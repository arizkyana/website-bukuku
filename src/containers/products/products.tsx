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
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [limit]);

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
        <h2 className="text-3xl text-left mb-5 font-bold text-cyan-500">
          {total} produk tersedia
        </h2>
        <ProductsList data={data} loading={loading} />
      </div>
    </div>
  );
};

export default Product;
