import {useState} from 'react';
import {AppAccent, AppIconKey} from '../types/app';

interface AppIconProps {
  iconKey: AppIconKey;
  iconUrl?: string;
  accent: AppAccent;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_CLASSES: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'w-10 h-10 rounded-xl',
  md: 'w-12 h-12 rounded-2xl',
  lg: 'w-16 h-16 rounded-2xl',
};

const ACCENT_STYLES: Record<AppAccent, string> = {
  violet:
    'bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300 border-violet-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300 border-cyan-500/20',
  teal: 'bg-teal-500/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-300 border-teal-500/20',
  indigo:
    'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300 border-indigo-500/20',
};

export function AppIcon({
  iconKey,
  iconUrl,
  accent,
  name,
  size = 'md',
}: AppIconProps) {
  const [imgFailed, setImgFailed] = useState(false);

  if (iconUrl && !imgFailed) {
    return (
      <img
        src={iconUrl}
        alt={`${name} icon`}
        referrerPolicy="no-referrer"
        onError={() => setImgFailed(true)}
        className={`${SIZE_CLASSES[size]} object-cover border border-slate-200 dark:border-slate-800 shrink-0`}
      />
    );
  }

  return (
    <div
      className={`${SIZE_CLASSES[size]} ${ACCENT_STYLES[accent]} border flex items-center justify-center shrink-0`}
      aria-hidden="true"
    >
      {iconKey === 'takalog' && (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect
            x="5"
            y="8"
            width="22"
            height="16"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M5 13h22"
            stroke="currentColor"
            strokeWidth="2"
            strokeOpacity="0.45"
          />
          <path
            d="M19.5 18.5h4.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="11" cy="18.5" r="1.75" fill="currentColor" />
        </svg>
      )}
      {iconKey === 'calendar' && (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect
            x="5"
            y="7"
            width="22"
            height="19"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M11 4.5V8.5M21 4.5V8.5M5 12.5h22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="9.5" y="16" width="4" height="3.5" rx="1" fill="currentColor" />
          <path
            d="M16.5 17.75h6M10 22h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.65"
          />
        </svg>
      )}
      {iconKey === 'remote' && (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect
            x="9"
            y="4.5"
            width="14"
            height="23"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M14 23.5h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M13 13.5l3 2.5 3.5-4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {iconKey === 'candy' && (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect
            x="6"
            y="6"
            width="9"
            height="9"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="17"
            y="6"
            width="9"
            height="9"
            rx="2.5"
            fill="currentColor"
            fillOpacity="0.28"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="6"
            y="17"
            width="9"
            height="9"
            rx="2.5"
            fill="currentColor"
            fillOpacity="0.28"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="21.5"
            cy="21.5"
            r="4.5"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}
      {iconKey === 'default' && (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <path
            d="M16 5L26 10.5v11L16 27 6 21.5v-11L16 5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M16 16l10-5.5M16 16v11M16 16L6 10.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeOpacity="0.55"
          />
        </svg>
      )}
    </div>
  );
}
