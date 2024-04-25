'use client';

import { FC } from 'react';
import { IProduct } from './products.types';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface IProductsListProps {
  data: IProduct[];
  loading?: boolean;
}

const ProductsList: FC<IProductsListProps> = ({ data, loading }) => {
  return (
    <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
      {loading
        ? Array.from({ length: 3 }, (_, idx) => (
            <div
              className="bg-slate-100 h-[30rem] rounded-lg animate-pulse"
              key={idx}
            ></div>
          ))
        : data?.map(
            ({ title, description, specification, order, images, id }, idx) => (
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
                    'opacity-0 z-20 absolute border p-3 bottom-0 left-0 w-full h-full rounded-lg bg-black/30 transition-all duration-300 ease-in-out',
                    { 'hover:opacity-100': true }
                  )}
                >
                  <div className="relative h-full w-full">
                    <div className="rounded-lg bg-white w-full h-[65%] absolute bottom-0 left-0">
                      <div className="relative w-full h-full">
                        <div className="flex gap-1 p-3 text-xs flex-col">
                          <span className="block font-bold">Nama Produk</span>
                          <span className="block font-normal">{title}</span>
                        </div>
                        <div className="flex gap-1 p-3 text-xs flex-col">
                          <span className="block font-bold">Spesifikasi</span>
                          <span className="block font-normal">
                            {specification}
                          </span>
                        </div>
                        <div className="flex gap-1 p-3 text-xs flex-col max-h-[10rem]">
                          <span className="block font-bold">Keterangan</span>
                          <span className="line-clamp-3 font-normal grow overflow-hidden text-ellipsis w-full h-full">
                            {description}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-3 ">
                          <div className="flex gap-3 justify-between items-center">
                            <Link
                              href={`/products/${id}`}
                              role="button"
                              className="btn inline-flex flex-1 justify-center items-center  left-[7rem] bg-white border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
                            >
                              Lihat Detail
                            </Link>
                            <a
                              target="_blank"
                              href={order}
                              role="button"
                              className="btn inline-flex flex-1 justify-center items-center  left-[7rem] text-white bg-orange-500 hover:bg-orange-600 border-0"
                            >
                              Pesan Sekarang
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      {}
    </div>
  );
};

export default ProductsList;
