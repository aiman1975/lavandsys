import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/i18n/translations';

interface Slide {
  headlineKey: TranslationKey;
  subtextKey: TranslationKey;
  ctaKey: TranslationKey;
  cta2Key?: TranslationKey;
  accent: string;
}

const slides: Slide[] = [
  {
    headlineKey: 'hero.slide1.headline',
    subtextKey: 'hero.slide1.subtext',
    ctaKey: 'hero.slide1.cta1',
    cta2Key: 'hero.slide1.cta2',
    accent: 'from-brand-900 via-brand-800 to-brand-700',
  },
  {
    headlineKey: 'hero.slide2.headline',
    subtextKey: 'hero.slide2.subtext',
    ctaKey: 'hero.slide2.cta',
    accent: 'from-teal-900 via-teal-800 to-brand-800',
  },
  {
    headlineKey: 'hero.slide3.headline',
    subtextKey: 'hero.slide3.subtext',
    ctaKey: 'hero.slide3.cta',
    accent: 'from-slate-900 via-brand-900 to-teal-900',
  },
  {
    headlineKey: 'hero.slide4.headline',
    subtextKey: 'hero.slide4.subtext',
    ctaKey: 'hero.slide4.cta',
    accent: 'from-brand-950 via-brand-800 to-teal-700',
  },
];

const AUTOPLAY_MS = 6000;

export function HeroSlider() {
  const { t, dir } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    []
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) next();
    }, AUTOPLAY_MS);
  }, [isPaused, next]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    startTimer();
  };

  const isRtl = dir === 'rtl';

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl container-px">
          <div className="max-w-2xl">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${
                  idx === current
                    ? 'block animate-fade-up'
                    : 'hidden'
                }`}
              >
                <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {t(slide.headlineKey)}
                </h1>
                <p className="mt-6 text-lg text-slate-200 sm:text-xl">
                  {t(slide.subtextKey)}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#solutions" className="btn-primary">
                    {t(slide.ctaKey)}
                    <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </a>
                  {slide.cta2Key && (
                    <a
                      href="#contact"
                      className="btn-secondary !border-white/40 !bg-white/10 !text-white hover:!bg-white/20 hover:!text-white"
                    >
                      {t(slide.cta2Key)}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={isRtl ? next : prev}
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 lg:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={isRtl ? prev : next}
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 lg:right-8"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="group relative h-2 overflow-hidden rounded-full bg-white/30 transition-all duration-500"
            style={{ width: idx === current ? 40 : 12 }}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx === current && (
              <span
                key={current}
                className="absolute inset-0 bg-white"
                style={{
                  animation: `shimmer ${AUTOPLAY_MS}ms linear`,
                  transformOrigin: isRtl ? 'right' : 'left',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden flex-col items-center gap-2 text-white/60 lg:flex">
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
