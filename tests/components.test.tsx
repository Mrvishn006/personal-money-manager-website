import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { HeroSection } from '../src/components/home/HeroSection';
import { ProductPreview } from '../src/components/home/ProductPreview';
import { FeatureGrid } from '../src/components/home/FeatureGrid';
import { HowItWorksSection } from '../src/components/home/HowItWorksSection';
import { AnalyticsShowcase } from '../src/components/home/AnalyticsShowcase';
import { FaqSection } from '../src/components/home/FaqSection';
import { DownloadCard } from '../src/components/download/DownloadCard';
import { VerificationGuide } from '../src/components/download/VerificationGuide';
import { SmartScreenGuide } from '../src/components/download/SmartScreenGuide';

describe('Layout and Home Components', () => {
  it('renders Header with navigation links, support, and download CTA', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Personal Money Manager')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Installation Guide')).toBeInTheDocument();
    expect(screen.getByText('Privacy & Security')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Releases')).toBeInTheDocument();
    expect(screen.getAllByText(/Download for Windows/i).length).toBeGreaterThan(0);
  });

  it('renders Footer with copyright year, verified local storage model, and disclaimer', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText(/2026 Personal Money Manager/i)).toBeInTheDocument();
    expect(screen.getByText(/Financial Tool Disclaimer:/i)).toBeInTheDocument();
    expect(screen.getByText(/Local SQLite Database/i)).toBeInTheDocument();
    expect(screen.getByText(/Cloudflare Pages/i)).toBeInTheDocument();
  });

  it('renders HeroSection with two-column layout, headline, and desktop mockup', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(screen.getByText('Simple. Secure. Powerful.')).toBeInTheDocument();
    expect(screen.getByText('Take control of your money.')).toBeInTheDocument();
    expect(
      screen.getByText(
        "Track expenses, manage money you've lent, monitor repayments, and understand your finances with a personal money manager for Windows."
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Windows 10 & 11')).toBeInTheDocument();
    expect(screen.getByText('100% Local Storage')).toBeInTheDocument();
    expect(screen.getByText('Native INR Support')).toBeInTheDocument();

    // Right-column mockup metrics
    expect(screen.getByText('Cash Balance')).toBeInTheDocument();
    expect(screen.getByText('Total Money Lent')).toBeInTheDocument();
    expect(screen.getByText('Outstanding Receivables')).toBeInTheDocument();
    expect(screen.getByText('₹85,400.00')).toBeInTheDocument();
    expect(screen.getAllByText('₹60,000.00').length).toBeGreaterThan(0);
  });

  it('renders FeatureGrid with 10 core financial and security features', () => {
    render(<FeatureGrid />);

    expect(screen.getByText('Expense Tracking')).toBeInTheDocument();
    expect(screen.getByText('Income Management')).toBeInTheDocument();
    expect(screen.getByText('Loan and Borrower Management')).toBeInTheDocument();
    expect(screen.getByText('Partial Repayments')).toBeInTheDocument();
    expect(screen.getByText('Overdue Tracking')).toBeInTheDocument();
    expect(screen.getByText('Financial Analytics')).toBeInTheDocument();
    expect(screen.getByText('Reports and CSV/Excel Export')).toBeInTheDocument();
    expect(screen.getByText('Reminders and Notifications')).toBeInTheDocument();
    expect(screen.getByText('Backup and Restore')).toBeInTheDocument();
    expect(screen.getByText('PIN/Password Protection')).toBeInTheDocument();
  });

  it('renders HowItWorksSection with 5 clear steps', () => {
    render(<HowItWorksSection />);

    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Download the Installer')).toBeInTheDocument();
    expect(screen.getByText('Install the Application')).toBeInTheDocument();
    expect(screen.getByText('Configure Security')).toBeInTheDocument();
    expect(screen.getByText('Record Income, Expenses & Loans')).toBeInTheDocument();
    expect(screen.getByText('View Reports & Insights')).toBeInTheDocument();
  });

  it('renders AnalyticsShowcase dark navy section with 4 preview cards', () => {
    render(<AnalyticsShowcase />);

    expect(screen.getByText('Visual Analytics Built for Financial Precision')).toBeInTheDocument();
    expect(screen.getByText('Monthly Expenses')).toBeInTheDocument();
    expect(screen.getByText('Cash Flow')).toBeInTheDocument();
    expect(screen.getByText('Outstanding Loans')).toBeInTheDocument();
    expect(screen.getByText('Repayment Allocation')).toBeInTheDocument();
    expect(screen.getByText(/Sample Data Notice:/i)).toBeInTheDocument();
  });

  it('renders ProductPreview with illustrative disclaimer and tab switching', () => {
    render(<ProductPreview />);

    expect(screen.getByText(/Illustrative interface preview/i)).toBeInTheDocument();
    expect(screen.getByText('₹85,400.00')).toBeInTheDocument();

    const borrowersTab = screen.getByText(/2. Borrower Portfolio/i);
    fireEvent.click(borrowersTab);
    expect(screen.getByText('Active Lending Portfolio')).toBeInTheDocument();
  });

  it('expands and collapses FAQ accordion items', () => {
    render(
      <MemoryRouter>
        <FaqSection />
      </MemoryRouter>
    );

    const questionButton = screen.getByText('Is Personal Money Manager free to use?');
    expect(questionButton).toBeInTheDocument();
    expect(screen.getByText(/Personal Money Manager is released as a free/i)).toBeInTheDocument();

    const secondQuestion = screen.getByText('Which operating systems and architectures are supported?');
    fireEvent.click(secondQuestion);
    expect(screen.getByText(/Windows 10 \(Version 1903 or later\)/i)).toBeInTheDocument();
  });

  it('renders DownloadCard with exact installer filename, verified hash, and download link', () => {
    render(
      <MemoryRouter>
        <DownloadCard />
      </MemoryRouter>
    );

    expect(screen.getByText('Personal Money Manager-1.0.0-x64.exe')).toBeInTheDocument();
    expect(screen.getByText('Windows 10 / Windows 11')).toBeInTheDocument();
    expect(screen.getByText(/SHA-256 Checksum Verification/i)).toBeInTheDocument();
    expect(screen.getByText(/Verified Hash Published/i)).toBeInTheDocument();
    expect(screen.getByText('AE0DA92634F4B61C9B9C9EFBA1A7381C488E5BCB5832421B1927F564C7A0B595')).toBeInTheDocument();

    const downloadBtn = screen.getByText('Download Installer (.exe)');
    expect(downloadBtn.closest('a')).toHaveAttribute(
      'href',
      expect.stringContaining('Personal Money Manager-1.0.0-x64.exe')
    );
  });

  it('renders VerificationGuide with PowerShell Get-FileHash command', () => {
    render(<VerificationGuide />);

    expect(screen.getByText(/Get-FileHash -Path/i)).toBeInTheDocument();
    expect(screen.getByText(/Personal Money Manager-1.0.0-x64.exe/i)).toBeInTheDocument();
  });

  it('renders SmartScreenGuide with honest disclosure without advising to disable security', () => {
    render(<SmartScreenGuide />);

    expect(screen.getByText(/Windows Defender SmartScreen & Code Signing Disclosure/i)).toBeInTheDocument();
    expect(screen.getByText(/Unsigned Independent Release/i)).toBeInTheDocument();
    expect(screen.getByText(/Click "More info"/i)).toBeInTheDocument();
    expect(screen.getByText(/We never ask you to disable Windows Defender/i)).toBeInTheDocument();
  });
});
