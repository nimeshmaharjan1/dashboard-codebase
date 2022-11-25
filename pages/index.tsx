import { GetServerSideProps } from 'next';

const Index = () => {
  return (
    <section
      style={{ minHeight: '100vh' }}
      className="d-flex flex-column justify-content-center align-items-center gap-3 bg-dark"
    >
      <button className="btn btn-primary btn-lg btn-block">Docs</button>
      <button className="btn btn-secondary btn-lg btn-block">CMS</button>
    </section>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: '/cms',
    },
    props: {},
  };
};
