import {Link} from 'react-router-dom';
import {ArrowRight, Mail} from 'lucide-react';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {usePageMeta} from '../hooks/usePageMeta';

const WHAT_WE_CREATE = [
  'Personal finance and money-tracking Android applications',
  'Calendar, activity organization, and note-taking productivity tools',
  'Companion mobile utilities designed for everyday tasks',
  'Accessible casual and puzzle games for Android devices',
];

const DEVELOPMENT_PRINCIPLES = [
  {
    index: '01',
    title: 'Practical Utility First',
    description:
      'Every product starts with a concrete everyday need. Features earn their place by making workflows clearer, not busier.',
  },
  {
    index: '02',
    title: 'Honest Product Communication',
    description:
      'In-development concepts are clearly labeled as such. We only document capabilities as live once they are implemented and verified.',
  },
  {
    index: '03',
    title: 'Transparent Privacy & Permissions',
    description:
      'Each application maintains its own privacy policy, explicit device permission disclosures, and clear data deletion instructions.',
  },
  {
    index: '04',
    title: 'Maintainable Architecture',
    description:
      'We design software with clean structure and thoughtful defaults so applications remain reliable and easy to support over time.',
  },
];

export function AboutPage() {
  usePageMeta({
    title: `About — ${SITE_CONFIG.brandName}`,
    description:
      'Learn about Masud Labs, an independent software development brand focused on building practical digital products and Android applications.',
    path: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: `About ${SITE_CONFIG.brandName}`,
      description:
        'Independent software development brand focused on practical Android applications and digital tools.',
      url: buildCanonicalUrl('/about'),
    },
  });

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
          {SITE_CONFIG.brandName} · {SITE_CONFIG.tagline}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Independent Software Craft for Everyday Digital Life.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {SITE_CONFIG.brandName} is an independent software development brand
          focused on building practical digital products, Android mobile
          applications, and approachable games.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-7 space-y-3">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            To create useful, thoughtfully structured software that helps people
            manage daily routines—from personal finances and schedules to
            lightweight utilities and games—without unnecessary friction or
            clutter.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-7 space-y-3">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            Our Vision
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            To grow a dependable catalog of digital products unified under a
            transparent developer identity—where users can always find clear
            documentation, honest status updates, and direct support.
          </p>
        </div>
      </section>

      {/* What We Create */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-7 sm:p-10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            What We Create
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Our current development roadmap spans multiple Android software
            categories:
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 dark:text-slate-200">
          {WHAT_WE_CREATE.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-[#060913]/60 px-4 py-3.5"
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <Link
            to="/apps"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline"
          >
            Explore the Applications Directory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Development Principles */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Our Development Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DEVELOPMENT_PRINCIPLES.map((principle) => (
            <div
              key={principle.index}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6"
            >
              <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 tabular-nums">
                {principle.index}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Contact Masud Labs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            For product inquiries, user support, or privacy questions, reach our
            developer support email directly.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
          >
            <Mail className="w-4 h-4" />
            {SITE_CONFIG.supportEmail}
          </a>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition-colors whitespace-nowrap shrink-0"
        >
          Support &amp; Contact Page
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
