import {Link} from 'react-router-dom';
import {ArrowLeft, Home} from 'lucide-react';
import {SITE_CONFIG} from '../config/site';
import {usePageMeta} from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta({
    title: `Page Not Found — ${SITE_CONFIG.brandName}`,
    description: 'The requested page could not be found on Masud Labs.',
    path: '/404',
  });

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
      <p className="font-mono text-sm font-medium text-violet-600 dark:text-violet-400 tabular-nums">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        Page Not Found
      </h1>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
        The page or application route you requested does not exist or may have
        moved. Use the links below to return to the {SITE_CONFIG.brandName}{' '}
        directory.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
        <Link
          to="/apps"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-violet-500/50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Explore Apps
        </Link>
      </div>
    </div>
  );
}
