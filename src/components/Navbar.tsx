import React, { useState, useEffect } from 'react';
import { FileText, Mail, Compass, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, playPop } from '../utils/sound';
import { GithubIcon, LinkedinIcon, LinktreeIcon } from './Icons';

interface NavbarProps {
  onOpenCredentials: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCredentials }) => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setLocalTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/90 dark:bg-[#07080D]/85 border-b border-slate-200 dark:border-indigo-500/15 transition-colors duration-300">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Identity & Status */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#hero"
            onClick={playClick}
            className="group flex items-center gap-2 sm:gap-2.5 font-medium tracking-tight text-slate-900 dark:text-white transition-colors"
          >
            <div className="relative flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 shrink-0">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse" />
              <span className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-indigo-500/40 animate-ping opacity-40" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs sm:text-sm md:text-base leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                Softaims · Technical Lead
              </span>
            </div>
          </a>
        </div>

        {/* Center: Live Observatory Coordinates (Visible on Large Desktops) */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-indigo-950/40 border border-slate-200 dark:border-indigo-500/20 text-slate-600 dark:text-slate-300">
          <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>Lahore (UTC+5)</span>
          <span className="tabular-nums font-semibold text-indigo-600 dark:text-indigo-400">
            {localTime || '18:20:00'}
          </span>
        </div>

        {/* Right: Highly Visible Social Links, Resume Download & Dossier Button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Direct Social Media Icons Bar (hidden on mobile, visible from sm+) */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/20">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="p-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-indigo-600/20 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="p-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linktree}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="p-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors"
              title="Linktree Portfolio & Links"
              aria-label="Linktree"
            >
              <LinktreeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={playClick}
              className="p-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-colors"
              title="Direct Email"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          {/* Direct 1-Click Resume Button */}
          <a
            href={PERSONAL_INFO.resumePrintUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-mono font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-indigo-300 dark:border-indigo-500/30 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:border-indigo-500 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            title="Open printable ATS Resume"
          >
            <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Resume</span>
          </a>

          {/* Full Credentials Drawer Trigger */}
          <button
            onClick={() => {
              playPop();
              onOpenCredentials();
            }}
            className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-mono font-medium px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 hover:-translate-y-0.5 hover:shadow-indigo-600/40 transition-all duration-200 cursor-pointer"
          >
            <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Dossier &amp; Stack</span>
            <span className="sm:hidden">Dossier</span>
          </button>
        </div>
      </div>
    </header>
  );
};
