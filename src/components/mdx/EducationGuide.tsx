'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface School {
  name: string;
  type: 'international' | 'british' | 'american' | 'ib' | 'local' | 'bilingual';
  city: string;
  annualFeeEur?: number;
  curriculum?: string;
  ages?: string;
  rating?: number;
  website?: string;
}

interface EducationSystem {
  type: string;
  compulsoryAges?: string;
  schoolYear?: string;
  mainLanguage?: string;
  englishAvailability?: string;
}

interface EducationGuideProps {
  country: string;
  flag: string;
  system?: EducationSystem;
  schools?: School[];
  universities?: Array<{
    name: string;
    city: string;
    ranking?: string;
    type?: string;
  }>;
  notes?: string[];
}

const schoolTypeColors: Record<string, { bg: string; text: string; label: string }> = {
  international: { bg: 'bg-purple-500/20', text: 'text-purple-400', label: 'International' },
  british: { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'British' },
  american: { bg: 'bg-red-500/20', text: 'text-red-400', label: 'American' },
  ib: { bg: 'bg-amber-500/20', text: 'text-amber-400', label: 'IB World' },
  local: { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Local' },
  bilingual: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', label: 'Bilingual' },
};

export function EducationGuide({
  country,
  flag,
  system,
  schools = [],
  universities = [],
  notes = [],
}: EducationGuideProps) {
  const [activeTab, setActiveTab] = useState<'schools' | 'universities'>('schools');

  const formatFee = (fee: number) => {
    if (fee >= 1000) {
      return `${(fee / 1000).toFixed(0)}K`;
    }
    return fee.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{flag}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{country} Education Guide</h3>
            <p className="text-white/50 text-sm">Schools, universities, and education system</p>
          </div>
        </div>
      </div>

      {/* Education System Overview */}
      {system && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/5">
          <div className="text-center">
            <div className="text-lg font-semibold text-white mb-1">{system.type || 'N/A'}</div>
            <div className="text-xs text-white/50">System Type</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white mb-1">{system.compulsoryAges || 'N/A'}</div>
            <div className="text-xs text-white/50">Compulsory Ages</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white mb-1">{system.schoolYear || 'N/A'}</div>
            <div className="text-xs text-white/50">School Year</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-white mb-1">{system.mainLanguage || 'Local'}</div>
            <div className="text-xs text-white/50">Main Language</div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        <button
          onClick={() => setActiveTab('schools')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'schools'
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-white/50 hover:text-white/70'
          }`}
        >
          Schools ({schools.length})
        </button>
        <button
          onClick={() => setActiveTab('universities')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === 'universities'
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-white/50 hover:text-white/70'
          }`}
        >
          Universities ({universities.length})
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
        {activeTab === 'schools' && (
          <>
            {schools.length === 0 ? (
              <p className="text-white/50 text-center py-8">No school data available</p>
            ) : (
              schools.map((school, index) => (
                <motion.div
                  key={school.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium">{school.name}</h4>
                        {school.rating && (
                          <div className="flex items-center gap-0.5">
                            <span className="text-amber-400 text-sm">★</span>
                            <span className="text-white/60 text-xs">{school.rating}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className={`px-2 py-0.5 rounded-full ${schoolTypeColors[school.type]?.bg || 'bg-gray-500/20'} ${schoolTypeColors[school.type]?.text || 'text-gray-400'}`}>
                          {schoolTypeColors[school.type]?.label || school.type}
                        </span>
                        <span className="text-white/40">📍 {school.city}</span>
                        {school.curriculum && (
                          <span className="text-white/40">📚 {school.curriculum}</span>
                        )}
                        {school.ages && (
                          <span className="text-white/40">👶 Ages {school.ages}</span>
                        )}
                      </div>
                    </div>
                    {school.annualFeeEur && (
                      <div className="text-right">
                        <div className="text-emerald-400 font-semibold">
                          €{formatFee(school.annualFeeEur)}
                        </div>
                        <div className="text-white/40 text-xs">/year</div>
                      </div>
                    )}
                  </div>
                  {school.website && (
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-xs text-amber-400 hover:text-amber-300 transition-colors inline-block"
                    >
                      Visit website →
                    </a>
                  )}
                </motion.div>
              ))
            )}
          </>
        )}

        {activeTab === 'universities' && (
          <>
            {universities.length === 0 ? (
              <p className="text-white/50 text-center py-8">No university data available</p>
            ) : (
              universities.map((uni, index) => (
                <motion.div
                  key={uni.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 rounded-xl p-4 border border-white/5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-medium">{uni.name}</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs">
                        <span className="text-white/40">📍 {uni.city}</span>
                        {uni.type && (
                          <span className="text-white/40">🏛️ {uni.type}</span>
                        )}
                      </div>
                    </div>
                    {uni.ranking && (
                      <div className="text-amber-400 text-sm font-medium">
                        {uni.ranking}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </>
        )}
      </div>

      {/* Notes */}
      {notes.length > 0 && (
        <div className="p-4 bg-white/5 border-t border-white/10">
          <div className="text-xs text-white/50 mb-2">Important Notes:</div>
          <ul className="space-y-1">
            {notes.map((note, i) => (
              <li key={i} className="text-xs text-white/70 flex items-start gap-2">
                <span className="text-amber-400">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
