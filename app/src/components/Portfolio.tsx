import { FileText, Archive, Building2, Globe, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

interface Category {
  icon: typeof FileText;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  gradient: string;
}

const categories: Category[] = [
  {
    icon: FileText,
    titleKey: 'portfolio.cat1.title',
    descKey: 'portfolio.cat1.desc',
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    icon: Archive,
    titleKey: 'portfolio.cat2.title',
    descKey: 'portfolio.cat2.desc',
    gradient: 'from-teal-500 to-teal-700',
  },
  {
    icon: Building2,
    titleKey: 'portfolio.cat3.title',
    descKey: 'portfolio.cat3.desc',
    gradient: 'from-brand-400 to-brand-600',
  },
  {
    icon: Globe,
    titleKey: 'portfolio.cat4.title',
    descKey: 'portfolio.cat4.desc',
    gradient: 'from-teal-400 to-brand-600',
  },
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="section-pad bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-7xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
            {t('portfolio.title')}
          </span>
          <h2 className="section-title mt-4">{t('portfolio.title')}</h2>
          <p className="section-subtitle">{t('portfolio.subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="card relative overflow-hidden p-7 text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
                  <Clock className="h-3 w-3" />
                  {t('portfolio.comingSoon')}
                </span>
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {t(cat.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(cat.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
