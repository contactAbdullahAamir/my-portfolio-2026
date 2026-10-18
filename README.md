# Abdullah Aamir — Cosmic Systems Engineering Observatory

A story-driven, interactive portfolio website for **Abdullah Aamir** — Software Engineer & Technical Lead specializing in **Stateful AI Systems (LangGraph, Zod)** and **High-Throughput Backend Architecture (NestJS, BullMQ, Redis, PostgreSQL)**.

Designed around a **Cosmic Systems Engineering / Observatory Theme** with interactive celestial physics, real production stats & benchmarks (no fake simulations), prominent social coordinates, and high-contrast dual theme support (Cosmic Void Dark Mode & Solar Paper Light Mode).

---

## What Changed & Key Enhancements

### 1. High Visibility Social Media & Direct Coordinates
- **Top Bar**: Direct social media icon strip in the header (GitHub, LinkedIn, Linktree, Email) beside the live Lahore (UTC+5) observatory clock.
- **Hero Direct Channels**: Prominent coordinate bar right under the hero narrative with direct links to:
  - **LinkedIn**: `linkedin.com/in/contactabdullahaamir`
  - **GitHub**: `github.com/contactAbdullahAamir`
  - **Linktree**: `linktr.ee/Abdullah_Aamir`
  - **Email**: `contactabdullahaamir@gmail.com`
  - **Direct Mobile**: `+92 307 6454394`
- **Contact Section**: Glowing interactive channel cards with 1-click copy, verified badges, and link to archived portfolio.

### 2. Re-engineered Project Showcase: Real Interactive Stats & Topology (No Fake Simulations)
- Replaced the mock step-by-step runner with **Real Interactive Production Telemetry & Benchmarks**:
  - **Lynsi Wellness Core API**:
    - **End-to-End Latency Waterfall**: Visual breakdown of the sub-2.0s audio turnaround (Audio Ingestion: 240ms, Whisper Streaming: 1,120ms, LangGraph State Compaction: 360ms, DB Checkpoint: 120ms = **1.84s total**).
    - **Interactive Rolling Profile State & Cost Calculator**: Dynamic slider (6k to 32k tokens) calculating token pruning and **30–40% cost savings** via the 12,000-token ceiling.
    - **LangSmith Evaluation Regression Metric**: 80–90% faster test cycles.
  - **AI Home Inspection Pipeline**:
    - **Zod Self-Healing Comparison Bench**: Interactive toggle comparing standard LLM drift (74% valid) against Abdullah's Zod retry loop (**99.4% structured output reliability**).
    - **Single-Flight Cache Concurrency Slider**: Interactive slider (10 to 100 concurrent requests) showing **90% database load reduction**.
  - **Traccar GPS Tracking Middleware**:
    - **200+ Hz Sustained Ingestion Dial**: Interactive packet frequency slider (100 Hz to 350 Hz) demonstrating sustained binary ingestion, &lt; 1.2ms decode times, and **0.0ms table lock delay** via batched SQL deletes.
  - **AdBlocker Pro Backend API**:
    - **uBlock-Style AST Compactor**: Rule deduplication visualizer showing 48,500 raw rules compacted by **-45%** with &lt; 50ms edge Redis sync.
  - **Architecture Topology View**: Clean node graph showing gateway ingestion, BullMQ worker threads, stateful LangGraph memory, and batched persistence.

### 3. Cosmic Background & Harmonious Celestial Theme
- **Astronomy Background**: Interactive HTML5 Canvas starfield with realistic stellar twinkling, constellation lines connecting smoothly near cursor proximity, gravitational lens effect, and subtle cosmic nebula glows.
- **Cosmic Dark Mode (Default)**: Deep space void (`#07080D`), celestial indigo (`#6366F1`), starlight cyan (`#38BDF8`), and nebula emerald.
- **Solar Light Mode (Fully Configured)**: Crisp solar observatory paper (`#F8FAFC`), pure white elevated surfaces (`#FFFFFF`), high-contrast midnight slate typography (`#0F172A` & `#475569`), and vivid indigo accents (`#4F46E5`).

### 4. Interactive Concurrency Sandbox & Story Trajectory
- **Touch the Guardrails Sandbox**: 3 tactile switches (Single-Flight, Zod Repair, Batched Pruning) + "⚡ Send 50 Concurrent Requests" button with live comparative gauges.
- **The Story (3-Chapter Switcher)**: The Classroom (2022), The Discovery Room (2024), and The Tech Lead Seat (2026).
- **Credentials Slide-Over Dossier**: Full education at UET Lahore, 5 Atlassian certifications, comprehensive categorized stack, and career achievements.

---

## Development & Build Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build production bundle to /dist
npm run build

# Preview production build locally (http://localhost:4173)
npm run preview
```
