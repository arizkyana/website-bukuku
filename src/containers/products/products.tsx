'use client';

import database from '@/utils/supabase';
import { useEffect } from 'react';

const Product: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await database.from('product').select('*');
        console.log('products > ', products);
      } catch (error) {
        console.log('error > ', error);
      }
    };
    fetchData();
  }, []);

  return <div className="font-bold border border-red-300">Product Page</div>;
};

export default Product;
