import { Card, Layout } from 'antd';
import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './auth.module.scss';

const { Content } = Layout;
const AuthLayout: React.FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <Layout>
      <Head>
        <title>{title ? `${title} - Codebase` : 'Codebase'} </title>
      </Head>
      <Content className={styles.content}>
        <Card
          title={
            <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
              {title}
            </h2>
          }
          style={{ width: 400 }}
        >
          {children}
        </Card>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
