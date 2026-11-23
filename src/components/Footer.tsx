import {Link} from 'react-router-dom';
import {Mail} from 'lucide-react';
import {SITE_CONFIG} from '../config/site';
import {APPS_DATA} from '../data/apps';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#080D1A]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white"
            >
              {SITE_CONFIG.brandName}
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {SITE_CONFIG.tagline}
            </p>
            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              className="inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors break-all"
            >
              <Mail className="w-4 h-4 shrink-0 text-violet-600 dark:text-violet-400" />
              <span>{SITE_CONFIG.supportEmail}</span>
            </a>

            {SITE_CONFIG.socialLinks.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-3">
                {SITE_CONFIG.socialLinks.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Navigation */}
          <div>
            <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
              Platform
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Applications Directory
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  About Masud Labs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
              Applications
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {APPS_DATA.map((app) => (
                <li key={app.id}>
                  <Link
                    to={`/apps/${app.slug}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h2 className="font-display text-sm font-semibold text-slate-900 dark:text-slate-100">
              Legal &amp; Trust
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/legal"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Legal Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/data-deletion"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Data Deletion Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <p>Independent Mobile &amp; Software Development Platform</p>
        </div>
      </div>
    </footer>
  );
}
