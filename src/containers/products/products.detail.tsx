'use client';

import database from '@/utils/supabase';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IProduct } from '../home/elements/products/products.types';

interface IProductDetailProps {
  id: string;
}

const ProductDetail: React.FC<IProductDetailProps> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await database
          .from('product')
          .select('*')
          .limit(limit)
          .order('created_at', {
            ascending: false,
          });
        const count = await database
          .from('product')
          .select('id', { count: 'exact' });

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
    <div className="font-bold pt-14">
      <div className="max-w-6xl mx-auto pt-16 h-full">
        <div className="text-sm breadcrumbs mb-5">
          <ul>
            <li className="font-semibold text-slate-700">
              <Link href="/">Beranda</Link>
            </li>
            <li className="font-semibold text-slate-700">
              <Link href="/products">Produk</Link>
            </li>
            <li>Detail</li>
          </ul>
        </div>
        <div className="w-full min-h-screen bg-slate-50 p-3">
          <div className="flex justify-between items-start gap-8">
            <div className="h-[20rem] border flex-1"></div>
            <div className="flex-1">
              <h2>Produk Title</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
