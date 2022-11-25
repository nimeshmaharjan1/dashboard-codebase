import CmsLayout from '@features/cms/components/layout/main';
import { NextPageWithLayout } from '@pages/_app';
import React from 'react';

const Dashboard: NextPageWithLayout = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;

Dashboard.getLayout = (page: React.ReactElement) => {
  return <CmsLayout>{page}</CmsLayout>;
};
