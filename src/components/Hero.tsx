import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Cpu,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Mail,
  Phone,
  Sparkles,
  Radio,
  Download,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { PERSPECTIVES, PERSONAL_INFO, ATS_KEYWORDS } from '../data/portfolioData';
import { playClick, playPop } from '../utils/sound';
import { GithubIcon, LinkedinIcon, LinktreeIcon } from './Icons';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ai');

  const activePerspective = PERSPECTIVES.find((p) => p.id === activeTab) || PERSPECTIVES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'ai':
        return <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case 'backends':
        return <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'human':
        return <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const getMobileTabLabel = (id: string) => {
    switch (id) {
      case 'ai':
        return 'AI';
      case 'backends':
        return 'Backends';
      case 'human':
        return 'Team';
      default:
        return id;
    }
  };

  return (
    <section id="hero" className="scroll-mt-24 relative pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-6">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-300 dark:border-indigo-500/25 bg-slate-100/90 dark:bg-indigo-950/40 backdrop-blur-md mb-5 sm:mb-6 shadow-sm max-w-full"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-slate-800 dark:text-slate-200 tracking-wide font-medium truncate">
            Technical Lead at Softaims · Stateful AI &amp; Distributed Backends
          </span>
        </motion.div>

        {/* Storytelling Editorial Headline (Fluid text scale for 320px to 4K) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.14] sm:leading-[1.12] tracking-tight text-slate-950 dark:text-white mb-5 sm:mb-6"
        >
          I learned how to <span className="italic font-serif text-indigo-600 dark:text-indigo-400">listen to problems</span> before I learned how to <span className="italic font-serif text-sky-600 dark:text-sky-400 underline decoration-indigo-500/40 underline-offset-4 sm:underline-offset-8">scale the systems</span> that solve them.
        </motion.h1>

        {/* Executive Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl mb-6 sm:mb-8 font-light"
        >
          I architect <strong className="font-semibold text-slate-950 dark:text-white">deterministic LangGraph AI state machines</strong> and <strong className="font-semibold text-slate-950 dark:text-white">high-throughput NestJS event backends</strong>—engineered for mission-critical reliability, predictable token economics, and zero unhandled ambiguity.
        </motion.p>

        {/* PRIMARY RECRUITER CTAS (Stack on mobile, row on tablet/desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10"
        >
          {/* Primary 1-Click Resume Download */}
          <a
            href={PERSONAL_INFO.resumePrintUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs sm:text-sm font-medium shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Resume (PDF)</span>
          </a>

          {/* Explore Work */}
          <a
            href="#work"
            onClick={playClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-slate-300 dark:border-indigo-500/30 bg-white dark:bg-[#0E1220] text-slate-900 dark:text-slate-100 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-mono text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
          >
            <span>Flagship Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Architecture Blueprint Inspector */}
          <a
            href="#lab"
            onClick={playClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-4 sm:py-3 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-mono text-xs hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Architecture Blueprint</span>
          </a>
        </motion.div>

        {/* ATS Keywords Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-slate-200 dark:border-indigo-500/15"
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 sm:mb-2.5 font-bold">
            <Terminal className="w-3 h-3 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>Core Competencies &amp; Architectural Stack:</span>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {ATS_KEYWORDS.map((keyword) => (
              <span
                key={keyword}
                className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-indigo-500/20"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>

        {/* HIGH VISIBILITY: Direct Social Coordinates Strip (Responsive from 320px) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/80 shadow-lg dark:shadow-2xl mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider pl-1 font-bold shrink-0">
            <Radio className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span>Direct Channels:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400 dark:hover:border-sky-500/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 border border-slate-200 dark:border-indigo-500/20 cursor-pointer"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 border border-slate-200 dark:border-indigo-500/20 cursor-pointer"
            >
              <GithubIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>GitHub</span>
            </a>

            {/* Linktree */}
            <a
              href={PERSONAL_INFO.linktree}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 border border-slate-200 dark:border-indigo-500/20 cursor-pointer"
            >
              <LinktreeIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Linktree</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={playClick}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 hover:bg-amber-50 dark:hover:bg-amber-950/50 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400 dark:hover:border-amber-500/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 border border-slate-200 dark:border-indigo-500/20 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Email</span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              onClick={playClick}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/80 hover:bg-rose-50 dark:hover:bg-rose-950/50 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-400 dark:hover:border-rose-500/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 border border-slate-200 dark:border-indigo-500/20 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </motion.div>

        {/* The 3-Layer Perspective Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/90 p-4 sm:p-6 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden"
        >
          {/* Subtle cosmic aura in dark mode */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Perspective Navigation Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-indigo-500/15 pb-4 mb-5 sm:mb-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-300 font-bold">
                Architectural Lenses
              </span>
            </div>

            {/* Symmetrical 3-Tab Group (scales down cleanly to 320px) */}
            <div className="grid grid-cols-3 sm:flex sm:items-center gap-1 sm:gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-indigo-500/20">
              {PERSPECTIVES.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      playPop();
                      setActiveTab(tab.id);
                    }}
                    className={`relative flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'text-slate-950 dark:text-white font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeLensPill"
                        className="absolute inset-0 rounded-lg bg-white dark:bg-indigo-600 shadow-md border border-slate-300 dark:border-indigo-400/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1 text-[11px] sm:text-xs">
                      <span>{tab.num}.</span>
                      <span className="hidden sm:inline">{tab.title}</span>
                      <span className="sm:hidden">{getMobileTabLabel(tab.id)}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Perspective Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePerspective.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-500/30 shrink-0">
                    {getIcon(activePerspective.id)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-950 dark:text-white">
                      {activePerspective.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400">
                      {activePerspective.tagline}
                    </p>
                  </div>
                </div>

                <span className="self-start sm:self-auto text-[10px] sm:text-xs font-mono px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 font-medium">
                  {activePerspective.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {activePerspective.summary}
              </p>

              {/* Verified Production Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 pt-1">
                {activePerspective.bullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#141A2D]/70 border border-slate-200 dark:border-indigo-500/15 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 leading-snug font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Pill Row */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-slate-200 dark:border-indigo-500/15">
                <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 font-medium shrink-0">
                  Stack Applied:
                </span>
                {activePerspective.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-indigo-950/40 text-slate-800 dark:text-indigo-200 border border-slate-200 dark:border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
