import CmsLayout from '@features/home/components/layout/main';
import { NextPageWithLayout } from '@pages/_app';
import React from 'react';

const Dashboard: NextPageWithLayout = () => {
  return (
    <div>
      <p>Dashboard</p>
      <button className="btn btn-secondary">Dashboard</button>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = (page: React.ReactElement) => {
  return <CmsLayout>{page}</CmsLayout>;
};
