import {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {Menu, Moon, Sun, X} from 'lucide-react';
import {SITE_CONFIG} from '../config/site';
import {useTheme} from '../context/ThemeContext';

const NAV_ITEMS = [
  {label: 'Home', to: '/'},
  {label: 'Apps', to: '/apps'},
  {label: 'About', to: '/about'},
  {label: 'Contact', to: '/contact'},
];

export function Header() {
  const {theme, toggleTheme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-[#060913]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark (single line, no descriptor/badges) */}
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 shrink-0"
            fill="none"
            aria-hidden="true"
          >
            <rect
              width="32"
              height="32"
              rx="8"
              className="fill-slate-900 dark:fill-[#0F172A]"
            />
            <path
              d="M8.5 22.5V9.5L16 16.5L23.5 9.5V22.5"
              stroke="url(#header-ml-grad)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="header-ml-grad"
                x1="8.5"
                y1="9.5"
                x2="23.5"
                y2="22.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <span>{SITE_CONFIG.brandName}</span>
        </Link>

        {/* Zone 2: Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({isActive}) =>
                `relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-violet-600 dark:text-violet-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`
              }
            >
              {({isActive}) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-violet-600 dark:bg-violet-400"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Theme Switcher + Mobile Drawer Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            title={
              theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] text-slate-700 dark:text-slate-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1322] text-slate-700 dark:text-slate-200 hover:border-violet-500/40 transition-colors shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1020] px-4 py-4"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({isActive}) =>
                  `flex items-center min-h-[44px] px-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-500/10 text-violet-700 dark:text-violet-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
