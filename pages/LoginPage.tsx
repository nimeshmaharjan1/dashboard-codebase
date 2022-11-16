import Router from 'next/router';
import { useEffect } from 'react';
import Login from '../components/layout/Login';
import Page from '../components/layout/Page';
import { isUserLoggedIn } from '../utils/auth.util';

const LoginPage = () => {
  useEffect(() => {
    if (isUserLoggedIn()) {
      Router.push('/');
    }
  }, []);
  return (
    <Page title="Login" description="this is for login page">
      <Login />
    </Page>
  );
};

export default LoginPage;
