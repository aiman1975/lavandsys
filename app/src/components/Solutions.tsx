import { useState } from 'react';
import {
  HandHeart,
  Archive,
  Users,
  Building2,
  Globe,
  Server,
  X,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

interface Solution {
  icon: typeof HandHeart;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  detailsKey: TranslationKey;
  features: TranslationKey[];
  gradient: string;
}

const detailKeys: Record<string, TranslationKey> = {
  ngo: 'solutions.ngo.desc',
  archiving: 'solutions.archiving.desc',
  team: 'solutions.team.desc',
  business: 'solutions.business.desc',
  websites: 'solutions.websites.desc',
  hosting: 'solutions.hosting.desc',
};

const solutions: Solution[] = [
  {
    icon: HandHeart,
    titleKey: 'solutions.ngo.title',
    descKey: 'solutions.ngo.desc',
    detailsKey: detailKeys.ngo,
    features: [
      'solutions.ngo.title',
    ],
    gradient: 'from-brand-500 to-brand-700',
  },
  {
    icon: Archive,
    titleKey: 'solutions.archiving.title',
    descKey: 'solutions.archiving.desc',
    detailsKey: detailKeys.archiving,
    features: ['solutions.archiving.title'],
    gradient: 'from-teal-500 to-teal-700',
  },
  {
    icon: Users,
    titleKey: 'solutions.team.title',
    descKey: 'solutions.team.desc',
    detailsKey: detailKeys.team,
    features: ['solutions.team.title'],
    gradient: 'from-brand-400 to-brand-600',
  },
  {
    icon: Building2,
    titleKey: 'solutions.business.title',
    descKey: 'solutions.business.desc',
    detailsKey: detailKeys.business,
    features: ['solutions.business.title'],
    gradient: 'from-teal-400 to-brand-600',
  },
  {
    icon: Globe,
    titleKey: 'solutions.websites.title',
    descKey: 'solutions.websites.desc',
    detailsKey: detailKeys.websites,
    features: ['solutions.websites.title'],
    gradient: 'from-brand-500 to-teal-500',
  },
  {
    icon: Server,
    titleKey: 'solutions.hosting.title',
    descKey: 'solutions.hosting.desc',
    detailsKey: detailKeys.hosting,
    features: ['solutions.hosting.title'],
    gradient: 'from-slate-500 to-brand-700',
  },
];

export function Solutions() {
  const { t, dir } = useLanguage();
  const [active, setActive] = useState<Solution | null>(null);
  const isRtl = dir === 'rtl';

  return (
    <section
      id="solutions"
      className="section-pad relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white dark:from-brand-950/50 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            {t('solutions.title')}
          </span>
          <h2 className="section-title mt-4">{t('solutions.title')}</h2>
          <p className="section-subtitle">{t('solutions.subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <button
                key={idx}
                onClick={() => setActive(sol)}
                className="card group p-7 text-start hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10 hover:border-brand-300 dark:hover:border-brand-700"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${sol.gradient} shadow-lg transition-transform group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {t(sol.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(sol.descKey)}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700 dark:text-brand-400">
                  {t('solutions.requestDemo')}
                  <ArrowRight
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl animate-scale-in dark:border-slate-800 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute end-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${active.gradient} shadow-lg`}
            >
              <active.icon className="h-8 w-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
              {t(active.titleKey)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {t(active.detailsKey)}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                onClick={() => setActive(null)}
                className="btn-primary flex-1"
              >
                {t('solutions.requestDemo')}
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
