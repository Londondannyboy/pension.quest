'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { useCopilotAction, useCopilotReadable, useCopilotChat } from '@copilotkit/react-core';
import { Role, TextMessage } from '@copilotkit/runtime-client-gql';
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
    { value: '131', label: 'Expert Guides', icon: '📚' },
    { value: '11', label: 'Calculators', icon: '🧮' },
    { value: '3,375', label: 'Keywords', icon: '🔍' },
    { value: '2M+', label: 'Monthly Searches', icon: '📈' },
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
  const [searchQuery, setSearchQuery] = useState('');
  const { appendMessage } = useCopilotChat();

  // Make page state readable to CopilotKit
  useCopilotReadable({
    description: 'Current pension information website homepage state',
    value: {
      page: 'homepage',
      totalClusters: TOPIC_CLUSTERS.length,
      totalPages: TOPIC_CLUSTERS.reduce((acc, c) => acc + c.supportingPages.length + 1, 0),
    },
  });

  // Action: Search pension topics
  useCopilotAction({
    name: "search_pension_topic",
    description: "Search for pension topics, guides, or calculators when user asks about pensions",
    parameters: [
      { name: "query", type: "string" as const, description: "Search query about pensions" },
    ],
    handler: async ({ query }) => {
      console.log('🎯 search_pension_topic:', query);

      // Search through clusters
      const matchingClusters = TOPIC_CLUSTERS.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase()) ||
        c.pillarPage.title.toLowerCase().includes(query.toLowerCase()) ||
        c.supportingPages.some(p => p.title.toLowerCase().includes(query.toLowerCase()))
      );

      if (matchingClusters.length > 0) {
        return `I found ${matchingClusters.length} relevant topics: ${matchingClusters.slice(0, 3).map(c => c.name).join(', ')}. Would you like me to explain any of these in detail?`;
      }
      return `I couldn't find specific content matching "${query}". Would you like me to suggest related pension topics?`;
    },
  });

  // Action: Explain pension concept
  useCopilotAction({
    name: "explain_pension_concept",
    description: "Explain a UK pension concept or term when user asks what something means",
    parameters: [
      { name: "concept", type: "string" as const, description: "The pension concept to explain" },
    ],
    handler: async ({ concept }) => {
      console.log('🎯 explain_pension_concept:', concept);

      const explanations: Record<string, string> = {
        'state pension': 'The State Pension is a regular payment from the government that you can claim when you reach State Pension age. The full new State Pension is £221.20 per week (2024/25). You need 35 qualifying years of National Insurance to get the full amount.',
        'sipp': 'A Self-Invested Personal Pension (SIPP) is a pension wrapper that lets you choose your own investments. It offers more control than a standard pension but requires more knowledge. SIPPs have the same tax benefits as other pensions.',
        'pension drawdown': 'Pension drawdown (or flexi-access drawdown) lets you take money from your pension pot while leaving the rest invested. You can take up to 25% tax-free, then pay income tax on the rest. It offers flexibility but carries investment risk.',
        'annuity': 'An annuity is an insurance product that converts your pension pot into a guaranteed income for life. Once purchased, you can\'t change your mind. Rates depend on your age, health, and the type of annuity you choose.',
        'tax relief': 'Pension tax relief means the government tops up your pension contributions. Basic rate taxpayers get 20% added automatically. Higher and additional rate taxpayers can claim extra through their tax return.',
        'annual allowance': 'The annual allowance is the maximum you can save into pensions each year while still receiving tax relief. It\'s currently £60,000 (2024/25) but can be lower if you earn over £260,000 or have accessed your pension.',
      };

      const key = concept.toLowerCase();
      for (const [term, explanation] of Object.entries(explanations)) {
        if (key.includes(term) || term.includes(key)) {
          return explanation;
        }
      }

      return `${concept} is an important pension topic. Would you like me to point you to our detailed guide on this subject?`;
    },
  });

  // Action: Navigate to calculator
  useCopilotAction({
    name: "suggest_calculator",
    description: "Suggest a relevant pension calculator when user wants to calculate something",
    parameters: [
      { name: "calculation_type", type: "string" as const, description: "What the user wants to calculate" },
    ],
    handler: async ({ calculation_type }) => {
      console.log('🎯 suggest_calculator:', calculation_type);

      const calculators = [
        { keywords: ['state pension', 'how much state'], name: 'State Pension Calculator', url: '/calculators/state-pension' },
        { keywords: ['tax relief', 'tax back'], name: 'Tax Relief Calculator', url: '/calculators/tax-relief' },
        { keywords: ['retirement', 'how much need', 'pension pot'], name: 'Pension Pot Calculator', url: '/calculators/pension-pot' },
        { keywords: ['drawdown', 'withdraw', 'income'], name: 'Drawdown Calculator', url: '/calculators/drawdown' },
        { keywords: ['annuity', 'guaranteed income'], name: 'Annuity Calculator', url: '/calculators/annuity' },
        { keywords: ['contribution', 'how much save'], name: 'Contribution Calculator', url: '/calculators/contribution' },
      ];

      const type = calculation_type.toLowerCase();
      const match = calculators.find(c => c.keywords.some(k => type.includes(k)));

      if (match) {
        return `I recommend our ${match.name} at ${match.url}. This will help you calculate exactly what you need. Would you like me to explain how to use it?`;
      }

      return `For that calculation, you might find our pension calculators helpful. We have calculators for State Pension, tax relief, pension pot projections, and more at /calculators.`;
    },
  });

  // Handle quick prompts
  const handleQuickPrompt = useCallback((prompt: string) => {
    appendMessage(new TextMessage({ content: prompt, role: Role.User }));
  }, [appendMessage]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <CopilotSidebar
        defaultOpen={false}
        instructions={`You are a UK pension expert assistant for Pension Quest. You help users understand UK pensions, find relevant guides, and use our calculators.

YOUR EXPERTISE:
- UK State Pension (amounts, age, eligibility)
- Workplace pensions and auto-enrolment
- Personal pensions and SIPPs
- NHS, Teachers, and Civil Service pensions
- Pension tax relief
- Pension drawdown and annuities
- Pension transfers

AVAILABLE CONTENT:
- 16 topic clusters covering all major UK pension types
- 131 detailed guides and articles
- 11 interactive calculators

IMPORTANT RULES:
1. Always be helpful and accurate about UK pension information
2. Use the available actions to search topics, explain concepts, and suggest calculators
3. When users ask about calculations, suggest our calculators
4. If you're unsure, recommend consulting a financial adviser
5. Keep responses concise but informative

PERSONALITY:
- Professional but friendly
- Reassuring about pension complexity
- Proactive in suggesting resources
- Clear about limitations (not financial advice)

CURRENT UK PENSION RATES (2024/25):
- Full new State Pension: £221.20/week
- State Pension age: 66 (rising to 67 by 2028)
- Annual Allowance: £60,000
- Lifetime Allowance: Abolished (April 2024)
- Minimum auto-enrolment contributions: 8% (3% employer, 5% employee)`}
        labels={{
          title: 'Pension Quest Assistant 🎯',
          initial: "Welcome to Pension Quest! 🎯\n\nI'm your UK pension expert assistant. I can help you:\n\n• Understand pension concepts\n• Find guides on specific topics\n• Use our pension calculators\n• Navigate retirement planning\n\nWhat would you like to know about pensions today?",
        }}
        className="[&_.copilotKitSidebar]:bg-slate-900/95 [&_.copilotKitSidebar]:backdrop-blur-md [&_.copilotKitSidebar]:border-slate-700/50"
      >
        {/* Hero Section */}
        <HeroBanner
          title="Your Complete Guide to UK Pensions"
          subtitle="Pension Quest"
          description="Expert guides, free calculators, and everything you need to plan your retirement with confidence."
          unsplashQuery="retirement planning couple uk"
          showVoiceWidget={true}
        >
          {/* Search / CTA Buttons */}
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
              icon="📋"
              title="Tax Relief Explained"
              description="Understand how pension tax relief works and maximize your savings"
              href="/pension-tax-relief"
              color="from-violet-600 to-violet-700"
            />
            <QuickActionCard
              icon="💰"
              title="Pension Drawdown"
              description="Learn how to access your pension pot flexibly in retirement"
              href="/pension-drawdown"
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

        {/* Quick Chat Prompts */}
        <section className="bg-slate-800/30 border-t border-slate-700/50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Common Questions</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'What is the State Pension?',
                'How much pension do I need?',
                'What is pension tax relief?',
                'When can I access my pension?',
                'Should I use drawdown or annuity?',
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="px-4 py-2 text-sm rounded-full bg-slate-700/50 hover:bg-slate-700 text-white/80 hover:text-white transition-all border border-slate-600/50 hover:border-emerald-500/50"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Click any question to ask our AI assistant, or open the chat to ask your own
            </p>
          </div>
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
      </CopilotSidebar>
    </div>
  );
}
