import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  GraduationCap,
  Award,
  Layers,
  Briefcase,
  Mail,
  Phone,
  Download,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { FULL_CREDENTIALS, PERSONAL_INFO } from '../data/portfolioData';
import { playClick } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './Icons';

interface CredentialsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CredentialsDrawer: React.FC<CredentialsDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
        />

        {/* Sliding Side Drawer (100% width on mobile, max-w-2xl on tablet/desktop) */}
        <div className="fixed inset-y-0 right-0 max-w-2xl w-full flex pl-0 sm:pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-full h-full bg-white dark:bg-[#0B0E17] border-l border-slate-300 dark:border-indigo-500/20 shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
          >
            {/* Drawer Header */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-5 border-b border-slate-200 dark:border-indigo-500/15 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-[#0E1220] gap-2">
              <div className="truncate pr-2">
                <span className="text-[10px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold block truncate">
                  Technical Dossier &amp; Stack
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white truncate">
                  {PERSONAL_INFO.name}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={PERSONAL_INFO.resumePrintUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-mono font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm cursor-pointer"
                  title="Open Printable Resume"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>

                <button
                  onClick={() => {
                    playClick();
                    onClose();
                  }}
                  className="p-1.5 sm:p-2 rounded-full border border-slate-300 dark:border-indigo-500/20 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Drawer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
              {/* Direct Coordinates Strip with Social Links */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20">
                <div className="text-[11px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2 uppercase font-semibold">
                  Direct Coordinates &amp; Profiles
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span className="truncate">{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <LinkedinIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-sky-600 dark:text-sky-400 truncate"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <GithubIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-indigo-600 dark:text-indigo-400 truncate"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Engineering Leadership & System Design Philosophy */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 font-semibold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Technical Leadership &amp; Standards</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15">
                    <div className="font-semibold text-xs text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Architecture RFCs</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      Authoring domain specs and API contracts before coding to eliminate scope creep and prevent post-launch refactoring.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15">
                    <div className="font-semibold text-xs text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Rigorous Code Reviews</span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      Enforcing clean architecture, strict error handling, schema boundaries, and comprehensive unit/integration test coverage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 font-semibold">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>Formal Education</span>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white">
                      {FULL_CREDENTIALS.education.degree}
                    </h4>
                    <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                      {FULL_CREDENTIALS.education.period}
                    </span>
                  </div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono mb-2">
                    {FULL_CREDENTIALS.education.institution}
                  </p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white">Focus Areas:</strong> {FULL_CREDENTIALS.education.focus}
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 font-semibold">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Atlassian &amp; Agile Certifications</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {FULL_CREDENTIALS.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15 flex items-center justify-between gap-2"
                    >
                      <div className="truncate">
                        <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                          {cert.title}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
                          {cert.issuer}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 shrink-0">
                        {cert.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Categorized */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 font-semibold">
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>Comprehensive Stack by Domain</span>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  {Object.entries(FULL_CREDENTIALS.skillsCategorized).map(([category, skills]) => (
                    <div
                      key={category}
                      className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15"
                    >
                      <div className="text-xs font-mono font-bold text-slate-950 dark:text-white mb-2">
                        {category}
                      </div>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-indigo-950/40 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-indigo-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Chronology */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 font-semibold">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span>Career Trajectory Bullets</span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {FULL_CREDENTIALS.careerHistory.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1 mb-1">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white">
                          {item.role}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                          {item.period}
                        </span>
                      </div>
                      <div className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                        {item.company} · {item.location}
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-1.5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-3.5 sm:p-4 border-t border-slate-200 dark:border-indigo-500/15 bg-slate-50 dark:bg-[#0E1220] flex items-center justify-between text-xs font-mono gap-2">
              <a
                href={PERSONAL_INFO.resumePrintUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold text-[11px] sm:text-xs truncate"
              >
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors text-xs shrink-0 cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
