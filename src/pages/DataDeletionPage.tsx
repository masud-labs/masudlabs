import {Link, useParams} from 'react-router-dom';
import {AlertCircle, ArrowLeft, ChevronRight, Mail} from 'lucide-react';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {APPS_DATA, getAppBySlug} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';
import {NotFoundPage} from './NotFoundPage';

export function DataDeletionPage() {
  const {slug} = useParams<{slug?: string}>();
  const isAppScoped = Boolean(slug);
  const app = slug ? getAppBySlug(slug) : undefined;

  const canonicalPath = isAppScoped
    ? `/apps/${slug}/data-deletion`
    : '/data-deletion';

  usePageMeta({
    title:
      isAppScoped && app
        ? `Data Deletion — ${app.name} | ${SITE_CONFIG.brandName}`
        : `Data Deletion Guide — ${SITE_CONFIG.brandName}`,
    description:
      isAppScoped && app
        ? `Instructions for requesting account and data deletion for ${app.name} by ${SITE_CONFIG.brandName}.`
        : `General guide for requesting account and personal data deletion across ${SITE_CONFIG.brandName} applications.`,
    path: canonicalPath,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name:
        isAppScoped && app
          ? `Data Deletion — ${app.name}`
          : `Data Deletion Guide — ${SITE_CONFIG.brandName}`,
      url: buildCanonicalUrl(canonicalPath),
    },
  });

  if (isAppScoped && !app) {
    return <NotFoundPage />;
  }

  if (!app) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
        >
          <Link
            to="/legal"
            className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Legal Center
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-slate-900 dark:text-slate-200 font-medium">
            Data Deletion Guide
          </span>
        </nav>

        <header className="mt-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Account &amp; Data Deletion Guide
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            How users can delete local data or request deletion of cloud
            records associated with {SITE_CONFIG.brandName} applications.
          </p>
        </header>

        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Requesting Account or Personal Data Deletion
            </h2>
            <p>
              To request deletion of any account records, cloud backups, or
              support correspondence associated with a {SITE_CONFIG.brandName}{' '}
              application, email{' '}
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(
                  'Data Deletion Request — Masud Labs'
                )}`}
                className="font-medium text-violet-600 dark:text-violet-400 hover:underline"
              >
                {SITE_CONFIG.supportEmail}
              </a>{' '}
              with the application name and the account identifier (such as your
              Google Sign-In email address, if applicable).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              App-Specific Deletion Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APPS_DATA.map((item) => (
                <Link
                  key={item.id}
                  to={`/apps/${item.slug}/data-deletion`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-4 hover:border-violet-500/40 transition-colors"
                >
                  <div>
                    <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Deletion instructions
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  const deletion = app.dataDeletion;
  const deletionMailto = `mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(
    `Data Deletion Request — ${app.name}`
  )}&body=${encodeURIComponent(
    `Application: ${app.name}\nRequest Type: Account / Personal Data Deletion\nAccount Email (if applicable):\nDetails:\n`
  )}`;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
      >
        <Link
          to={`/apps/${app.slug}`}
          className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {app.name}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="text-slate-900 dark:text-slate-200 font-medium">
          Data Deletion
        </span>
      </nav>

      <header className="mt-6 pb-8 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Data Deletion Instructions: {app.name}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Developer: {SITE_CONFIG.brandName} · Support:{' '}
          {SITE_CONFIG.supportEmail}
        </p>

        {deletion.isDraftNotice && (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <p>
              <strong>Pre-Release Documentation Notice:</strong> {app.name} is
              currently {app.status.toLowerCase()}. No automated self-service
              cloud deletion endpoint is claimed unless explicitly implemented
              and verified in a released build.
            </p>
          </div>
        )}
      </header>

      <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            1. How to Request Account Deletion
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {deletion.accountDeletionInstructions.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            2. How to Request Personal Data Deletion
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {deletion.personalDataDeletionInstructions.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            3. How Cloud Data Is Handled
          </h2>
          <p>{deletion.cloudDataHandling}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            4. Locally Stored Data
          </h2>
          <p>{deletion.localDataHandling}</p>
        </section>

        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 space-y-4">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            5. Contact Support for Deletion Assistance
          </h2>
          <p>{deletion.supportNotes}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={deletionMailto}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              Email Deletion Request
            </a>
            <Link
              to={`/apps/${app.slug}/privacy-policy`}
              className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              Read {app.name} Privacy Policy
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
