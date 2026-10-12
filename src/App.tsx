import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { DownloadPage } from './pages/DownloadPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { GuidePage } from './pages/GuidePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ReleasesPage } from './pages/ReleasesPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/releases" element={<ReleasesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
