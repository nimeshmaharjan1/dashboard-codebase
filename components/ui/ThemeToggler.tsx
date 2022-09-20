import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggler: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    setCurrentTheme(
      theme === 'system' ? (systemTheme as string) : (theme as string)
    );
  }, [theme]);

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };

  if (!isMounted) return null;

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className="w-10 h-10 text-yellow-500 "
        role="button"
        onClick={() => changeTheme('light')}
      />
    );
  } else {
    return (
      <MoonIcon
        className="w-10 h-10 text-gray-900 "
        role="button"
        onClick={() => changeTheme('dark')}
      />
    );
  }
};

export default ThemeToggler;
