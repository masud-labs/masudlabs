import {Link, useParams} from 'react-router-dom';
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe,
  ImageOff,
  Mail,
  Shield,
  Trash2,
} from 'lucide-react';
import {AppIcon} from '../components/AppIcon';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {getAppBySlug} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';
import {NotFoundPage} from './NotFoundPage';

export function AppDetailPage() {
  const {slug} = useParams<{slug: string}>();
  const app = getAppBySlug(slug);

  usePageMeta({
    title: app
      ? `${app.name} — ${SITE_CONFIG.brandName}`
      : `Application Not Found — ${SITE_CONFIG.brandName}`,
    description: app
      ? app.shortDescription
      : 'The requested Masud Labs application could not be found.',
    path: app ? `/apps/${app.slug}` : '/apps',
    structuredData: app
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: app.name,
          description: app.longDescription,
          applicationCategory: app.category,
          operatingSystem: app.platform,
          url: buildCanonicalUrl(`/apps/${app.slug}`),
          ...(app.version ? {softwareVersion: app.version} : {}),
          author: {
            '@type': 'Organization',
            name: SITE_CONFIG.brandName,
            email: SITE_CONFIG.supportEmail,
          },
        }
      : undefined,
  });

  if (!app) {
    return <NotFoundPage />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
      >
        <Link
          to="/apps"
          className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Apps
        </Link>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="text-slate-900 dark:text-slate-200 font-medium truncate">
          {app.name}
        </span>
      </nav>

      {/* App Header Card */}
      <section className="mt-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <AppIcon
              iconKey={app.iconKey}
              iconUrl={app.iconUrl}
              accent={app.accent}
              name={app.name}
              size="lg"
            />
            <div className="space-y-3">
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {app.name}
              </h1>

              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
                <span>{app.category}</span>
                <span aria-hidden="true">·</span>
                <span>{app.platform}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-violet-600 dark:text-violet-400">
                  {app.status}
                </span>
                {app.version && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-xs tabular-nums">
                      Version {app.version}
                    </span>
                  </>
                )}
                {app.minimumAndroidVersion && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-xs tabular-nums">
                      Android {app.minimumAndroidVersion}+
                    </span>
                  </>
                )}
              </div>

              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
                {app.longDescription}
              </p>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            {app.playStoreUrl && (
              <a
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition-colors whitespace-nowrap"
              >
                Get on Google Play
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {app.websiteUrl && (
              <a
                href={app.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-violet-500/50 transition-colors whitespace-nowrap"
              >
                <Globe className="w-4 h-4" />
                Official Website
              </a>
            )}
            <Link
              to={`/contact?app=${app.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-violet-500/50 transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </Link>
          </div>
        </div>

        {!app.playStoreUrl && (
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Store availability notice: This application is currently{' '}
            <strong className="font-medium text-slate-700 dark:text-slate-200">
              {app.status}
            </strong>
            . Official Google Play Store download links will be published here
            only when the release goes live.
          </div>
        )}
      </section>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Column: Screenshots, Features, Release Notes */}
        <div className="lg:col-span-8 space-y-10">
          {/* Screenshots Gallery */}
          <section aria-labelledby="screenshots-heading">
            <h2
              id="screenshots-heading"
              className="font-display text-xl font-semibold text-slate-900 dark:text-white"
            >
              Screenshots Gallery
            </h2>
            {app.screenshots.length > 0 ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {app.screenshots.map((shot, idx) => (
                  <figure
                    key={`${shot.src}-${idx}`}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] overflow-hidden"
                  >
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover"
                    />
                    {shot.caption && (
                      <figcaption className="px-4 py-3 text-xs text-slate-600 dark:text-slate-400">
                        {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-[#0D1322]/60 p-8 text-center">
                <ImageOff
                  className="w-7 h-7 mx-auto text-slate-400 dark:text-slate-500"
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-200">
                  Screenshots Awaiting Publication
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Verified interface screenshots will be added here once{' '}
                  {app.name} enters public beta or production release.
                </p>
              </div>
            )}
          </section>

          {/* Features & Scope */}
          <section aria-labelledby="features-heading">
            <h2
              id="features-heading"
              className="font-display text-xl font-semibold text-slate-900 dark:text-white"
            >
              Features &amp; Development Scope
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {app.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">
                      {feature.state === 'implemented'
                        ? 'Implemented'
                        : 'Planned Scope'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Release Notes (only rendered when available) */}
          {app.releaseNotes && app.releaseNotes.length > 0 && (
            <section aria-labelledby="release-notes-heading">
              <h2
                id="release-notes-heading"
                className="font-display text-xl font-semibold text-slate-900 dark:text-white"
              >
                Release Notes
              </h2>
              <div className="mt-4 space-y-4">
                {app.releaseNotes.map((note) => (
                  <div
                    key={note.version}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white tabular-nums">
                        v{note.version}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                        {note.date}
                      </span>
                    </div>
                    <ul className="mt-3 list-disc list-inside space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                      {note.changes.map((change) => (
                        <li key={change}>{change}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar: Technical Details & Legal Links */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">
              Application Metadata
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4 py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <dt className="text-slate-500 dark:text-slate-400">Developer</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100">
                  {SITE_CONFIG.brandName}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <dt className="text-slate-500 dark:text-slate-400">Category</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100">
                  {app.category}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <dt className="text-slate-500 dark:text-slate-400">Platform</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100">
                  {app.platform}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                <dt className="text-slate-500 dark:text-slate-400">Status</dt>
                <dd className="font-medium text-violet-600 dark:text-violet-400">
                  {app.status}
                </dd>
              </div>
              {app.version && (
                <div className="flex justify-between gap-4 py-1.5 border-b border-slate-100 dark:border-slate-800/80">
                  <dt className="text-slate-500 dark:text-slate-400">Version</dt>
                  <dd className="font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                    {app.version}
                  </dd>
                </div>
              )}
              {app.minimumAndroidVersion && (
                <div className="flex justify-between gap-4 py-1.5">
                  <dt className="text-slate-500 dark:text-slate-400">
                    Min. Android
                  </dt>
                  <dd className="font-mono text-slate-900 dark:text-slate-100 tabular-nums">
                    Android {app.minimumAndroidVersion}+
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">
              Legal &amp; Support Links
            </h2>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
              Dedicated compliance documentation for {app.name}.
            </p>
            <div className="mt-4 space-y-2">
              <Link
                to={`/apps/${app.slug}/privacy-policy`}
                className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  Privacy Policy
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                to={`/apps/${app.slug}/terms-of-service`}
                className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <span className="inline-flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Terms of Service
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                to={`/apps/${app.slug}/data-deletion`}
                className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Trash2 className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  Data Deletion Instructions
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                to={`/contact?app=${app.slug}`}
                className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  App Support
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
