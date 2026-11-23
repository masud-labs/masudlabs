import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from './components/Layout';
import {ScrollToTop} from './components/ScrollToTop';
import {getBasePath} from './config/site';
import {ThemeProvider} from './context/ThemeContext';
import {AboutPage} from './pages/AboutPage';
import {AppDetailPage} from './pages/AppDetailPage';
import {AppsPage} from './pages/AppsPage';
import {ContactPage} from './pages/ContactPage';
import {DataDeletionPage} from './pages/DataDeletionPage';
import {HomePage} from './pages/HomePage';
import {LegalCenterPage} from './pages/LegalCenterPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {PrivacyPolicyPage} from './pages/PrivacyPolicyPage';
import {TermsOfServicePage} from './pages/TermsOfServicePage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={getBasePath()}>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/apps/:slug" element={<AppDetailPage />} />
            <Route
              path="/apps/:slug/privacy-policy"
              element={<PrivacyPolicyPage />}
            />
            <Route
              path="/apps/:slug/terms-of-service"
              element={<TermsOfServicePage />}
            />
            <Route
              path="/apps/:slug/data-deletion"
              element={<DataDeletionPage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalCenterPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/data-deletion" element={<DataDeletionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
