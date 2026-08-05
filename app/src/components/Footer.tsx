import { Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

const quickLinks: { key: TranslationKey; href: string }[] = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.solutions', href: '#solutions' },
  { key: 'nav.work', href: '#work' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
];

const serviceKeys: TranslationKey[] = [
  'solutions.ngo.title',
  'solutions.archiving.title',
  'solutions.team.title',
  'solutions.business.title',
  'solutions.websites.title',
  'solutions.hosting.title',
];

export function Footer() {
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl container-px py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <a href="#home" className="flex items-center gap-2" style={{ direction: 'ltr' }}>
              <img src="/logo-nav.png" alt="LAVAND" className="h-12 w-auto" />
              <span className="text-lg font-extrabold tracking-tight text-brand-600 dark:text-brand-400">
                SYSTEMS
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t('footer.about')}
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-600 dark:hover:bg-slate-800 dark:hover:text-brand-400"
                  aria-label="Social link"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    <ArrowRight
                      className={`h-3.5 w-3.5 ${isRtl ? 'rotate-180' : ''}`}
                    />
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
              {t('footer.services')}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <a
                    href="#solutions"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    <ArrowRight
                      className={`h-3.5 w-3.5 ${isRtl ? 'rotate-180' : ''}`}
                    />
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
              {t('contact.info.title')}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a
                  href="mailto:info@lavandsys.com"
                  className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                >
                  info@lavandsys.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+963996677976"
                  dir="ltr"
                  className="inline-block text-end transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                >
                  +963 996 677 976
                </a>
              </li>
              <li>{t('contact.info.address')}: {dir === 'rtl' ? 'دمشق، سوريا' : 'Damascus, Syria'}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {year} LAVAND SYSTEMS. {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
