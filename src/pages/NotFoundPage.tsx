import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="text-center space-y-4 max-w-md">
        <div className="font-mono text-5xl font-black text-brand-600">404</div>
        <h1 className="text-2xl font-bold text-navy-900">Page Not Found</h1>
        <p className="text-sm text-slate-600">
          The page you requested could not be found. Please check the URL or return to the Personal Money Manager home page.
        </p>
        <div className="pt-2">
          <Link to="/">
            <Button variant="primary" size="md" icon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
