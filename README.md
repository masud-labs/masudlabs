# Masud Labs — Official Developer Platform

Official website, application directory, and legal compliance center for **Masud Labs** (*Technology. Creativity. Innovation.*).

Built as a fully static, SEO-ready React + TypeScript + Vite application configured for GitHub Pages and future custom-domain deployment.

---

## Requirements

- **Node.js**: 20.x or newer recommended
- **npm**: 10.x or newer

---

## Installation & Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser.

3. Run TypeScript checks:

   ```bash
   npm run lint
   ```

4. Build the production static bundle:

   ```bash
   npm run build
   ```

   Preview the production build locally:

   ```bash
   npm run preview
   ```

---

## Managing Applications & Legal Content

All applications are managed from a single centralized configuration file:

- `src/data/apps.ts` — Add, edit, or publish applications (`Takalog Money Tracker`, `Activity Calendar / Notes`, `My Phone Remote Control`, `Candy Puzzle`, and unlimited future apps).
- `src/config/site.ts` — Configure brand details, support email (`masudlabssupport@gmail.com`), and optional social links.

When you add a new `AppRecord` to `APPS_DATA` in `src/data/apps.ts`, the website automatically generates:
- Directory card entry on `/apps`
- Featured spotlight on `/` (when `featured: true`)
- Dedicated landing page at `/apps/{slug}`
- Dedicated Privacy Policy at `/apps/{slug}/privacy-policy`
- Dedicated Terms of Service at `/apps/{slug}/terms-of-service`
- Dedicated Data Deletion page at `/apps/{slug}/data-deletion`
- Entry in the Legal Center (`/legal`), Footer, and Contact selector (`/contact`)

Remember to update `public/sitemap.xml` when adding new public routes or after setting your live URL.

---

## GitHub Repository & GitHub Pages Deployment

This project is preconfigured for a repository named **`masudlabs`** using GitHub Actions (`.github/workflows/deploy.yml`).

### 1. Push to GitHub

Create a new repository named `masudlabs` on GitHub, then push this project:

```bash
git init
git add .
git commit -m "Initial Masud Labs developer platform"
git branch -M main
git remote add origin https://github.com/<your-username>/masudlabs.git
git push -u origin main
```

### 2. Enable GitHub Pages via GitHub Actions

1. Open your repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or trigger the workflow manually from the **Actions** tab).
4. Once the workflow finishes, your site will be available at:
   `https://<your-username>.github.io/masudlabs/`

### 3. Direct URL & Refresh Support (`404.html`)

GitHub Pages serves `public/404.html` for nested SPA routes (such as `/masudlabs/apps/takalog-money-tracker/privacy-policy`). `public/404.html` and `index.html` automatically preserve and restore clean URLs without hash fragments, and automatically detect whether the site is hosted on `*.github.io/masudlabs/` or a custom root domain.

---

## Future Custom Domain Setup

When you purchase a custom domain (for example, `masudlabs.com`):

1. **Update Base Path**:
   In `.github/workflows/deploy.yml`, change:
   ```yaml
   VITE_BASE_PATH: /
   ```
   Optionally set the repository variable `VITE_SITE_URL` in **Settings → Secrets and variables → Actions → Variables** to `https://yourdomain.com`.

2. **Add CNAME (via GitHub Pages Settings)**:
   In **Settings → Pages → Custom domain**, enter your domain name and save. GitHub creates/updates the `CNAME` configuration.

3. **Configure DNS Records at Your Registrar**:
   - For an apex domain (`yourdomain.com`), configure `A` records pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - For `www` (`www.yourdomain.com`), configure a `CNAME` record pointing to `<your-username>.github.io`.

4. **Enable HTTPS**:
   After DNS propagates, return to **Settings → Pages** and check **Enforce HTTPS**.

5. **Update SEO Files**:
   - Replace `https://REPLACE_WITH_YOUR_DOMAIN` in `public/sitemap.xml` with your live URL.
   - Uncomment and update the `Sitemap:` line in `public/robots.txt`.

---

## Google Play & Google Auth Platform Readiness Notes

- Deploying on GitHub Pages makes your homepage and privacy policies publicly accessible, **but does not automatically verify domain ownership** in Google Search Console or approve Google OAuth verification.
- Once your live URL or custom domain is active:
  1. Verify ownership in **Google Search Console**.
  2. Submit your updated `sitemap.xml`.
  3. Review and finalize any `isDraftNotice` legal texts in `src/data/apps.ts` against each app's actual production behavior before publishing on Google Play or submitting OAuth consent verification.
