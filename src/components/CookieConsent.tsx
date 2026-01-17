'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/98 backdrop-blur-sm border-t border-slate-700/50 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-slate-300 text-sm">
              We use cookies to improve your experience. By continuing, you agree to our use of cookies.{' '}
              <span className="hidden sm:inline">
                See our{' '}
                <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 underline">
                  Privacy Policy
                </Link>
                ,{' '}
                <Link href="/cookies" className="text-emerald-400 hover:text-emerald-300 underline">
                  Cookie Policy
                </Link>
                , and{' '}
                <Link href="/terms" className="text-emerald-400 hover:text-emerald-300 underline">
                  Terms of Service
                </Link>
                .
              </span>
            </p>
            <p className="sm:hidden text-xs text-slate-400 mt-1">
              <Link href="/privacy" className="text-emerald-400 underline">Privacy</Link>
              {' · '}
              <Link href="/cookies" className="text-emerald-400 underline">Cookies</Link>
              {' · '}
              <Link href="/terms" className="text-emerald-400 underline">Terms</Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
