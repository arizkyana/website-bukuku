'use client';

import database from '@/utils/supabase';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IProduct } from '../home/elements/products/products.types';
import Image from 'next/image';

interface IProductDetailProps {
  id: string;
}

const ProductDetail: React.FC<IProductDetailProps> = ({ id }) => {
  const [data, setData] = useState<IProduct>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const product = await database
          .from('product')
          .select('*')
          .filter('type', 'eq', 'product')
          .eq('id', id)
          .single();
        console.log('product > ', product);
        setData(product.data);
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
    }
    fetchDetail();
  }, [id]);

  return (
    <div className="font-bold pt-14">
      <div className="max-w-6xl mx-auto pt-16 h-full lg:px-0 px-3">
        <div className="text-sm breadcrumbs mb-5">
          <ul>
            <li className="font-semibold text-slate-700">
              <Link href="/">Beranda</Link>
            </li>
            <li className="font-semibold text-slate-700">
              <Link href="/products">Produk</Link>
            </li>
            <li>{data?.title}</li>
          </ul>
        </div>
        <div className="w-full min-h-screen bg-slate-50 p-3">
          <div className="flex lg:flex-row flex-col justify-between items-start gap-8">
            <div className="h-[20rem] flex-1 bg-white">
              <Image
                alt={`product-${id}`}
                src={data?.images?.[0] ?? ''}
                className="w-full h-full object-contain rounded-lg"
                width={600}
                height={900}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl">{data?.title ?? '-'}</h2>
              <div className="my-4">
                <a
                  target="_blank"
                  href={data?.order}
                  role="button"
                  className="btn inline-flex flex-1 justify-center items-center  left-[7rem] text-white bg-orange-500 hover:bg-orange-600 border-0"
                >
                  Pesan Sekarang
                </a>
              </div>
              <div className="w-full h-full flex flex-col gap-5 my-8">
                <div className="flex gap-1 flex-col">
                  <span className="block font-bold">Nama Produk</span>
                  <span className="block font-normal">{data?.title}</span>
                </div>
                <div className="flex gap-1 flex-col">
                  <span className="block font-bold">Spesifikasi</span>
                  <span className="block font-normal">
                    {data?.specification}
                  </span>
                </div>
                <div className="flex gap-1 flex-col">
                  <span className="block font-bold">Keterangan</span>
                  <span className="overflow-hidden block font-normal">
                    {data?.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
