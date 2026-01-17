import Link from 'next/link';
import { TOPIC_CLUSTERS, NAV_GROUPS } from '@/data/topic-clusters';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="text-2xl">🎯</span>
              <span>Pension Quest</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Your trusted guide to UK pensions. Free calculators, expert guides, and everything you need to plan your retirement.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/pensionquest" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://facebook.com/pensionquest" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Public Sector */}
          <div>
            <h3 className="text-white font-semibold mb-4">Public Sector</h3>
            <ul className="space-y-2">
              {NAV_GROUPS['public-sector'].clusters.map((clusterId) => {
                const cluster = TOPIC_CLUSTERS.find(c => c.id === clusterId);
                if (!cluster) return null;
                return (
                  <li key={clusterId}>
                    <Link href={`/${cluster.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {cluster.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Private Pensions & Planning */}
          <div>
            <h3 className="text-white font-semibold mb-4">Private Pensions</h3>
            <ul className="space-y-2">
              {NAV_GROUPS['private-pensions'].clusters.map((clusterId) => {
                const cluster = TOPIC_CLUSTERS.find(c => c.id === clusterId);
                if (!cluster) return null;
                return (
                  <li key={clusterId}>
                    <Link href={`/${cluster.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {cluster.name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-slate-800 mt-2">
                <span className="text-slate-500 text-xs uppercase tracking-wider">Retirement</span>
              </li>
              {NAV_GROUPS['retirement-planning'].clusters.map((clusterId) => {
                const cluster = TOPIC_CLUSTERS.find(c => c.id === clusterId);
                if (!cluster) return null;
                return (
                  <li key={clusterId}>
                    <Link href={`/${cluster.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {cluster.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Money Matters */}
          <div>
            <h3 className="text-white font-semibold mb-4">Money Matters</h3>
            <ul className="space-y-2">
              {NAV_GROUPS['money-matters'].clusters.map((clusterId) => {
                const cluster = TOPIC_CLUSTERS.find(c => c.id === clusterId);
                if (!cluster) return null;
                return (
                  <li key={clusterId}>
                    <Link href={`/${cluster.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {cluster.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calculators" className="text-slate-400 hover:text-white text-sm transition-colors">
                  All Calculators
                </Link>
              </li>
              <li>
                <a href="https://www.gov.uk/state-pension" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">
                  GOV.UK Pensions ↗
                </a>
              </li>
              <li>
                <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">
                  MoneyHelper ↗
                </a>
              </li>
              <li>
                <a href="https://www.thepensionsregulator.gov.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Pensions Regulator ↗
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4 mt-6">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {currentYear} Pension Quest. All rights reserved.
            </p>
            <div className="bg-amber-900/30 border border-amber-700/30 rounded-lg px-4 py-2">
              <p className="text-amber-400/80 text-xs text-center">
                <strong>Important:</strong> Pension Quest provides information only, not financial advice.
                For personalized advice, please consult a qualified financial adviser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
