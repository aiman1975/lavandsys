import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { translations, type Lang, type TranslationKey } from '@/i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'ar';
    const stored = localStorage.getItem('lavandsys-lang');
    return stored === 'en' ? 'en' : 'ar';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem('lavandsys-lang', lang);
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () =>
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));

  const t = (key: TranslationKey) => {
    return translations[lang][key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
