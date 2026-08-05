import { useLanguage } from '@/context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-pad bg-gradient-to-b from-white to-teal-50/60 dark:from-slate-950 dark:to-teal-950/30"
    >
      <div className="mx-auto max-w-7xl container-px">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            {t('about.title')}
          </span>
          <h2 className="section-title mt-4">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {t('about.body')}
          </p>
        </div>
      </div>
    </section>
  );
}
