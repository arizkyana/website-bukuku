import { NextPage } from 'next';
import { CatalogsDetail } from '@/containers/catalogs';

const CatalogsDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  return <CatalogsDetail id={id} />;
};

export default CatalogsDetailPage;
