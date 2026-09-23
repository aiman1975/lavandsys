import { lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { WaveBackground } from '@/components/WaveBackground';
import type { TranslationKey } from '@/i18n/translations';

const Hero3DCanvas = lazy(() =>
  import('@/components/Hero3DCanvas').then((m) => ({ default: m.Hero3DCanvas }))
);

const points: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: 'hero.headline', descKey: 'hero.subtext' },
  { titleKey: 'hero.point1.title', descKey: 'hero.point1.desc' },
  { titleKey: 'hero.point2.title', descKey: 'hero.point2.desc' },
];

export function Hero() {
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-white pt-28 pb-14 dark:from-brand-950/50 dark:via-slate-950 dark:to-slate-950 lg:pt-32"
    >
      <WaveBackground />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl container-px">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text column — all three messages share the same format */}
          <div className="min-w-0 text-center lg:text-start">
            <div className="flex flex-col gap-6">
              {points.map((point, idx) => {
                const Heading = idx === 0 ? 'h1' : 'h2';
                return (
                  <div key={point.titleKey}>
                    <Heading className="break-words text-2xl font-bold leading-[1.3] tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                      {t(point.titleKey)}
                    </Heading>
                    <p className="mx-auto mt-2 max-w-md text-base text-slate-600 dark:text-slate-400 lg:mx-0">
                      {t(point.descKey)}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#solutions" className="btn-primary">
                {t('hero.cta1')}
                <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </a>
              <a href="#contact" className="btn-secondary">
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* 3D column — scaled to sit comfortably beside the text, not dominate it */}
          <div className="relative h-64 w-full sm:h-80 lg:h-[360px]">
            <Suspense fallback={null}>
              <Hero3DCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
