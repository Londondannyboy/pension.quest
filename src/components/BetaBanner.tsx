'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function BetaBanner() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const wasDismissed = localStorage.getItem('beta-banner-dismissed');
    if (wasDismissed) {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('beta-banner-dismissed', 'true');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="bg-amber-900/90 border-b border-amber-700/50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="bg-amber-600 text-amber-50 text-xs font-bold px-2 py-0.5 rounded uppercase">
              Beta
            </span>
            <p className="text-amber-100 text-sm">
              <strong>Not financial advice.</strong>{' '}
              <span className="hidden sm:inline">
                Pension Quest provides general information only. Always consult{' '}
                <a href="https://www.gov.uk/browse/working/state-pension" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  GOV.UK
                </a>
                ,{' '}
                <a href="https://www.hmrc.gov.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  HMRC
                </a>
                , or a qualified adviser before making financial decisions.
              </span>
              <span className="sm:hidden">
                Consult official sources before financial decisions.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/disclaimer"
              className="text-amber-200 hover:text-white text-xs underline whitespace-nowrap"
            >
              Learn more
            </Link>
            <button
              onClick={handleDismiss}
              className="text-amber-300 hover:text-white p-1"
              aria-label="Dismiss banner"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
