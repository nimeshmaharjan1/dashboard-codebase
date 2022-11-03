import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const LanguageToggler = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router: any = useRouter();
  const options = [
    { value: 'en', text: 'English 🇺🇸' },
    { value: 'np', text: 'Nepali 🇳🇵' },
  ];
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    setIsMounted(true);
    setSelected(router.locale);
  }, [router.locale]);
  if (!isMounted) return null;

  const handleChange = (event: any) => {
    setSelected(event.target.value);
    router.push('/', '/', { locale: event.target.value });
  };

  return (
    <div className="align-middle p-2">
      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
export default LanguageToggler;
