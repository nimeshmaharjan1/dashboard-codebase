import Logo from '../ui/Logo';
import ThemeToggler from '../ui/ThemeToggler';

const Header = () => {
  return (
    <header className="wrapper | h-15 shadow-md dark:border-gray-700 dark:shadow-gray-900">
      <div className="px-4 container mx-auto sm:px-6 py-4 flex justify-between items-center">
        <Logo />
        <ThemeToggler></ThemeToggler>
      </div>
    </header>
  );
};

export default Header;
