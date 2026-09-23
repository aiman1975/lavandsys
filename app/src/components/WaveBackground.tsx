export function WaveBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft glow blobs */}
      <div className="absolute -top-32 -end-32 h-[480px] w-[480px] rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-600/10" />
      <div className="absolute -bottom-40 -start-32 h-[420px] w-[420px] rounded-full bg-teal-300/30 blur-3xl dark:bg-teal-600/10" />

      {/* Flowing wave layers */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[55%] w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3377f6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#12a294" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8ec0ff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#52d8c4" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient1)"
          d="M0,180 C280,260 480,80 760,140 C1040,200 1200,320 1440,240 L1440,400 L0,400 Z"
        />
        <path
          fill="url(#waveGradient2)"
          d="M0,260 C320,180 560,320 860,240 C1120,170 1280,280 1440,220 L1440,400 L0,400 Z"
        />
      </svg>
    </div>
  );
}
