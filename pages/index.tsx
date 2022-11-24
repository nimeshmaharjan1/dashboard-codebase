import { GetServerSideProps } from 'next';

const Index = () => {
  return <div>Index</div>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: '/docs',
    },
    props: {},
  };
};
