import React from 'react';
import {
  Clock,
  TrendingDown,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Scale
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { playClick } from '../utils/sound';
import { GithubIcon } from './Icons';
import { ArchitectureStep, ProjectTradeoff } from '../types';

function ArchitecturePipeline({ steps }: { steps?: ArchitectureStep[] }) {
  if (!steps || steps.length === 0) return null;
  return (
    <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200 dark:border-indigo-500/15">
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-3">
        <GitBranch className="w-3.5 h-3.5 shrink-0" />
        <span>System Architecture Topology</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-2.5">
        {steps.map((st, i) => (
          <div
            key={i}
            className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-indigo-500/20 text-xs font-mono flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                <span>{st.step}</span>
                <span className="text-indigo-600 dark:text-indigo-400">{st.tech}</span>
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-[11px] sm:text-xs leading-tight mb-1">
                {st.label}
              </div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
              {st.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectTradeoffs({ tradeoffs }: { tradeoffs?: ProjectTradeoff[] }) {
  if (!tradeoffs || tradeoffs.length === 0) return null;
  return (
    <div className="mt-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-500/20">
      <div className="flex items-center gap-2 text-xs font-mono text-indigo-700 dark:text-indigo-300 font-bold uppercase mb-2">
        <Scale className="w-3.5 h-3.5 shrink-0" />
        <span>Architectural Decision &amp; Trade-offs</span>
      </div>
      <div className="space-y-2 sm:space-y-2.5 text-xs">
        {tradeoffs.map((t, idx) => (
          <div key={idx} className="space-y-1">
            <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              <span>{t.decision}</span>
            </div>
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed pl-3 font-light text-[11px] sm:text-xs">
              <strong className="font-medium text-emerald-600 dark:text-emerald-400">Chosen:</strong> {t.choice} <span className="text-slate-400">vs.</span> {t.alternative}
              <br />
              <span className="italic text-slate-500 dark:text-slate-400">{t.reason}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const SelectedWork: React.FC = () => {
  const p1 = PROJECTS[0];
  const p2 = PROJECTS[1];
  const p3 = PROJECTS[2];
  const p4 = PROJECTS[3];

  return (
    <section id="work" className="scroll-mt-24 relative border-t border-slate-200 dark:border-indigo-500/15">
      {/* Work Section Intro Banner */}
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 font-bold">
              <span>02 — Flagship Case Studies</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-950 dark:text-white">
              Selected Work
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 max-w-sm">
            Production system architectures, verified latency waterfalls, and real-world failure mitigations.
          </p>
        </div>
      </div>

      {/* COMPACT & BALANCED PROJECT SHOWCASE (NO EXCESSIVE SCROLLING, FULLY RESPONSIVE) */}
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-6 space-y-8 sm:space-y-12 md:space-y-16 pb-20 sm:pb-24">
        {/* ==============================================================
            PROJECT 01: LYNSi WELLNESS CORE API
           ============================================================== */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: Index, Spec Links & Headline Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-indigo-500/15 pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                01 / 04
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                Event-Driven Audio &amp; Stateful LLMs
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
              {p1.githubUrl && (
                <a
                  href={p1.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/90 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-indigo-500/30 hover:border-indigo-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                </a>
              )}
              <span className="font-mono text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20">
                {p1.headlineMetric}
              </span>
            </div>
          </div>

          {/* Main 2-Column Symmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Narrative, Trade-offs & Stack (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white mb-1.5 sm:mb-2 leading-tight">
                  {p1.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                  {p1.subtitle}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase mb-1">
                    The Challenge
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p1.challenge}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-1">
                    The Craft &amp; Solution
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p1.craft}
                  </p>
                </div>
              </div>

              {/* Architectural Trade-offs Card */}
              <ProjectTradeoffs tradeoffs={p1.tradeoffs} />

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                {p1.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 dark:bg-indigo-950/40 text-slate-800 dark:text-indigo-200 border border-slate-200 dark:border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Metrics & Schema (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Latency Waterfall Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Latency Waterfall (Total: 1.84s)
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    &lt; 2.0s SLA
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3 font-mono text-[11px] sm:text-xs">
                  <div>
                    <div className="flex justify-between mb-1 text-slate-700 dark:text-slate-300">
                      <span className="truncate pr-2">Audio Ingest &amp; BullMQ Enqueue</span>
                      <span className="font-bold text-sky-600 dark:text-sky-400 shrink-0">240 ms</span>
                    </div>
                    <div className="h-1.5 sm:h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-sky-500 rounded-full" style={{ width: '13%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-slate-700 dark:text-slate-300">
                      <span className="truncate pr-2">Whisper Audio Transcription</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">1,120 ms</span>
                    </div>
                    <div className="h-1.5 sm:h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: '61%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-slate-700 dark:text-slate-300">
                      <span className="truncate pr-2">LangGraph Rolling Compression</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 shrink-0">360 ms</span>
                    </div>
                    <div className="h-1.5 sm:h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '19.5%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1 text-slate-700 dark:text-slate-300">
                      <span className="truncate pr-2">Prisma Checkpoint Commit</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">120 ms</span>
                    </div>
                    <div className="h-1.5 sm:h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '6.5%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Token Budget & Cost Metrics (Symmetrical 2x2 Grid) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Context Retention &amp; Economics
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                    62% Saved
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                  LangGraph rolling state summary keeps dialogue bounded under a 12k token ceiling, preventing context bloat across 50+ user turns.
                </p>

                {/* Symmetrical 2x2 Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center font-mono text-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Token Ceiling</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-sky-600 dark:text-sky-400 my-0.5 sm:my-1">12k max</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">vs 32k raw</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">LangSmith Eval</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 my-0.5 sm:my-1">80–90%</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">faster runs</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Checkpointer Bloat</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-indigo-600 dark:text-indigo-400 my-0.5 sm:my-1">-82% cut</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">disk retention</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Concurrency SLA</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 my-0.5 sm:my-1">99.8%</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">zero turn drop</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <ArchitecturePipeline steps={p1.architectureFlow} />
        </div>

        {/* ==============================================================
            PROJECT 02: AI HOME INSPECTION PIPELINE
           ============================================================== */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: Index & Headline Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-indigo-500/15 pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                02 / 04
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                Reliable Agentic Workflows &amp; Checkpoint Pruning
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
              {p2.githubUrl && (
                <a
                  href={p2.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/90 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-emerald-500/30 hover:border-emerald-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                </a>
              )}
              <span className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">
                {p2.headlineMetric}
              </span>
            </div>
          </div>

          {/* Main 2-Column Symmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white mb-1.5 sm:mb-2 leading-tight">
                  {p2.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                  {p2.subtitle}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase mb-1">
                    The Challenge
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p2.challenge}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-1">
                    The Craft &amp; Solution
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p2.craft}
                  </p>
                </div>
              </div>

              {/* Architectural Trade-offs Card */}
              <ProjectTradeoffs tradeoffs={p2.tradeoffs} />

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                {p2.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 dark:bg-emerald-950/40 text-slate-800 dark:text-emerald-200 border border-slate-200 dark:border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Schema Validation & Multiplexer (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Zod Self-Healing Schema Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Zod Self-Healing Schema Guardrail
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    99.4% Ingestion
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs font-mono mb-2">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 overflow-x-auto">
                    <div className="text-[10px] text-rose-400 uppercase mb-1 font-bold">Pass 1: Raw Output</div>
                    <pre className="text-rose-300 text-[10px] sm:text-[11px] leading-tight">
{`{
  "severity": "CRITICAL",
  "cost": "$4,200"
}`}
                    </pre>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 overflow-x-auto">
                    <div className="text-[10px] text-emerald-400 uppercase mb-1 font-bold">Pass 2: Repaired</div>
                    <pre className="text-emerald-300 text-[10px] sm:text-[11px] leading-tight">
{`{
  "severity": "HIGH",
  "costUSD": 4200
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Single-Flight & Pruning Metrics (Symmetrical 2x2 Grid) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Single-Flight Burst Coalescer
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    -90% DB Read Load
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                  50 concurrent client reads multiplexed onto a single in-flight Promise channel, eliminating database stampedes.
                </p>

                {/* Symmetrical 2x2 Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center font-mono text-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Checkpointer Pruning</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 my-0.5 sm:my-1">&gt; 80% cut</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">table lock bloat</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Validation Speed</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-sky-600 dark:text-sky-400 my-0.5 sm:my-1">&lt; 15 ms</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">schema verification</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Coalesce Multiplier</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-amber-600 dark:text-amber-400 my-0.5 sm:my-1">50 : 1</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">burst ratio</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Downstream Crash</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 my-0.5 sm:my-1">0.0%</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">zero schema panics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <ArchitecturePipeline steps={p2.architectureFlow} />
        </div>

        {/* ==============================================================
            PROJECT 03: TRACCAR GPS TRACKING MIDDLEWARE
           ============================================================== */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-indigo-500/15 pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/30">
                03 / 04
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                Binary Protocol Codecs &amp; Lock-Free Retention
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
              {p3.githubUrl && (
                <a
                  href={p3.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/90 hover:bg-sky-50 dark:hover:bg-sky-950/60 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-sky-500/30 hover:border-sky-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                </a>
              )}
              <span className="font-mono text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-500/20">
                {p3.headlineMetric}
              </span>
            </div>
          </div>

          {/* Main 2-Column Symmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white mb-1.5 sm:mb-2 leading-tight">
                  {p3.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                  {p3.subtitle}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase mb-1">
                    The Challenge
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p3.challenge}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-1">
                    The Craft &amp; Solution
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p3.craft}
                  </p>
                </div>
              </div>

              {/* Architectural Trade-offs Card */}
              <ProjectTradeoffs tradeoffs={p3.tradeoffs} />

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                {p3.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 dark:bg-sky-950/40 text-slate-800 dark:text-sky-200 border border-slate-200 dark:border-sky-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: High-Throughput Binary Codec & SQL Pruning (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* GT06 Binary Frame Decoder Breakdown */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Zero-Allocation GT06 Codec
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-sky-600 dark:text-sky-400 font-bold">
                    200+ Hz Rate
                  </span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 text-[11px] sm:text-xs font-mono mb-2 space-y-2 overflow-x-auto">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Binary Frame (31 Bytes):</div>
                  <div className="text-sky-300 font-bold tracking-wider whitespace-nowrap text-[10px] sm:text-xs">
                    <span className="text-indigo-400">78 78</span> (Start) <span className="text-amber-400">1F</span> (Len) <span className="text-emerald-400">22</span> (GPS) ... <span className="text-rose-400">4D 5A</span> (CRC)
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                    Parsed directly via <code className="text-sky-300">Buffer.readUInt16BE()</code> with 0 intermediate string allocations.
                  </div>
                </div>
              </div>

              {/* Batched SQL Retention (Symmetrical 2x2 Grid) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Batched SQL Retention
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    30%+ Space Reclaimed
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                  Batches of 2,000 deletes executed continuously with sleep intervals, eliminating PostgreSQL exclusive table locks under heavy telemetry influx.
                </p>

                {/* Symmetrical 2x2 Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center font-mono text-xs">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Codec Latency</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-sky-600 dark:text-sky-400 my-0.5 sm:my-1">&lt; 1.2 ms</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">per frame decode</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Daily Pruned</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 my-0.5 sm:my-1">~200k rows</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">automated purge</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Lock Contention</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 my-0.5 sm:my-1">0.0 ms</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">lock-free chunking</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Telemetry Loss</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-indigo-600 dark:text-indigo-400 my-0.5 sm:my-1">0.000%</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">zero packet drop</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <ArchitecturePipeline steps={p3.architectureFlow} />
        </div>

        {/* ==============================================================
            PROJECT 04: ADBLOCKER PRO BACKEND API
           ============================================================== */}
        <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 shadow-xl dark:shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-indigo-500/15 pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-mono text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                04 / 04
              </span>
              <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                AST Compilers &amp; Edge Sync
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
              {p4.githubUrl && (
                <a
                  href={p4.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900/90 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-indigo-500/30 hover:border-indigo-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                </a>
              )}
              <span className="font-mono text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20">
                {p4.headlineMetric}
              </span>
            </div>
          </div>

          {/* Main 2-Column Symmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white mb-1.5 sm:mb-2 leading-tight">
                  {p4.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                  {p4.subtitle}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase mb-1">
                    The Challenge
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p4.challenge}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-indigo-500/15">
                  <div className="text-[11px] sm:text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-1">
                    The Craft &amp; Solution
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {p4.craft}
                  </p>
                </div>
              </div>

              {/* Architectural Trade-offs Card */}
              <ProjectTradeoffs tradeoffs={p4.tradeoffs} />

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                {p4.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-100 dark:bg-indigo-950/40 text-slate-800 dark:text-indigo-200 border border-slate-200 dark:border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: AST Compaction & Edge Distribution (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      AST Filter Compaction
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                    -45% Size
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                  Adblock Plus and uBlock Origin raw text rules compiled into an in-memory prefix trie, cutting extension memory footprint from 4.2 MB to 2.3 MB.
                </p>

                {/* Symmetrical 2x2 Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 font-mono text-xs text-center">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Compiled Bundle</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-indigo-600 dark:text-indigo-400 my-0.5 sm:my-1">-45%</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">4.2M ➔ 2.3M</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Edge Propagation</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-sky-600 dark:text-sky-400 my-0.5 sm:my-1">&lt; 50 ms</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">Redis edge sync</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">DOM Trie Parse</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-emerald-600 dark:text-emerald-400 my-0.5 sm:my-1">&lt; 8 ms</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">pre-indexed lookup</div>
                  </div>

                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-indigo-500/15">
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase">Telemetry Buffer</div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-indigo-600 dark:text-indigo-400 my-0.5 sm:my-1">5s Flush</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">Redis stream batch</div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/20 shadow-md">
                <div className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5 sm:mb-2">
                  High-Volume Telemetry Engine
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Client performance metrics and blocked domain telemetry ingested asynchronously via Redis streams, batched into PostgreSQL every 5 seconds with zero read contention.
                </p>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <ArchitecturePipeline steps={p4.architectureFlow} />
        </div>
      </div>
    </section>
  );
};
