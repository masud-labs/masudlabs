import {Link} from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Gamepad2,
  Layers,
  ShieldCheck,
  Smartphone,
  Wallet,
  Wrench,
} from 'lucide-react';
import {AppCard} from '../components/AppCard';
import {HeroIllustration} from '../components/HeroIllustration';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {getFeaturedApps} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';

const WHAT_WE_BUILD = [
  {
    index: '01',
    title: 'Android Applications',
    description:
      'Native-feeling mobile software built around clean interfaces, predictable navigation, and modern Android standards.',
    icon: Smartphone,
    span: 'lg:col-span-2',
  },
  {
    index: '02',
    title: 'Productivity Tools',
    description:
      'Focused tools for organizing schedules, activities, and personal notes without visual clutter.',
    icon: Layers,
    span: 'lg:col-span-1',
  },
  {
    index: '03',
    title: 'Finance Applications',
    description:
      'Practical personal money management utilities designed for tracking income, expenses, and balances clearly.',
    icon: Wallet,
    span: 'lg:col-span-1',
  },
  {
    index: '04',
    title: 'Mobile Games',
    description:
      'Approachable puzzle and casual game experiences crafted with crisp feedback and progressive levels.',
    icon: Gamepad2,
    span: 'lg:col-span-1',
  },
  {
    index: '05',
    title: 'Digital Utilities',
    description:
      'Lightweight companion tools and everyday utilities built to solve real workflow problems cleanly.',
    icon: Wrench,
    span: 'lg:col-span-1',
  },
];

const WHY_MASUD_LABS = [
  {
    title: 'User-Focused Design',
    description:
      'Every screen and interaction is structured to keep daily tasks straightforward and legible on mobile and desktop.',
  },
  {
    title: 'Reliable Functionality',
    description:
      'We prioritize stable core workflows, predictable state handling, and maintainable software architecture over hype.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Applications evolve methodically from concept to testing and release based on real usability needs.',
  },
  {
    title: 'Privacy-Conscious Development',
    description:
      'Each product maintains its own transparent privacy policy, permission disclosures, and clear data deletion guidance.',
  },
];

export function HomePage() {
  const featuredApps = getFeaturedApps();

  usePageMeta({
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    path: '/',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.brandName,
        description: SITE_CONFIG.defaultDescription,
        url: buildCanonicalUrl('/'),
        email: SITE_CONFIG.supportEmail,
        contactPoint: {
          '@type': 'ContactPoint',
          email: SITE_CONFIG.supportEmail,
          contactType: 'customer support',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.brandName,
        url: buildCanonicalUrl('/'),
      },
    ],
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                {SITE_CONFIG.brandName} · {SITE_CONFIG.tagline}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-slate-900 dark:text-white max-w-2xl">
                Building Digital Experiences That Matter.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
                Masud Labs creates useful, innovative, and thoughtfully designed
                applications that make everyday digital life simpler.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/apps"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition-colors whitespace-nowrap shrink-0"
                >
                  Explore Our Apps
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0D1322] hover:border-violet-500/50 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0"
                >
                  About Masud Labs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* A. Featured Applications */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Applications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Current and upcoming Android applications from Masud Labs, each
              with dedicated documentation and privacy transparency.
            </p>
          </div>
          <Link
            to="/apps"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors whitespace-nowrap shrink-0"
          >
            View All Applications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      {/* B. What We Build */}
      <section className="border-y border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-[#090E1C]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              What We Build
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              A focused portfolio of mobile software spanning personal finance,
              daily organization, utilities, and casual entertainment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_BUILD.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.index}
                  className={`${item.span} rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6 sm:p-7 flex flex-col justify-between gap-6`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-medium text-cyan-600 dark:text-cyan-400 tabular-nums">
                      {item.index}
                    </span>
                    <IconComponent
                      className="w-5 h-5 text-slate-400 dark:text-slate-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* C. Why Masud Labs & D. Development Philosophy */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Development Philosophy */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>Development Philosophy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Practical Software Built With Clarity and Restraint.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Masud Labs focuses on building useful, accessible, and practical
              digital products. Instead of chasing bloated feature checklists, we
              design each application around a clear everyday problem—keeping
              interfaces legible, dependencies minimal, and user expectations
              honest.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Every application hosted on this platform receives dedicated
              documentation, explicit privacy disclosures, terms of service, and
              clear support channels before reaching users.
            </p>
            <div className="pt-2">
              <Link
                to="/legal"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                Visit Legal &amp; Privacy Center
              </Link>
            </div>
          </div>

          {/* Why Masud Labs */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_MASUD_LABS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-6"
              >
                <p className="font-mono text-xs text-slate-400 dark:text-slate-500 tabular-nums">
                  0{idx + 1}.
                </p>
                <h3 className="mt-3 font-display text-base font-semibold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Call to Action */}
      <section className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-[#090E1C]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Discover Apps Built for Everyday Life.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Browse the complete Masud Labs application directory, review
                product documentation, or reach out directly to our support
                email.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/apps"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-6 py-3 text-sm font-semibold text-white transition-colors whitespace-nowrap shrink-0"
              >
                Browse Directory
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent hover:border-violet-500/50 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 transition-colors whitespace-nowrap shrink-0"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
