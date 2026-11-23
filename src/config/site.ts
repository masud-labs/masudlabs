export interface SocialLink {
  label: string;
  url: string;
  platform: 'github' | 'x' | 'linkedin' | 'youtube' | 'playstore';
}

export const SITE_CONFIG = {
  brandName: 'Masud Labs',
  legalEntityName: 'Masud Labs',
  tagline: 'Technology. Creativity. Innovation.',
  supportEmail: 'masudlabssupport@gmail.com',
  repositoryName: 'masudlabs',
  defaultTitle: 'Masud Labs — Technology. Creativity. Innovation.',
  defaultDescription:
    'Masud Labs creates useful, innovative, and thoughtfully designed Android applications, games, and digital products that make everyday digital life simpler.',
  /**
   * Add real social/store URLs here once published.
   * Empty array ensures no unverified or placeholder links appear in the UI.
   */
  socialLinks: [] as SocialLink[],
} as const;

/**
 * Resolves the configured base path (e.g. "/" or "/masudlabs/") without trailing slash
 * unless it is root "/".
 */
export function getBasePath(): string {
  return import.meta.env.BASE_URL || '/';
}

/**
 * Resolves the active site origin + base path dynamically so canonical URLs work
 * on GitHub Pages, custom domains, and local development without hardcoding
 * an unpurchased domain.
 */
export function getSiteUrl(): string {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/+$/, '');
  }
  if (typeof window !== 'undefined') {
    const base = getBasePath().replace(/\/+$/, '');
    return `${window.location.origin}${base}`;
  }
  return '';
}

export function buildCanonicalUrl(routePath: string): string {
  const baseUrl = getSiteUrl();
  const normalizedPath = routePath.startsWith('/') ? routePath : `/${routePath}`;
  if (!baseUrl) {
    return normalizedPath;
  }
  if (normalizedPath === '/') {
    return `${baseUrl}/`;
  }
  return `${baseUrl}${normalizedPath}`;
}
