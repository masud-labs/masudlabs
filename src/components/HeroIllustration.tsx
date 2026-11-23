export function HeroIllustration() {
  return (
    <div
      className="relative w-full aspect-[4/3] lg:aspect-square max-w-[540px] mx-auto select-none"
      aria-hidden="true"
    >
      {/* Soft radial atmosphere */}
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-500/15 dark:from-violet-500/20 dark:to-cyan-500/15 blur-2xl" />

      <div className="relative h-full w-full rounded-3xl border border-slate-200/80 dark:border-slate-800/90 bg-white/80 dark:bg-[#0B1020]/90 overflow-hidden shadow-sm">
        <svg
          viewBox="0 0 480 440"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="ml-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                className="stroke-slate-200/70 dark:stroke-slate-800/70"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="ml-violet-cyan" x1="80" y1="60" x2="400" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="ml-plane-a" x1="120" y1="90" x2="360" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="ml-plane-b" x1="160" y1="140" x2="340" y2="310" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Architectural grid */}
          <rect width="480" height="440" fill="url(#ml-grid)" />

          {/* Concentric precision rings */}
          <circle
            cx="240"
            cy="220"
            r="165"
            className="stroke-slate-200 dark:stroke-slate-800"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="240"
            cy="220"
            r="118"
            className="stroke-violet-500/25 dark:stroke-violet-400/25"
            strokeWidth="1.25"
          />

          {/* Isometric structural layers */}
          <path
            d="M240 68L372 144V296L240 372L108 296V144L240 68Z"
            fill="url(#ml-plane-a)"
            stroke="url(#ml-violet-cyan)"
            strokeOpacity="0.4"
            strokeWidth="1.25"
          />

          <path
            d="M240 112L334 166V274L240 328L146 274V166L240 112Z"
            fill="url(#ml-plane-b)"
            className="stroke-slate-300/80 dark:stroke-slate-700/90"
            strokeWidth="1.25"
          />

          {/* Core prism axes */}
          <path
            d="M240 68V372M108 144L372 296M372 144L108 296"
            className="stroke-slate-300/60 dark:stroke-slate-700/60"
            strokeWidth="1"
          />

          {/* Central Masud Labs geometric monogram core */}
          <rect
            x="186"
            y="166"
            width="108"
            height="108"
            rx="24"
            className="fill-white/95 dark:fill-[#0F172A]/95 stroke-violet-500/40"
            strokeWidth="1.5"
          />
          <path
            d="M214 246V194L240 218L266 194V246"
            stroke="url(#ml-violet-cyan)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Orbital anchor nodes */}
          <circle cx="240" cy="68" r="5" fill="#8B5CF6" />
          <circle cx="372" cy="144" r="5" fill="#06B6D4" />
          <circle cx="372" cy="296" r="5" fill="#8B5CF6" />
          <circle cx="240" cy="372" r="5" fill="#06B6D4" />
          <circle cx="108" cy="296" r="5" fill="#8B5CF6" />
          <circle cx="108" cy="144" r="5" fill="#06B6D4" />

          {/* Corner architectural registration marks */}
          <path
            d="M28 42V28H42M438 28H452V42M28 398V412H42M438 412H452V398"
            className="stroke-slate-400/60 dark:stroke-slate-600"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
