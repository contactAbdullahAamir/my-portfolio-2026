import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  AlertCircle,
  GitBranch,
  Terminal,
  Database
} from 'lucide-react';
import { playPop } from '../utils/sound';

interface ArchitecturePattern {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  summary: string;
  metricHighlight: string;
  metricLabel: string;
  problemStatement: string;
  solutionArchitecture: string;
  productionBenchmark: { label: string; value: string; detail: string }[];
  visualizerType: 'langgraph' | 'singleflight' | 'zod' | 'binary';
}

const ARCHITECTURE_PATTERNS: ArchitecturePattern[] = [
  {
    id: 'langgraph',
    tabLabel: 'LangGraph State Engine',
    badge: 'Agentic AI',
    title: 'Deterministic State Machine & Checkpoint Pruning',
    summary: 'Cyclic graph orchestration with rolling conversation summaries, preventing token bloat while persisting state across multi-turn audio dialogues.',
    metricHighlight: '-82% Bloat',
    metricLabel: 'PostgreSQL Checkpoint Overhead',
    problemStatement: 'Unbounded agent history causes quadratic LLM inference cost and ballooning database checkpoint storage, degrading read latency after 15+ conversational turns.',
    solutionArchitecture: 'LangGraph StateGraph with custom checkpointer pruning: rolling dialogue summarization maintains context under a strict 12,000 token limit, followed by batched state eviction.',
    productionBenchmark: [
      { label: 'Token Ceiling', value: '12,000', detail: 'Strict token cap enforced' },
      { label: 'State Latency', value: '< 45 ms', detail: 'Prisma state rehydration' },
      { label: 'Storage Reclaimed', value: '82%', detail: 'Batched SQL pruning' },
      { label: 'Turn Capacity', value: '50+ turns', detail: 'Zero context runaway' },
    ],
    visualizerType: 'langgraph',
  },
  {
    id: 'singleflight',
    tabLabel: 'Single-Flight Coalescer',
    badge: 'Distributed Systems',
    title: 'Mutex Promise Multiplexing for Cache Stampedes',
    summary: 'Eliminates database thundering herd problems by coalescing 50+ identical concurrent requests into a single in-flight upstream execution.',
    metricHighlight: '-90% Read Contention',
    metricLabel: 'Peak Database Burst Load',
    problemStatement: 'When 50 mobile clients simultaneously poll the identical live status endpoint during cache invalidation, raw databases experience CPU spikes and lock timeouts.',
    solutionArchitecture: 'In-memory single-flight key registry: Request #1 locks an execution channel; Requests #2 through #50 register as listeners to the same pending Promise.',
    productionBenchmark: [
      { label: 'Coalesce Ratio', value: '50:1', detail: 'Burst multiplexed to single fetch' },
      { label: 'Mutex Overhead', value: '0.04 ms', detail: 'Microsecond memory key lookup' },
      { label: 'DB CPU Drop', value: '-90%', detail: 'Eliminated stampede spikes' },
      { label: 'Tail Latency (p99)', value: '18 ms', detail: 'Across all coalesced callers' },
    ],
    visualizerType: 'singleflight',
  },
  {
    id: 'zod',
    tabLabel: 'Zod Self-Healing Loop',
    badge: 'Type Safety',
    title: 'Multi-Pass Structured Schema Healing',
    summary: 'Two-stage LLM output validation combining Zod safeParse with automated diagnostic feedback prompts to guarantee 99.4% schema compliance.',
    metricHighlight: '99.4% Success',
    metricLabel: 'Downstream Ingestion Reliability',
    problemStatement: 'Raw LLM JSON output frequently produces schema drift (e.g., "$4,200" string instead of 4200 integer, casing mismatches), crashing typed downstream microservices.',
    solutionArchitecture: 'Zod parse trap: When validation fails, the exact Zod issue path and expected type signature are fed back into a targeted one-token retry correction prompt.',
    productionBenchmark: [
      { label: 'Pass 1 Direct Rate', value: '74.2%', detail: 'Raw LLM compliance' },
      { label: 'Pass 2 Healed Rate', value: '99.4%', detail: 'After automated Zod feedback' },
      { label: 'Validation Cost', value: '< 8 ms', detail: 'Pure CPU schema parse' },
      { label: 'Downstream Panic', value: '0.0%', detail: 'Strict typed contract guarantee' },
    ],
    visualizerType: 'zod',
  },
  {
    id: 'binary',
    tabLabel: 'Binary Protocol Codec',
    badge: 'High-Throughput IoT',
    title: 'Zero-Allocation GT06 Frame Decoder',
    summary: 'High-frequency binary packet decoding via Node.js Buffer bitwise shifts, processing 200+ telemetry frames/second with sub-1.2ms latency.',
    metricHighlight: '< 1.2 ms Latency',
    metricLabel: 'Sustained Frame Decode Time',
    problemStatement: 'String-based GPS packet parsers allocate thousands of intermediate objects per second, causing massive V8 garbage collection pauses under high IoT fleet load.',
    solutionArchitecture: 'Buffer.readUInt16BE bitwise decoding: reads start flags, packet length, protocol ID, latitude/longitude, and CRC16 checksum with zero memory re-allocation.',
    productionBenchmark: [
      { label: 'Ingestion Rate', value: '200+ Hz', detail: 'Sustained telemetry throughput' },
      { label: 'GC Heap Impact', value: 'Near Zero', detail: 'Buffer reuse without strings' },
      { label: 'CRC16 Check', value: '100% Verified', detail: 'Bitwise packet integrity' },
      { label: 'Frame Loss Rate', value: '0.000%', detail: 'Zero dropped telemetry packets' },
    ],
    visualizerType: 'binary',
  },
];

export const InteractiveLab: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('langgraph');
  const activePattern = ARCHITECTURE_PATTERNS.find((p) => p.id === activeTabId) || ARCHITECTURE_PATTERNS[0];

  return (
    <section id="lab" className="scroll-mt-24 py-16 sm:py-20 md:py-28 border-t border-slate-200 dark:border-indigo-500/15">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-3 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 font-bold">
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>03 — Production Systems Blueprint</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white">
              Architecture &amp; Guardrails
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 max-w-sm">
            Deterministic state machines, concurrency coalescers, and binary protocol codecs engineered for zero unhandled failure.
          </p>
        </div>

        {/* SYMMETRICAL 4-TAB SELECTOR (2x2 on Mobile, 4x1 on Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 mb-6 sm:mb-8">
          {ARCHITECTURE_PATTERNS.map((p) => {
            const isSelected = activeTabId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  playPop();
                  setActiveTabId(p.id);
                }}
                className={`p-2.5 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/40 shadow-md ring-1 ring-indigo-500/30'
                    : 'border-slate-200 dark:border-indigo-500/15 bg-white dark:bg-[#0E1220]/70 hover:border-indigo-300 dark:hover:border-indigo-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1 sm:mb-1.5 flex-wrap gap-1">
                  <span className={`text-[9px] sm:text-[10px] font-mono uppercase font-bold px-1.5 sm:px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {p.badge}
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {p.metricHighlight}
                  </span>
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-semibold text-slate-900 dark:text-white line-clamp-1">
                  {p.tabLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE PATTERN ARCHITECTURAL INSPECTOR */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePattern.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-indigo-500/20 bg-white dark:bg-[#0E1220]/95 p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Pattern Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200 dark:border-indigo-500/15 pb-4 sm:pb-6 mb-6 sm:mb-8">
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-1">
                  <span>SYSTEM DESIGN PATTERN</span>
                  <span>·</span>
                  <span>{activePattern.badge}</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-950 dark:text-white">
                  {activePattern.title}
                </h3>
                <p className="text-xs sm:text-sm font-light text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                  {activePattern.summary}
                </p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 text-left sm:text-right shrink-0">
                <div className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Production Impact</div>
                <div className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                  {activePattern.metricHighlight}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  {activePattern.metricLabel}
                </div>
              </div>
            </div>

            {/* 2-Column Balanced Architecture Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-6 sm:mb-8">
              {/* Left Column: Problem & Architectural Solution (6 cols) */}
              <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/20">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-rose-700 dark:text-rose-400 font-bold uppercase mb-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>The Production Vulnerability</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activePattern.problemStatement}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>Engineered Guardrail Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activePattern.solutionArchitecture}
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Blueprint Schema / Topology (6 cols) */}
              <div className="lg:col-span-6">
                {activePattern.visualizerType === 'langgraph' && (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-indigo-400 font-semibold truncate pr-2">
                        <GitBranch className="w-3.5 h-3.5 shrink-0" />
                        <span>LangGraph State Graph Topology</span>
                      </span>
                      <span className="text-emerald-400 shrink-0">12k Cap</span>
                    </div>

                    <div className="space-y-2 py-1 text-[11px] sm:text-xs">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                        <span className="text-white font-semibold truncate">Node 1: Audio Transcript Ingest</span>
                        <span className="text-slate-400 ml-auto shrink-0">&lt; 240ms</span>
                      </div>
                      <div className="flex justify-center text-slate-500">↓</div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-indigo-950/70 border border-indigo-700/60">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                        <span className="text-indigo-200 font-semibold truncate">Node 2: Rolling Summary Compression</span>
                        <span className="text-emerald-400 ml-auto shrink-0">&gt;12k cut</span>
                      </div>
                      <div className="flex justify-center text-slate-500">↓</div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-white font-semibold truncate">Node 3: PostgreSQL Checkpoint Pruner</span>
                        <span className="text-slate-400 ml-auto shrink-0">0ms Locks</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePattern.visualizerType === 'singleflight' && (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-amber-400 font-semibold truncate pr-2">
                        <Zap className="w-3.5 h-3.5 shrink-0" />
                        <span>In-Flight Mutex Multiplexer</span>
                      </span>
                      <span className="text-emerald-400 shrink-0">50 ➔ 1</span>
                    </div>

                    <div className="space-y-2 py-1 text-[11px] sm:text-xs">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                        <div className="text-[10px] text-slate-400 mb-0.5">Incoming Burst (50 Clients):</div>
                        <div className="text-sky-300 break-all">GET /api/v1/telemetry/live-fleet</div>
                      </div>
                      <div className="flex justify-center text-slate-500 text-[10px]">↓ Mutex Key ('fleet:live')</div>
                      <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-700/60">
                        <div className="text-[10px] text-emerald-300 mb-0.5">Single Upstream Fetch:</div>
                        <div className="text-emerald-200 font-bold text-[10px] sm:text-xs">1 SQL Query Dispatched (49 Callers Awaiting Shared Promise)</div>
                      </div>
                    </div>
                  </div>
                )}

                {activePattern.visualizerType === 'zod' && (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-indigo-400 font-semibold truncate pr-2">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>Pass 1 Drift ➔ Pass 2 Healed</span>
                      </span>
                      <span className="text-emerald-400 shrink-0">99.4% Verified</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] sm:text-[11px]">
                      <div className="p-2 sm:p-2.5 rounded-lg bg-rose-950/50 border border-rose-800/60 overflow-x-auto">
                        <div className="text-rose-400 font-semibold mb-0.5">Pass 1: Schema Drift</div>
                        <div className="text-slate-400">{'{'}</div>
                        <div className="text-rose-300 pl-2">"cost": "$4,200",</div>
                        <div className="text-rose-300 pl-2">"status": "CRITICAL"</div>
                        <div className="text-slate-400">{'}'}</div>
                        <div className="text-rose-400 text-[9px] mt-1">✗ Expected number &amp; enum</div>
                      </div>

                      <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-800/60 overflow-x-auto">
                        <div className="text-emerald-400 font-semibold mb-0.5">Pass 2: Zod Healed</div>
                        <div className="text-slate-400">{'{'}</div>
                        <div className="text-emerald-300 pl-2">"costUSD": 4200,</div>
                        <div className="text-emerald-300 pl-2">"status": "HIGH"</div>
                        <div className="text-slate-400">{'}'}</div>
                        <div className="text-emerald-400 text-[9px] mt-1">✓ Type-safe &amp; verified</div>
                      </div>
                    </div>
                  </div>
                )}

                {activePattern.visualizerType === 'binary' && (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold truncate pr-2">
                        <Terminal className="w-3.5 h-3.5 shrink-0" />
                        <span>GT06 Hex Frame Decoder</span>
                      </span>
                      <span className="text-emerald-400 shrink-0">&lt; 1.2ms</span>
                    </div>

                    <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[10px] sm:text-[11px] space-y-1 overflow-x-auto">
                      <div className="text-slate-400 text-[9px] sm:text-[10px]">Raw Hex Buffer [31 bytes]:</div>
                      <div className="text-sky-300 font-bold tracking-wider whitespace-nowrap">
                        <span className="text-indigo-400">78 78</span> <span className="text-amber-400">1F</span> <span className="text-emerald-400">22</span> 0B 08 1D ... <span className="text-rose-400">4D 5A</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-[9px] sm:text-[10px]">
                      <div className="p-1 sm:p-1.5 rounded bg-indigo-950/60 border border-indigo-800/40 text-center">
                        <div className="text-slate-400">Start</div>
                        <div className="text-indigo-300 font-bold">0x7878</div>
                      </div>
                      <div className="p-1 sm:p-1.5 rounded bg-emerald-950/60 border border-emerald-800/40 text-center">
                        <div className="text-slate-400">Proto</div>
                        <div className="text-emerald-300 font-bold">0x22</div>
                      </div>
                      <div className="p-1 sm:p-1.5 rounded bg-rose-950/60 border border-rose-800/40 text-center">
                        <div className="text-slate-400">CRC16</div>
                        <div className="text-rose-300 font-bold">0x4D5A</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SYMMETRICAL 4-BENCHMARK PRODUCTION METRICS GRID (2x2 on Mobile, 4x1 on Desktop) */}
            <div className="border-t border-slate-200 dark:border-indigo-500/15 pt-5 sm:pt-6">
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 sm:mb-3 font-bold">
                Production Verified Benchmarks &amp; Tolerances:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {activePattern.productionBenchmark.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-[#141A2D]/80 border border-slate-200 dark:border-indigo-500/15 text-center flex flex-col justify-between"
                  >
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                      {b.label}
                    </div>
                    <div className="text-base sm:text-lg md:text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400 my-0.5 sm:my-1">
                      {b.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-300">
                      {b.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
