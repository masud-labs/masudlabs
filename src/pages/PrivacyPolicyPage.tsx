import {Link, useParams} from 'react-router-dom';
import {AlertCircle, ArrowLeft, ChevronRight, Mail} from 'lucide-react';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {getAppBySlug} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';
import {NotFoundPage} from './NotFoundPage';

export function PrivacyPolicyPage() {
  const {slug} = useParams<{slug?: string}>();
  const isAppScoped = Boolean(slug);
  const app = slug ? getAppBySlug(slug) : undefined;

  const canonicalPath = isAppScoped
    ? `/apps/${slug}/privacy-policy`
    : '/privacy-policy';

  usePageMeta({
    title:
      isAppScoped && app
        ? `Privacy Policy — ${app.name} | ${SITE_CONFIG.brandName}`
        : `Privacy Policy — ${SITE_CONFIG.brandName}`,
    description:
      isAppScoped && app
        ? `Privacy Policy and data handling disclosures for ${app.name} by ${SITE_CONFIG.brandName}.`
        : `General website Privacy Policy for ${SITE_CONFIG.brandName}.`,
    path: canonicalPath,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name:
        isAppScoped && app
          ? `Privacy Policy — ${app.name}`
          : `Privacy Policy — ${SITE_CONFIG.brandName}`,
      url: buildCanonicalUrl(canonicalPath),
    },
  });

  if (isAppScoped && !app) {
    return <NotFoundPage />;
  }

  // General Masud Labs Website Privacy Policy
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
            Website Privacy Policy
          </span>
        </nav>

        <header className="mt-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Website Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Applies to the official {SITE_CONFIG.brandName} developer website.
            For individual Android applications, please consult each app’s
            dedicated privacy policy in the{' '}
            <Link
              to="/legal"
              className="text-violet-600 dark:text-violet-400 hover:underline"
            >
              Legal Center
            </Link>
            .
          </p>
        </header>

        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              1. Introduction
            </h2>
            <p>
              {SITE_CONFIG.brandName} operates this static developer website to
              present information about our applications, provide support
              resources, and publish legal documentation.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              2. Information Collected on This Website
            </h2>
            <p>
              This website does not require user registration, user accounts, or
              payment forms. A local browser preference is saved in{' '}
              <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                localStorage
              </code>{' '}
              solely to remember your chosen Light or Dark display theme.
            </p>
            <p>
              If you choose to email{' '}
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="text-violet-600 dark:text-violet-400 hover:underline"
              >
                {SITE_CONFIG.supportEmail}
              </a>
              , we receive the email address and message content you voluntarily
              send in order to respond to your support inquiry.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              3. Hosting &amp; Standard Server Logs
            </h2>
            <p>
              Static web hosting providers (such as GitHub Pages) may
              automatically process standard technical request metadata (such as
              IP addresses or browser user-agent strings) for security and
              content delivery under their respective privacy policies.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              4. Contact Information
            </h2>
            <p>
              Questions about this Privacy Policy can be directed to{' '}
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="text-violet-600 dark:text-violet-400 hover:underline"
              >
                {SITE_CONFIG.supportEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    );
  }

  const policy = app.privacyPolicy;

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
          Privacy Policy
        </span>
      </nav>

      <header className="mt-6 pb-8 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Privacy Policy: {app.name}
        </h1>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>Developer: {SITE_CONFIG.brandName}</span>
          <span aria-hidden="true">·</span>
          <span>Status: {app.status}</span>
          {policy.lastUpdated && (
            <>
              <span aria-hidden="true">·</span>
              <span>Last Updated: {policy.lastUpdated}</span>
            </>
          )}
        </div>

        {policy.isDraftNotice && (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <p>
              <strong>Pre-Release Legal Review Notice:</strong> {app.name} is
              currently {app.status.toLowerCase()}. Sections below document the
              planned data handling architecture and must be reviewed and
              confirmed against the final compiled application build prior to
              public store publication.
            </p>
          </div>
        )}
      </header>

      <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            1. Introduction
          </h2>
          <p>{policy.introduction}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            2. Information Collected
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {policy.informationCollected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            3. Information Processed
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {policy.informationProcessed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            4. Device Permissions
          </h2>
          <div className="space-y-3">
            {policy.devicePermissions.map((perm) => (
              <div
                key={perm.permission}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-4"
              >
                <p className="font-medium text-slate-900 dark:text-white text-sm">
                  {perm.permission}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {perm.purpose}
                </p>
              </div>
            ))}
          </div>
        </section>

        {policy.googleSignIn && (
          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              5. Google Sign-In
            </h2>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {policy.googleSignIn.applicable
                ? 'Configurable Integration'
                : 'Not Applicable in Current Scope'}
            </p>
            <p>{policy.googleSignIn.details}</p>
          </section>
        )}

        {policy.firebaseServices && (
          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              6. Firebase and Cloud Services
            </h2>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {policy.firebaseServices.applicable
                ? 'Configurable Integration'
                : 'Not Applicable in Current Scope'}
            </p>
            <p>{policy.firebaseServices.details}</p>
          </section>
        )}

        {policy.googleDriveApi && (
          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              7. Google Drive API Usage
            </h2>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {policy.googleDriveApi.applicable
                ? 'Configurable Integration (appDataFolder)'
                : 'Not Applicable in Current Scope'}
            </p>
            <p>{policy.googleDriveApi.details}</p>
          </section>
        )}

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            8. Data Storage and Security
          </h2>
          <p>{policy.dataStorageAndSecurity}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            9. Data Sharing
          </h2>
          <p>{policy.dataSharing}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            10. Data Retention
          </h2>
          <p>{policy.dataRetention}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            11. User Rights
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {policy.userRights.map((right) => (
              <li key={right}>{right}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            12. Account and Data Deletion
          </h2>
          <p>{policy.accountAndDataDeletion}</p>
          <p>
            View complete step-by-step instructions on the{' '}
            <Link
              to={`/apps/${app.slug}/data-deletion`}
              className="font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              {app.name} Data Deletion page
            </Link>
            .
          </p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            13. Children’s Privacy
          </h2>
          <p>{policy.childrensPrivacy}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            14. Policy Changes
          </h2>
          <p>{policy.policyChanges}</p>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            15. Contact Information
          </h2>
          <p>
            For questions regarding this Privacy Policy or {app.name}, please
            contact {SITE_CONFIG.brandName}:
          </p>
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(
              `Privacy Inquiry — ${app.name}`
            )}`}
            className="inline-flex items-center gap-2 font-medium text-violet-600 dark:text-violet-400 hover:underline"
          >
            <Mail className="w-4 h-4" />
            {SITE_CONFIG.supportEmail}
          </a>
        </section>
      </div>
    </div>
  );
}
