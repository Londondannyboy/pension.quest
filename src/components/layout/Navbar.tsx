'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TOPIC_CLUSTERS, NAV_GROUPS } from '@/data/topic-clusters';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const navGroups = Object.entries(NAV_GROUPS);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <span className="text-2xl">🎯</span>
            <span>Pension Quest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navGroups.map(([groupId, group]) => (
              <div
                key={groupId}
                className="relative"
                onMouseEnter={() => setActiveGroup(groupId)}
                onMouseLeave={() => setActiveGroup(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  {group.name}
                  <svg
                    className={`inline-block ml-1 w-4 h-4 transition-transform ${activeGroup === groupId ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeGroup === groupId && (
                  <div className="absolute top-full left-0 w-72 bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1 py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-700">
                      <p className="text-xs text-slate-400 uppercase tracking-wider">{group.name}</p>
                      <p className="text-sm text-slate-300">{group.description}</p>
                    </div>
                    {group.clusters.map((clusterId) => {
                      const cluster = TOPIC_CLUSTERS.find(c => c.id === clusterId);
                      if (!cluster) return null;
                      return (
                        <Link
                          key={clusterId}
                          href={`/${cluster.slug}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-700/50 transition-colors"
                        >
                          <span className="text-xl">{cluster.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-white">{cluster.name}</p>
                            <p className="text-xs text-slate-400 line-clamp-1">{cluster.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Calculators CTA */}
            <Link
              href="/calculators"
              className="ml-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              🧮 Calculators
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            {navGroups.map(([groupId, group]) => (
              <div key={groupId} className="mb-4">
                <p className="px-4 py-2 text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  {group.name}
                </p>
                <div className="space-y-1">
                  {group.clusters.map((clusterId) => {
                    const cluster = TOPIC_CLUSTERS.find(c => c.id === clusterId);
                    if (!cluster) return null;
                    return (
                      <Link
                        key={clusterId}
                        href={`/${cluster.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-white/80 hover:text-white hover:bg-slate-800 rounded-lg mx-2"
                      >
                        <span>{cluster.icon}</span>
                        <span className="text-sm">{cluster.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Mobile Calculators CTA */}
            <div className="px-4 pt-4 border-t border-slate-800 mt-4">
              <Link
                href="/calculators"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
              >
                🧮 Pension Calculators
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
