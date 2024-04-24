import { NextPage } from 'next';
import { ProductsDetail } from '@/containers/products';

const ProductsDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  return <ProductsDetail id={id} />;
};

export default ProductsDetailPage;
