import { styled } from '@stitches/react';
import { isEmpty } from 'lodash';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import Page from '../components/layout/Page';
import { IColumnType, Table } from '../components/ui/Table';
import withAuth from '../hoc/withAuth';
import { getAuthToken } from '../utils/localStorage.util';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  interface IData {
    fullName: string;
    role: string;
    tags: string[];
  }

  const Span = styled('span', {
    background: '#596b7e',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 99999,
  });
  const columns: IColumnType<IData>[] = [
    {
      key: 'fullName',
      title: 'Full Name',
      width: 200,
    },
    {
      key: 'role',
      title: 'Role',
      width: 200,
    },
    {
      key: 'tags',
      title: 'Tags',
      width: 200,
      render: (_, { tags }) => (
        <>
          {tags.map((tag, tagIndex) => (
            <Span key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
              {tag}
            </Span>
          ))}
        </>
      ),
    },
  ];

  useEffect(() => {
    setIsLoggedIn(!isEmpty(getAuthToken()));
  }, []);

  const data: IData[] = [
    {
      fullName: 'Francisco Mendes',
      role: 'Full Stack',
      tags: ['dev', 'blogger'],
    },
    {
      fullName: 'Ricardo Malva',
      role: 'Social Media Manager',
      tags: ['designer', 'photographer'],
    },
    {
      fullName: 'Picaso Maaaa',
      role: 'Marketing Manager',
      tags: [],
    },
    {
      fullName: 'John Doe',
      role: 'Network Specialist',
      tags: ['devOps', 'docker'],
    },
    {
      fullName: 'Lorem Prasad',
      role: 'Abcd',
      tags: ['frontend', 'react', 'next'],
    },
  ];

  return (
    <Page title="Home" description="example description for home page">
      <section className="flex flex-col gap-6 justify-center items-center mb-auto min-h-[calc(100vh-220px)]">
        {/* <h1 className="text-6xl font-bold">Hello World!</h1> */}
        {/* <button className="btn">Primary</button> */}
        {(session || isLoggedIn) && (
          <>
            <Table data={data} columns={columns} />
          </>
        )}
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

export default withAuth(Home);
