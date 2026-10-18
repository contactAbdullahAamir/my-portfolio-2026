import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Compass, Trophy, CheckCircle, ArrowRight, Quote, FileText, Sparkles } from 'lucide-react';
import { STORY_CHAPTERS } from '../data/portfolioData';
import { StoryChapter } from '../types';
import { playPop } from '../utils/sound';

interface StorySectionProps {
  onOpenCredentials: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenCredentials }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>('lead');

  const activeChapter: StoryChapter =
    STORY_CHAPTERS.find((c) => c.id === activeChapterId) || STORY_CHAPTERS[2];

  const getChapterIcon = (id: string) => {
    switch (id) {
      case 'classroom':
        return <BookOpen className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />;
      case 'discovery':
        return <Compass className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />;
      case 'lead':
        return <Trophy className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />;
      default:
        return <BookOpen className="w-4 h-4 shrink-0" />;
    }
  };

  const getShortPeriod = (period: string) => {
    // Converts "2019 — 2021" to "2019-21" for small mobile
    return period.replace(/\s*—\s*/, '-').replace('202', '2');
  };

  return (
    <section id="story" className="scroll-mt-24 py-16 sm:py-20 md:py-32 border-t border-slate-200 dark:border-indigo-500/15">
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>04 — The Trajectory</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white">
              How the Perspective Was Forged
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 max-w-sm">
            Three distinct chapters from the classroom to the tech lead seat.
          </p>
        </div>

        {/* 3-Chapter Interactive Horizontal Switcher (Scales down gracefully to 320px) */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-[#0E1220]/80 border border-slate-200 dark:border-indigo-500/20 mb-8 sm:mb-10">
          {STORY_CHAPTERS.map((chapter) => {
            const isSelected = activeChapterId === chapter.id;
            return (
              <button
                key={chapter.id}
                onClick={() => {
                  playPop();
                  setActiveChapterId(chapter.id);
                }}
                className={`relative flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-slate-950 dark:text-white font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeStoryChapterPill"
                    className="absolute inset-0 rounded-lg sm:rounded-xl bg-white dark:bg-indigo-600 border border-slate-300 dark:border-indigo-400/30 shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 text-[11px] sm:text-xs md:text-sm">
                  <span className={isSelected ? 'text-indigo-600 dark:text-white font-bold' : 'text-indigo-600 dark:text-indigo-400'}>
                    <span className="hidden sm:inline">{chapter.period}</span>
                    <span className="sm:hidden">{getShortPeriod(chapter.period)}</span>
                  </span>
                  <span className="hidden sm:inline">·</span>
                  <span className="font-sans font-medium hidden sm:inline">{chapter.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Editorial Narrative Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden"
          >
            {/* Subtle chapter glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Chapter Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200 dark:border-indigo-500/15 pb-4 sm:pb-6 mb-5 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-500/30 shrink-0">
                  {getChapterIcon(activeChapter.id)}
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                    Chapter {activeChapter.chapterNumber} · {activeChapter.period}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-950 dark:text-white">
                    {activeChapter.title}
                  </h3>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {activeChapter.role}
                </div>
                <div className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                  {activeChapter.organization}
                </div>
              </div>
            </div>

            {/* Chapter Memorable Quote */}
            <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/20 mb-6 sm:mb-8 relative">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400/50 absolute top-3.5 left-3.5 sm:top-4 sm:left-4 pointer-events-none" />
              <p className="font-editorial text-base sm:text-lg md:text-xl italic text-slate-900 dark:text-white pl-6 sm:pl-8 leading-snug">
                "{activeChapter.quote}"
              </p>
            </div>

            {/* Conversational Narrative Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
              {activeChapter.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Formative Principles & Takeaways */}
            <div className="border-t border-slate-200 dark:border-indigo-500/15 pt-5 sm:pt-6">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 sm:mb-3 font-bold">
                Core Principles Formed In This Era:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {activeChapter.takeaways.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15 flex items-start gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 leading-snug font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Credentials & Full Tech Stack Trigger (Full width on mobile, centered pill on sm+) */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <button
            onClick={() => {
              playPop();
              onOpenCredentials();
            }}
            className="group flex items-center justify-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-slate-300 dark:border-indigo-500/30 bg-white dark:bg-[#0E1220] text-slate-900 dark:text-white hover:border-indigo-500 hover:shadow-lg hover:-translate-y-0.5 shadow-md transition-all duration-200 cursor-pointer w-full sm:w-auto"
          >
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-medium">Inspect Full Credentials, Stack &amp; Certifications</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
