import {Link} from 'react-router-dom';
import {ArrowUpRight, ExternalLink} from 'lucide-react';
import {AppRecord} from '../types/app';
import {AppIcon} from './AppIcon';

interface AppCardProps {
  app: AppRecord;
}

const STATUS_TEXT_COLOR: Record<AppRecord['status'], string> = {
  Published: 'text-emerald-600 dark:text-emerald-400',
  Beta: 'text-cyan-600 dark:text-cyan-400',
  'In Development': 'text-violet-600 dark:text-violet-400',
  'Coming Soon': 'text-slate-600 dark:text-slate-400',
};

export function AppCard({app}: AppCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0D1322] p-6 transition-colors duration-200 hover:border-violet-500/40 dark:hover:border-violet-500/40">
      <div>
        <div className="flex items-start justify-between gap-4">
          <AppIcon
            iconKey={app.iconKey}
            iconUrl={app.iconUrl}
            accent={app.accent}
            name={app.name}
            size="md"
          />
          <span
            className={`text-xs font-medium whitespace-nowrap shrink-0 ${STATUS_TEXT_COLOR[app.status]}`}
          >
            {app.status}
          </span>
        </div>

        <div className="mt-5">
          <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            <Link
              to={`/apps/${app.slug}`}
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {app.name}
            </Link>
          </h3>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <span>{app.category}</span>
            <span aria-hidden="true">·</span>
            <span>{app.platform}</span>
            {app.version && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">v{app.version}</span>
              </>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {app.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/apps/${app.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors whitespace-nowrap shrink-0"
        >
          View Details
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {app.playStoreUrl && (
          <a
            href={app.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            Google Play
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
