'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroBanner } from '@/components/layout/HeroBanner';
import { TOPIC_CLUSTERS, NAV_GROUPS } from '@/data/topic-clusters';

// Quick Action Card Component
function QuickActionCard({
  icon,
  title,
  description,
  href,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        className={`bg-gradient-to-br ${color} rounded-2xl p-6 cursor-pointer border border-white/10 shadow-lg hover:shadow-xl transition-all h-full`}
      >
        <span className="text-4xl block mb-3">{icon}</span>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </motion.div>
    </Link>
  );
}

// Topic Cluster Card Component
function ClusterCard({ cluster }: { cluster: typeof TOPIC_CLUSTERS[0] }) {
  return (
    <Link href={`/${cluster.slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/50 transition-all cursor-pointer"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{cluster.icon}</span>
          <div>
            <h3 className="text-lg font-semibold text-white">{cluster.name}</h3>
            <p className="text-xs text-emerald-400">
              {cluster.supportingPages.length + 1} guides
            </p>
          </div>
        </div>
        <p className="text-slate-400 text-sm line-clamp-2">{cluster.description}</p>
      </motion.div>
    </Link>
  );
}

// Stats Component
function StatsBar() {
  const stats = [
    { value: '42', label: 'Expert Guides', icon: '📚' },
    { value: '9', label: 'Calculators', icon: '🧮' },
    { value: '5', label: 'Topic Clusters', icon: '🎯' },
    { value: '100+', label: 'FAQs Answered', icon: '💡' },
  ];

  return (
    <div className="bg-slate-800/30 backdrop-blur-sm border-y border-slate-700/50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <span className="text-2xl block mb-1">{stat.icon}</span>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <HeroBanner
        title="Your Complete Guide to UK Pensions"
        subtitle="Pension Quest"
        description="Expert guides, free calculators, and everything you need to plan your retirement with confidence."
        unsplashQuery="retirement planning couple uk"
        showVoiceWidget={false}
      >
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/calculators" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors shadow-lg">
            🧮 Try Our Calculators
          </Link>
          <Link href="/state-pension" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20">
            📖 State Pension Guide
          </Link>
        </div>
      </HeroBanner>

      {/* Stats Bar */}
      <StatsBar />

      {/* Quick Actions */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Popular Tools & Guides</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Start your pension planning journey with our most used resources
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickActionCard
            icon="🧮"
            title="State Pension Calculator"
            description="Find out how much State Pension you'll get and when you can claim it"
            href="/calculators/state-pension"
            color="from-emerald-600 to-emerald-700"
          />
          <QuickActionCard
            icon="🏛️"
            title="State Pension Guide"
            description="Everything about the UK State Pension in one comprehensive guide"
            href="/state-pension"
            color="from-blue-600 to-blue-700"
          />
          <QuickActionCard
            icon="💰"
            title="Tax Relief Calculator"
            description="See how much tax relief you get on pension contributions"
            href="/calculators/tax-relief"
            color="from-violet-600 to-violet-700"
          />
          <QuickActionCard
            icon="📊"
            title="Pension Pot Calculator"
            description="Project how much your pension pot could grow over time"
            href="/calculators/pension-pot"
            color="from-amber-600 to-amber-700"
          />
        </div>
      </section>

      {/* Topic Clusters by Category */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Explore All Pension Topics</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Browse our comprehensive collection of guides organized by category
          </p>
        </motion.div>

        {Object.entries(NAV_GROUPS).map(([groupId, group]) => (
          <div key={groupId} className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-2">{group.name}</h3>
            <p className="text-slate-400 text-sm mb-6">{group.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {group.clusters.map((clusterId) => {
                const cluster = TOPIC_CLUSTERS.find(c => c.id === clusterId);
                if (!cluster) return null;
                return <ClusterCard key={clusterId} cluster={cluster} />;
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-3xl p-8 md:p-12 border border-slate-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Trusted Pension Information
              </h2>
              <p className="text-slate-300 mb-6">
                All our guides are researched using official UK government sources,
                The Pensions Regulator, and Money Helper. While we provide comprehensive
                information, we always recommend consulting a qualified financial adviser
                for personalized advice.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.gov.uk/state-pension"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 underline"
                >
                  GOV.UK Pensions →
                </a>
                <a
                  href="https://www.moneyhelper.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 underline"
                >
                  MoneyHelper →
                </a>
                <a
                  href="https://www.thepensionsregulator.gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 underline"
                >
                  Pensions Regulator →
                </a>
              </div>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-2xl p-6">
              <h3 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                <span>⚠️</span> Important Disclaimer
              </h3>
              <p className="text-amber-200/70 text-sm">
                Pension Quest provides general information about UK pensions and is not
                financial advice. Pension decisions are personal and depend on your
                individual circumstances. For advice tailored to your situation, please
                consult a qualified financial adviser regulated by the FCA.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
