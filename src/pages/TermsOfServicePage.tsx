import {Link, useParams} from 'react-router-dom';
import {AlertCircle, ArrowLeft, ChevronRight, Mail} from 'lucide-react';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {getAppBySlug} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';
import {NotFoundPage} from './NotFoundPage';

export function TermsOfServicePage() {
  const {slug} = useParams<{slug?: string}>();
  const isAppScoped = Boolean(slug);
  const app = slug ? getAppBySlug(slug) : undefined;

  const canonicalPath = isAppScoped
    ? `/apps/${slug}/terms-of-service`
    : '/terms-of-service';

  usePageMeta({
    title:
      isAppScoped && app
        ? `Terms of Service — ${app.name} | ${SITE_CONFIG.brandName}`
        : `Terms of Service — ${SITE_CONFIG.brandName}`,
    description:
      isAppScoped && app
        ? `Terms of Service for ${app.name} by ${SITE_CONFIG.brandName}.`
        : `Terms of Service for using the ${SITE_CONFIG.brandName} website.`,
    path: canonicalPath,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name:
        isAppScoped && app
          ? `Terms of Service — ${app.name}`
          : `Terms of Service — ${SITE_CONFIG.brandName}`,
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
            Website Terms of Service
          </span>
        </nav>

        <header className="mt-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Website Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Governs access to the {SITE_CONFIG.brandName} platform website. For
            individual application terms, visit the{' '}
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the {SITE_CONFIG.brandName} website, you agree to
              these Terms of Service and applicable laws.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              2. Permitted Use
            </h2>
            <p>
              You may browse public documentation, application directories, and
              support resources for lawful informational purposes. Automated
              scraping that disrupts service availability is prohibited.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              3. Intellectual Property
            </h2>
            <p>
              The {SITE_CONFIG.brandName} name, tagline, visual designs, and
              documentation remain the intellectual property of{' '}
              {SITE_CONFIG.brandName}.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              4. Disclaimer &amp; Contact
            </h2>
            <p>
              This website and product previews for in-development software are
              provided on an &ldquo;AS IS&rdquo; basis. Contact{' '}
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="text-violet-600 dark:text-violet-400 hover:underline"
              >
                {SITE_CONFIG.supportEmail}
              </a>{' '}
              with any questions.
            </p>
          </section>
        </div>
      </div>
    );
  }

  const terms = app.termsOfService;

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
          Terms of Service
        </span>
      </nav>

      <header className="mt-6 pb-8 border-b border-slate-200 dark:border-slate-800 space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Terms of Service: {app.name}
        </h1>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>Developer: {SITE_CONFIG.brandName}</span>
          <span aria-hidden="true">·</span>
          <span>Status: {app.status}</span>
          {terms.lastUpdated && (
            <>
              <span aria-hidden="true">·</span>
              <span>Last Updated: {terms.lastUpdated}</span>
            </>
          )}
        </div>

        {terms.isDraftNotice && (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <p>
              <strong>Legal Review Notice:</strong> These Terms of Service are
              editable starter legal text prepared for {app.name} and should be
              reviewed prior to public release.
            </p>
          </div>
        )}
      </header>

      <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>{terms.acceptanceOfTerms}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            2. Permitted Use
          </h2>
          <p>{terms.permittedUse}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {terms.userResponsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            4. Intellectual Property
          </h2>
          <p>{terms.intellectualProperty}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            5. Service Availability
          </h2>
          <p>{terms.serviceAvailability}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            6. Third-Party Services
          </h2>
          <p>{terms.thirdPartyServices}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            7. Disclaimer
          </h2>
          <p>{terms.disclaimer}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            8. Limitation of Liability
          </h2>
          <p>{terms.limitationOfLiability}</p>
        </section>

        <section className="space-y-2.5">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            9. Changes to Terms
          </h2>
          <p>{terms.changesToTerms}</p>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            10. Contact Details
          </h2>
          <p>
            If you have questions regarding these Terms of Service for{' '}
            {app.name}, contact {SITE_CONFIG.brandName}:
          </p>
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(
              `Terms Inquiry — ${app.name}`
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
