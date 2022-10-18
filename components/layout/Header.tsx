import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import ThemeToggler from '../ui/ThemeToggler';


const Header = () => {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <header className="wrapper | h-15 shadow-md dark:border-gray-700 dark:shadow-gray-900">
      <div className="px-4 container mx-auto sm:px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex gap-12">
          <ThemeToggler></ThemeToggler>
          <button className="btn">
            <Link href="/LoginPage">Login</Link>
          </button>
          <button className="btn">
            {session && <a href="#" onClick={handleSignout} className="btn-signin">Social Sign out</a>}
            {!session && <a href="#" onClick={handleSignin} className="btn-signin">Social Sign in</a>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
