import { Wallet, LayoutDashboard, Store, Archive, ExternalLink } from 'lucide-react';
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
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="section-pad bg-slate-100 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl container-px">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
            {t('portfolio.title')}
          </span>
          <h2 className="section-title mt-4">{t('portfolio.title')}</h2>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="card flex flex-col p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {t(project.titleKey)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {t(project.descKey)}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400"
                  >
                    {t('portfolio.visitSite')}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
