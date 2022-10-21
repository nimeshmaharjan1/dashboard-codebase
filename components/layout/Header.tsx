import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import ThemeToggler from '../ui/ThemeToggler';


const Header = () => {
  const { data: session } = useSession();

  const handleSignout = (e: any) => {
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
            {session &&
              <Link href="/">
                <a onClick={handleSignout} className="btn-signin">Logout</a></Link>}
            {!session &&
              <Link href="/LoginPage">Login</Link>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
