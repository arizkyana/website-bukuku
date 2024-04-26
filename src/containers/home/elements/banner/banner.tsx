'use client';

import database from '@/utils/supabase';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface IBannerData {
  id: number;
  created_at: string;
  image: string;
  headline: string;
  sub_headline: string;
}

const Banner: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IBannerData | null>(null);
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        setLoading(true);
        const banner = await database
          .from('banner')
          .select('*')
          .eq('id', 1)
          .single();

        setData(banner.data as IBannerData);
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanner();
  }, []);

  return (
    <section
      id="banner"
      className="lg:h-[30rem] h-min flex lg:flex-row flex-col-reverse justify-start items-start bg-orange-400 py-12"
    >
      <div className="lg:h-full h-[15rem] lg:w-[60%] w-full">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            alt="banner"
            src={data?.image || '/images/banner.png'}
            className="block w-full h-full object-cover"
            width={1440}
            height={45}
            loading="lazy"
          />
        </div>
      </div>
      <div className="h-full lg:w-[40%] w-full bg-orange-400">
        <div className="w-full h-full p-6 flex flex-col justify-center gap-3 items-center">
          <Image
            alt="cta"
            src="/images/cta.png"
            className="block w-[10rem] h-[10rem] object-cover"
            width={300}
            height={300}
          />
          <div className="text-center text-white lg:w-[60%] w-full">
            <h1 className="text-4xl font-bold mb-2">
              {loading ? 'Loading...' : data?.headline || '...'}
            </h1>
            <h2 className="text-3xl font-light">
              {loading ? 'Loading...' : data?.sub_headline || '...'}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
