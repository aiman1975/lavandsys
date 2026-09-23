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
    <section id="capabilities" className="section-pad bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            {t('capabilities.title')}
          </span>
          <h2 className="section-title mt-4">{t('capabilities.title')}</h2>
          <p className="section-subtitle">{t('capabilities.subtitle')}</p>
        </div>

        {/* Photo + capability cards */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10">
            <img
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-64 w-full object-cover sm:h-80 lg:h-[380px]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="card flex items-start gap-4 p-6 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-600/10"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cap.gradient} shadow-lg`}
                  >
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t(cap.titleKey)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {t(cap.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
