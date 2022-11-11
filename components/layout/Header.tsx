import { isEmpty } from 'lodash';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { clearLocalStorage, getAuthToken } from '../../utils/localStorage.util';
import LanguageToggler from '../ui/LanguageToggler';
import Logo from '../ui/Logo';
import ThemeToggler from '../ui/ThemeToggler';
import getConfig from 'next/config';


const { publicRuntimeConfig } = getConfig();

const Header = () => {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!isEmpty(getAuthToken()));
  }, []);


  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut({callbackUrl: `${publicRuntimeConfig.CALLBACK_URL}/loginpage`});
  };

  return (
    <header className="wrapper | h-15 shadow-md dark:border-gray-700 dark:shadow-gray-900"> 
      <div className="px-4 container mx-auto sm:px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-12">
          <ThemeToggler></ThemeToggler>
          <LanguageToggler />
          {!session && !isLoggedIn && router.pathname !== '/loginpage' ? (
            <button className="btn">
              <Link href="/loginpage">Login</Link>
            </button>
          ) : (
            ''
          )}

          {!isLoggedIn && session && (
            <>
              <button className="btn">
                <a href="#" onClick={handleSignout} className="btn-signin">
                  Logout
                </a>
              </button>
              <Image
                src={session?.user?.image}
                height={50}
                width={50}
                alt=""
                className={styles.avatar}
              />
            </>
          )}
          {isLoggedIn && (
            <button className="btn" onClick={() => clearLocalStorage()}>
              <Link href="/loginpage">Logout</Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
