import { Wallet, LayoutDashboard, Store, Archive, Scale, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

interface Project {
  icon: typeof Wallet;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  gradient: string;
  url?: string;
}

const projects: Project[] = [
  {
    icon: Wallet,
    titleKey: 'portfolio.proj1.title',
    descKey: 'portfolio.proj1.desc',
    gradient: 'from-brand-500 to-brand-700',
    url: 'https://cva-system.web.app',
  },
  {
    icon: LayoutDashboard,
    titleKey: 'portfolio.proj2.title',
    descKey: 'portfolio.proj2.desc',
    gradient: 'from-teal-500 to-teal-700',
    url: 'https://opshub.web.app',
  },
  {
    icon: Store,
    titleKey: 'portfolio.proj6.title',
    descKey: 'portfolio.proj6.desc',
    gradient: 'from-brand-600 to-teal-600',
    url: 'https://andak.web.app',
  },
  {
    icon: Archive,
    titleKey: 'capabilities.cap1.title',
    descKey: 'capabilities.cap1.desc',
    gradient: 'from-slate-500 to-brand-700',
    url: 'https://syrian-docvault.web.app',
  },
  {
    icon: Scale,
    titleKey: 'portfolio.proj7.title',
    descKey: 'portfolio.proj7.desc',
    gradient: 'from-teal-600 to-brand-600',
    url: 'https://lavand-mizan.web.app',
  },
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="section-pad relative overflow-hidden bg-gradient-to-b from-teal-50 via-teal-50/40 to-white dark:from-teal-950/20 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
            {t('portfolio.title')}
          </span>
          <h2 className="section-title mt-4">{t('portfolio.title')}</h2>
          <p className="section-subtitle">{t('portfolio.subtitle')}</p>
        </div>

        {/* Showcase list */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const card = (
              <div className="group flex items-center gap-5 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-700">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-lg font-bold text-slate-900 dark:text-white">
                      {t(project.titleKey)}
                    </h3>
                    {project.url && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        {t('portfolio.live')}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {t(project.descKey)}
                  </p>
                </div>
                {project.url && (
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 transition-colors group-hover:text-teal-600 dark:group-hover:text-teal-400" />
                )}
              </div>
            );

            return project.url ? (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={idx}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
