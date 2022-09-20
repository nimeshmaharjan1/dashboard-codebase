import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/layout/Page';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Page title="Home" description="example description for home page">
      <section className="flex flex-col gap-6 justify-center items-center mb-auto min-h-[calc(100vh-220px)]">
        <h1 className="text-6xl font-bold">Hello World!</h1>
        <button className="btn">Primary</button>
        <p className={styles.description}>{t('name', { name: 'anon' })} </p>
      </section>
    </Page>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
