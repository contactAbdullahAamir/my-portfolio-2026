import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, Radio, Download, MessageSquare, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/sound';
import { GithubIcon, LinkedinIcon, LinktreeIcon } from './Icons';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    playSuccess();
    if (type === 'email') {
      setCopiedEmail(true);
      onShowToast("Email copied to clipboard: " + PERSONAL_INFO.email);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      onShowToast("Phone copied to clipboard: " + PERSONAL_INFO.phone);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-16 pb-36 sm:pt-24 sm:pb-44 border-t border-slate-200 dark:border-indigo-500/15 relative overflow-hidden">
      <div className="max-w-4xl xl:max-w-5xl mx-auto px-3 sm:px-6">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3 sm:mb-4 font-bold">
            <Radio className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span>05 — Direct Telemetry &amp; Coordinates</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white mb-3 sm:mb-4 leading-tight">
            Have a tricky backend or an AI workflow that needs to behave in production?
          </h2>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-light">
            I'm currently based in Lahore, PK (UTC+5), open to discussing technical leadership, distributed system architectures, and reliable agentic AI engineering.
          </p>
        </div>

        {/* SYMMETRICAL ROW 1: 2 Spacious Primary Contact Cards (Email & Phone) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl xl:max-w-5xl mx-auto mb-6 sm:mb-8">
          {/* Primary Email Card (Guaranteed Single Line Across 320px to 4K) */}
          <div className="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 flex flex-col justify-between shadow-lg dark:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Primary Direct Email</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 flex items-center gap-1 sm:gap-1.5 font-semibold transition-all cursor-pointer border border-indigo-200 dark:border-indigo-500/20"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={playClick}
                className="text-xs sm:text-base md:text-lg font-mono font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block truncate py-1"
                title={PERSONAL_INFO.email}
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="mt-3.5 sm:mt-4 pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-indigo-500/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-500 shrink-0" />
                <span>Response &lt; 24h</span>
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={playClick}
                className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Direct Phone / WhatsApp Card */}
          <div className="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 flex flex-col justify-between shadow-lg dark:shadow-xl hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Direct Mobile &amp; WhatsApp</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 dark:hover:bg-sky-900/50 flex items-center gap-1 sm:gap-1.5 font-semibold transition-all cursor-pointer border border-sky-200 dark:border-sky-500/20"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                onClick={playClick}
                className="text-xs sm:text-base md:text-lg font-mono font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors block py-1"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="mt-3.5 sm:mt-4 pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-indigo-500/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0" />
                <span>Available on WhatsApp</span>
              </span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                onClick={playClick}
                className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-medium group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* SYMMETRICAL ROW 2: Exactly 4 Interactive Platform Cards (2x2 on Mobile, 4x1 on Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl xl:max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* 1. LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/90 hover:border-sky-500/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/20">
                <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white">LinkedIn</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">Connect &amp; InMail</div>
            </div>
          </a>

          {/* 2. GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/90 hover:border-indigo-500/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white">GitHub</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">Code &amp; Repositories</div>
            </div>
          </a>

          {/* 3. Linktree Hub */}
          <a
            href={PERSONAL_INFO.linktree}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/90 hover:border-emerald-500/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                <LinktreeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white">Linktree Hub</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">All Project Links</div>
            </div>
          </a>

          {/* 4. Standalone ATS Resume PDF */}
          <a
            href={PERSONAL_INFO.resumePrintUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-indigo-300 dark:border-indigo-500/40 bg-indigo-50/60 dark:bg-indigo-950/30 hover:border-indigo-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-indigo-600 text-white shadow-sm">
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">Resume PDF</div>
              <div className="text-[9px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400">ATS Print / Save</div>
            </div>
          </a>
        </div>

        {/* Minimal Footer */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-indigo-500/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Abdullah Aamir · Technical Lead &amp; Systems Architect
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-end">
            <span>NestJS · LangGraph · TypeScript</span>
            <span>Lahore, PK (UTC+5)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
