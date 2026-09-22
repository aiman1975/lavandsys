import { FileSearch, AudioLines } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

interface Capability {
  icon: typeof FileSearch;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  gradient: string;
}

const capabilities: Capability[] = [
  {
    icon: FileSearch,
    titleKey: 'capabilities.cap2.title',
    descKey: 'capabilities.cap2.desc',
    gradient: 'from-teal-500 to-teal-700',
  },
  {
    icon: AudioLines,
    titleKey: 'capabilities.cap3.title',
    descKey: 'capabilities.cap3.desc',
    gradient: 'from-brand-400 to-teal-600',
  },
];

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="section-pad">
      <div className="mx-auto max-w-7xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            {t('capabilities.title')}
          </span>
          <h2 className="section-title mt-4">{t('capabilities.title')}</h2>
          <p className="section-subtitle">{t('capabilities.subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="card flex flex-col p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cap.gradient} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {t(cap.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(cap.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
