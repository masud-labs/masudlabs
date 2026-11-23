import {useMemo, useState} from 'react';
import {RotateCcw, Search} from 'lucide-react';
import {AppCard} from '../components/AppCard';
import {buildCanonicalUrl, SITE_CONFIG} from '../config/site';
import {
  APP_CATEGORIES,
  APP_PLATFORMS,
  APP_STATUSES,
  APPS_DATA,
  getFeaturedApps,
} from '../data/apps';
import {usePageMeta} from '../hooks/usePageMeta';
import {AppCategory, AppPlatform, AppStatus} from '../types/app';

export function AppsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | AppCategory>(
    'All'
  );
  const [selectedPlatform, setSelectedPlatform] = useState<'All' | AppPlatform>(
    'All'
  );
  const [selectedStatus, setSelectedStatus] = useState<'All' | AppStatus>(
    'All'
  );

  usePageMeta({
    title: `Applications Directory — ${SITE_CONFIG.brandName}`,
    description:
      'Explore all Android applications, productivity tools, utilities, finance apps, and mobile games developed by Masud Labs.',
    path: '/apps',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `Applications Directory — ${SITE_CONFIG.brandName}`,
      description:
        'Official directory of applications and digital products created by Masud Labs.',
      url: buildCanonicalUrl('/apps'),
    },
  });

  const featuredApps = useMemo(() => getFeaturedApps(), []);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedPlatform !== 'All' ||
    selectedStatus !== 'All';

  const filteredApps = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return APPS_DATA.filter((app) => {
      const matchesQuery =
        query === '' ||
        app.name.toLowerCase().includes(query) ||
        app.shortDescription.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategory === 'All' || app.category === selectedCategory;
      const matchesPlatform =
        selectedPlatform === 'All' || app.platform === selectedPlatform;
      const matchesStatus =
        selectedStatus === 'All' || app.status === selectedStatus;

      return (
        matchesQuery && matchesCategory && matchesPlatform && matchesStatus
      );
    });
  }, [searchQuery, selectedCategory, selectedPlatform, selectedStatus]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedPlatform('All');
    setSelectedStatus('All');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Applications Directory
        </h1>
        <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
          Browse current and upcoming software built by {SITE_CONFIG.brandName}.
          Select any application for architecture details, screenshots, and
          legal documentation.
        </p>
      </div>

      {/* Search & Filters */}
      <section
        aria-label="Filter applications"
        className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-5 sm:p-6 space-y-6"
      >
        {/* Search Input + Platform/Status Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 relative">
            <label htmlFor="app-search" className="sr-only">
              Search applications by name
            </label>
            <Search
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="app-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search applications by name or topic..."
              className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#060913] pl-10 pr-4 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none"
            />
          </div>

          <div className="md:col-span-3">
            <label htmlFor="platform-filter" className="sr-only">
              Filter by platform
            </label>
            <select
              id="platform-filter"
              value={selectedPlatform}
              onChange={(e) =>
                setSelectedPlatform(e.target.value as 'All' | AppPlatform)
              }
              className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#060913] px-3.5 text-sm text-slate-900 dark:text-slate-100 focus:border-violet-500 focus:outline-none"
            >
              <option value="All">All Platforms</option>
              {APP_PLATFORMS.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="status-filter" className="sr-only">
              Filter by status
            </label>
            <select
              id="status-filter"
              value={selectedStatus}
              onChange={(e) =>
                setSelectedStatus(e.target.value as 'All' | AppStatus)
              }
              className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-[#060913] px-3.5 text-sm text-slate-900 dark:text-slate-100 focus:border-violet-500 focus:outline-none"
            >
              <option value="All">All Statuses</option>
              {APP_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Interactive Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div
            role="group"
            aria-label="Filter by category"
            className="flex flex-wrap items-center gap-1.5"
          >
            {(['All', ...APP_CATEGORIES] as const).map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Clear Filters
            </button>
          )}
        </div>
      </section>

      {/* Featured Highlight (shown when browsing unfiltered) */}
      {!hasActiveFilters && featuredApps.length > 0 && (
        <section className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              {featuredApps.length} featured
            </span>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredApps.map((app) => (
              <AppCard key={`featured-${app.id}`} app={app} />
            ))}
          </div>
        </section>
      )}

      {/* Full / Filtered Catalog */}
      <section className="mt-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            {hasActiveFilters ? 'Matching Applications' : 'All Applications'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            Showing {filteredApps.length} of {APPS_DATA.length}
          </p>
        </div>

        {filteredApps.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] p-10 text-center">
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              No matching applications found
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Try adjusting your search query or clearing the selected category,
              platform, or status filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Clear All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
