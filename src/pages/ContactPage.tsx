import React, {useEffect, useMemo, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {Bug, Check, Copy, ExternalLink, Mail, MessageSquare} from 'lucide-react';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {APPS_DATA} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';

const INQUIRY_TYPES = [
  'General Support',
  'Bug Report',
  'Feature Feedback',
  'Privacy / Legal Inquiry',
  'Data Deletion Request',
] as const;

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialAppSlug = searchParams.get('app') || 'general';

  const [selectedApp, setSelectedApp] = useState<string>(initialAppSlug);
  const [inquiryType, setInquiryType] = useState<string>('General Support');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailCopied, setEmailCopied] = useState(false);
  const [draftCopied, setDraftCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    const paramApp = searchParams.get('app');
    if (paramApp && APPS_DATA.some((a) => a.slug === paramApp)) {
      setSelectedApp(paramApp);
    }
  }, [searchParams]);

  usePageMeta({
    title: `Contact & Support — ${SITE_CONFIG.brandName}`,
    description:
      'Contact Masud Labs support via masudlabssupport@gmail.com for application assistance, bug reports, feedback, and privacy inquiries.',
    path: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: `Contact & Support — ${SITE_CONFIG.brandName}`,
      url: buildCanonicalUrl('/contact'),
      mainEntity: {
        '@type': 'Organization',
        name: SITE_CONFIG.brandName,
        email: SITE_CONFIG.supportEmail,
      },
    },
  });

  const selectedAppName = useMemo(() => {
    if (selectedApp === 'general') return 'Masud Labs Platform';
    const found = APPS_DATA.find((a) => a.slug === selectedApp);
    return found ? found.name : 'Masud Labs Platform';
  }, [selectedApp]);

  const formattedSubject = useMemo(() => {
    const base = `[${inquiryType}] ${selectedAppName}`;
    return subject.trim() ? `${base}: ${subject.trim()}` : base;
  }, [inquiryType, selectedAppName, subject]);

  const formattedBody = useMemo(() => {
    return [
      `Application: ${selectedAppName}`,
      `Inquiry Type: ${inquiryType}`,
      '',
      message.trim() || '(Please describe your question, bug report, or feedback here.)',
    ].join('\n');
  }, [selectedAppName, inquiryType, message]);

  const mailtoHref = useMemo(() => {
    return `mailto:${SITE_CONFIG.supportEmail}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;
  }, [formattedSubject, formattedBody]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.supportEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  const handleCopyDraft = async () => {
    try {
      await navigator.clipboard.writeText(
        `To: ${SITE_CONFIG.supportEmail}\nSubject: ${formattedSubject}\n\n${formattedBody}`
      );
      setDraftCopied(true);
      setTimeout(() => setDraftCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setValidationError('Please enter your message before opening your email client.');
      return;
    }
    setValidationError(null);
    window.location.href = mailtoHref;
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Contact &amp; Support
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
          Need help with a {SITE_CONFIG.brandName} application, want to report a
          bug, or have a privacy question? Reach us directly by email.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Direct Mailto Composer */}
        <section className="lg:col-span-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Compose Support Email
          </h2>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
            Because this platform is statically hosted without a backend server,
            this helper prepares a formatted message and opens your local email
            client directly.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-app"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Application
                </label>
                <select
                  id="contact-app"
                  value={selectedApp}
                  onChange={(e) => setSelectedApp(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#060913] px-3.5 text-sm text-slate-900 dark:text-slate-100 focus:border-violet-500 focus:outline-none"
                >
                  <option value="general">General / Website</option>
                  {APPS_DATA.map((app) => (
                    <option key={app.id} value={app.slug}>
                      {app.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-type"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Topic
                </label>
                <select
                  id="contact-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#060913] px-3.5 text-sm text-slate-900 dark:text-slate-100 focus:border-violet-500 focus:outline-none"
                >
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Subject Summary (Optional)
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Short summary of your inquiry"
                className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#060913] px-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                placeholder="Describe your question, device details, or feedback..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#060913] p-3.5 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none"
              />
              {validationError && (
                <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">
                  {validationError}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                Open in Email Client
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-violet-500/50 transition-colors whitespace-nowrap"
              >
                {draftCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    Copied Draft
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Message
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Right Sidebar: Direct Email, Bug Reporting, App Links */}
        <aside className="lg:col-span-5 space-y-6">
          {/* Direct Email Box */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 space-y-4">
            <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">
              Direct Developer Support Email
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Send an email directly from any mail provider:
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#060913] px-4 py-3">
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline break-all"
              >
                {SITE_CONFIG.supportEmail}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy support email address"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bug Report Guidance */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Bug className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <h2 className="font-display text-base font-semibold">
                Bug Report Guidance
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              To help us investigate issues efficiently, please include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Application name and version (if installed)</li>
              <li>Device model and Android OS version</li>
              <li>Steps to reproduce the behavior</li>
              <li>What happened versus what you expected</li>
            </ul>
          </div>

          {/* Feedback & App-specific support links */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <MessageSquare className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <h2 className="font-display text-base font-semibold">
                Application-Specific Resources
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Feedback on usability or feature suggestions is always welcome.
              Review product pages and policies below:
            </p>
            <ul className="space-y-2 pt-1 text-sm">
              {APPS_DATA.map((app) => (
                <li
                  key={app.id}
                  className="flex items-center justify-between gap-2 py-1.5 border-b last:border-b-0 border-slate-100 dark:border-slate-800/80"
                >
                  <Link
                    to={`/apps/${app.slug}`}
                    className="font-medium text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {app.name}
                  </Link>
                  <Link
                    to={`/apps/${app.slug}/data-deletion`}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    Data Deletion
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
