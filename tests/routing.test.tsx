import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/components/layout/Layout';
import { HomePage } from '../src/pages/HomePage';
import { DownloadPage } from '../src/pages/DownloadPage';
import { FeaturesPage } from '../src/pages/FeaturesPage';
import { GuidePage } from '../src/pages/GuidePage';
import { PrivacyPage } from '../src/pages/PrivacyPage';
import { ReleasesPage } from '../src/pages/ReleasesPage';
import { NotFoundPage } from '../src/pages/NotFoundPage';

function renderWithRouter(initialRoute: string) {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
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
    </MemoryRouter>
  );
}

describe('Client-Side Routing', () => {
  it('navigates to Home page by default', () => {
    renderWithRouter('/');
    expect(screen.getByText('Take control of your money.')).toBeInTheDocument();
  });

  it('navigates to Download page at /download', () => {
    renderWithRouter('/download');
    expect(screen.getByText('Official Windows Distribution')).toBeInTheDocument();
    expect(screen.getByText('Personal.Money.Manager-1.0.0-x64.exe')).toBeInTheDocument();
  });

  it('navigates to Features page at /features', () => {
    renderWithRouter('/features');
    expect(screen.getByText('Engineered with Strict Accounting Integrity')).toBeInTheDocument();
    expect(screen.getByText(/1. Integer Paise Precision/i)).toBeInTheDocument();
  });

  it('navigates to Guide page at /guide', () => {
    renderWithRouter('/guide');
    expect(screen.getByText('Installation, Verification & Operating Guide')).toBeInTheDocument();
  });

  it('navigates to Privacy page at /privacy', () => {
    renderWithRouter('/privacy');
    expect(screen.getByText('Privacy Policy & Security Model')).toBeInTheDocument();
    expect(screen.getByText(/Core Privacy Guarantee/i)).toBeInTheDocument();
  });

  it('navigates to Releases page at /releases', () => {
    renderWithRouter('/releases');
    expect(screen.getByText('Release Notes & Distribution History')).toBeInTheDocument();
    expect(screen.getByText('Version 1.0.0')).toBeInTheDocument();
  });

  it('renders NotFoundPage on unknown route', () => {
    renderWithRouter('/unknown-random-route');
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
