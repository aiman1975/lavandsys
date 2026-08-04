import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

const team = [
  {
    nameKey: 'team.member1.name' as TranslationKey,
    roleKey: 'team.member1.role' as TranslationKey,
    bioKey: 'team.member1.bio' as TranslationKey,
    initialsAr: 'م.ك',
    initialsEn: 'MK',
  },
  {
    nameKey: 'team.member2.name' as TranslationKey,
    roleKey: 'team.member2.role' as TranslationKey,
    bioKey: 'team.member2.bio' as TranslationKey,
    initialsAr: 'أ.ط',
    initialsEn: 'AT',
  },
];

export function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="section-pad">
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

        {/* Team */}
        <div className="mt-14">
          <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">
            {t('team.title')}
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="card group overflow-hidden text-center hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative mx-auto mt-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-teal-500 ring-4 ring-brand-100 shadow-lg transition-transform group-hover:scale-105 dark:ring-slate-800">
                  <span className="text-3xl font-bold text-white">
                    {lang === 'ar' ? member.initialsAr : member.initialsEn}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t(member.nameKey)}
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {t(member.roleKey)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {t(member.bioKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
