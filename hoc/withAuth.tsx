import { isEmpty } from 'lodash';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAuthToken } from '../utils/localStorage.util';

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    // Login data added to props via redux-store (or use react context for example)
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (isEmpty(getAuthToken()) && !session) {
        router.push('/loginpage');
      }
    }, []);

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
