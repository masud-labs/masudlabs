import {Link} from 'react-router-dom';
import {ChevronRight, FileText, Shield, Trash2} from 'lucide-react';
import {AppIcon} from '../components/AppIcon';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {APPS_DATA} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';

export function LegalCenterPage() {
  usePageMeta({
    title: `Legal Center — ${SITE_CONFIG.brandName}`,
    description:
      'Central legal hub for Masud Labs privacy policies, terms of service, and data deletion instructions across all applications.',
    path: '/legal',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `Legal Center — ${SITE_CONFIG.brandName}`,
      url: buildCanonicalUrl('/legal'),
    },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Legal &amp; Compliance Center
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
          Publicly accessible privacy policies, terms of service, and data
          deletion documentation for {SITE_CONFIG.brandName} and each individual
          application.
        </p>
      </div>

      {/* Platform-wide policies */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          Platform Documents
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/privacy-policy"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-5 hover:border-violet-500/40 transition-colors flex items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  Website Privacy Policy
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  General site privacy disclosures
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </Link>

          <Link
            to="/terms-of-service"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-5 hover:border-violet-500/40 transition-colors flex items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  Website Terms of Service
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  General platform usage terms
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </Link>

          <Link
            to="/data-deletion"
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-5 hover:border-violet-500/40 transition-colors flex items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <Trash2 className="w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                  Data Deletion Guide
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Account &amp; personal data removal
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </Link>
        </div>
      </section>

      {/* Per-Application Legal Documents */}
      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          Application-Specific Policies
        </h2>
        <div className="mt-5 space-y-4">
          {APPS_DATA.map((app) => (
            <div
              key={app.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <AppIcon
                  iconKey={app.iconKey}
                  iconUrl={app.iconUrl}
                  accent={app.accent}
                  name={app.name}
                  size="sm"
                />
                <div>
                  <Link
                    to={`/apps/${app.slug}`}
                    className="font-display text-base font-semibold text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {app.name}
                  </Link>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {app.category} · {app.platform} · {app.status}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={`/apps/${app.slug}/privacy-policy`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3.5 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/50 transition-colors whitespace-nowrap"
                >
                  <Shield className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                  Privacy Policy
                </Link>
                <Link
                  to={`/apps/${app.slug}/terms-of-service`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3.5 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/50 transition-colors whitespace-nowrap"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  Terms of Service
                </Link>
                <Link
                  to={`/apps/${app.slug}/data-deletion`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3.5 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/50 transition-colors whitespace-nowrap"
                >
                  <Trash2 className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  Data Deletion
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
