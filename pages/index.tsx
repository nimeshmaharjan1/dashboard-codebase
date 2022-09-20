import type { NextPage } from 'next';
import Page from '../components/layout/Page';

const Home: NextPage = () => {
  return (
    <Page title="Home" description="example description for home page">
      <section className="flex flex-col gap-6 justify-center items-center mb-auto min-h-[calc(100vh-220px)]">
        <h1 className="text-6xl font-bold">Hello World!</h1>
        <button className="btn">Primary</button>
      </section>
    </Page>
  );
};

export default Home;
