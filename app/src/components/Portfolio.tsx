import { Wallet, LayoutDashboard, Sofa, Link2, Palmtree, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

interface Project {
  icon: typeof Wallet;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  gradient: string;
  url?: string;
  images?: string[];
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
    images: ['/screenshots/opshub/1.jpg', '/screenshots/opshub/2.jpg', '/screenshots/opshub/3.jpg'],
  },
  {
    icon: Sofa,
    titleKey: 'portfolio.proj3.title',
    descKey: 'portfolio.proj3.desc',
    gradient: 'from-brand-400 to-brand-600',
    url: 'https://gardenia-furniture.web.app',
    images: ['/screenshots/gardenia/1.jpg', '/screenshots/gardenia/2.jpg', '/screenshots/gardenia/3.jpg'],
  },
  {
    icon: Link2,
    titleKey: 'portfolio.proj4.title',
    descKey: 'portfolio.proj4.desc',
    gradient: 'from-teal-400 to-brand-600',
    url: 'https://takaful-platform-ten.vercel.app',
    images: ['/screenshots/takaful/1.jpg', '/screenshots/takaful/2.jpg', '/screenshots/takaful/3.jpg'],
  },
  {
    icon: Palmtree,
    titleKey: 'portfolio.proj5.title',
    descKey: 'portfolio.proj5.desc',
    gradient: 'from-slate-500 to-brand-700',
    url: 'https://seran.fun',
    images: ['/screenshots/seran/1.jpg', '/screenshots/seran/2.jpg', '/screenshots/seran/3.jpg'],
  },
];

const CYCLE_SECONDS = 12;

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
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const Icon = project.icon;

            if (project.images) {
              return (
                <div
                  key={idx}
                  className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/20"
                >
                  {project.images.map((src, i) => (
                    <div
                      key={src}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${src})`,
                        animation: `cardCrossfade ${CYCLE_SECONDS}s ease-in-out infinite`,
                        animationDelay: `${i * (CYCLE_SECONDS / project.images!.length)}s`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/10" />
                  <div className="relative p-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white">
                      {t(project.titleKey)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {t(project.descKey)}
                    </p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-brand-200"
                      >
                        {t('portfolio.visitSite')}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            }

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
