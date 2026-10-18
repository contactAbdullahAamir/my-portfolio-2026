import { Project, Perspective, StoryChapter } from '../types';

export const PERSONAL_INFO = {
  name: "Abdullah Aamir",
  role: "Software Engineer | Technical Lead",
  focus: "Stateful AI Systems & High-Throughput Distributed Backends",
  company: "Softaims",
  location: "Lahore, Pakistan",
  timezone: "Asia/Karachi",
  utcOffset: "+5",
  email: "contactabdullahaamir@gmail.com",
  phone: "+92 307 6454394",
  linkedin: "https://www.linkedin.com/in/contactabdullahaamir",
  github: "https://github.com/contactAbdullahAamir",
  linktree: "https://linktr.ee/Abdullah_Aamir",
  previousPortfolio: "https://contactabdullahaamir.github.io/My-Portfolio/",
  resumeUrl: "/Abdullah_Aamir_Resume.pdf",
  resumePrintUrl: "/resume.html",
  calUrl: "https://calendly.com", // Or Cal.com link
  statusText: "Architecting deterministic AI workflows (LangGraph) & sub-2s event backends (NestJS, BullMQ)",
  availability: "Available for Technical Leadership & High-Impact Engineering Roles"
};

export const ATS_KEYWORDS = [
  "System Design",
  "Distributed Systems",
  "LangGraph & Multi-Agent State",
  "NestJS & TypeScript",
  "BullMQ Async Queues",
  "Redis Pub/Sub & Caching",
  "PostgreSQL & Prisma",
  "Zod Schema Self-Healing",
  "Binary Socket Codecs",
  "OpenAI Whisper & LLMs",
  "Architecture RFCs",
  "Team Mentorship"
];

export const PERSPECTIVES: Perspective[] = [
  {
    id: "ai",
    num: "01",
    title: "Stateful AI Systems",
    tagline: "Deterministic LangGraph state machines & self-healing schemas",
    summary: "LLMs in production fail when treated as simple prompt-in text-out boxes. I architect recursive state graphs, rolling token windows, and Zod-based auto-repair loops that turn probabilistic models into dependable enterprise infrastructure.",
    bullets: [
      "99%+ structured generation success rate with runtime schema self-correction loops",
      "12,000-token rolling user profile state in LangGraph, slashing runtime costs by 30–40%",
      "Automated prompt regression testing suites via LangSmith reducing cycle times by 80–90%"
    ],
    techTags: ["LangGraph", "LangChain", "Zod", "OpenAI Whisper", "LangSmith", "TypeScript"],
    badge: "Deterministic Workflows"
  },
  {
    id: "backends",
    num: "02",
    title: "Event-Driven Backends",
    tagline: "Sub-2s queues, binary socket codecs & zero-lock retention",
    summary: "High volume doesn't forgive sloppy concurrency. I design asynchronous event-driven pipelines using NestJS and BullMQ, high-frequency IoT binary protocols, and batched pruning algorithms that maintain zero table locks under heavy load.",
    bullets: [
      "< 2.0s audio-to-text pipeline from voice upload to completed transcription worker",
      "200+ Hz sustained IoT binary packet ingestion using custom GT06/H02 hex codecs",
      "Single-flight request coalescing that quenches database read bursts by up to 90%"
    ],
    techTags: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "Prisma", "Docker", "Python Sockets"],
    badge: "High Throughput"
  },
  {
    id: "human",
    num: "03",
    title: "Engineering Leadership",
    tagline: "Rooted in 2 years of Requirements Engineering & Technical PM",
    summary: "Before becoming a Technical Lead, I spent years sitting between non-technical stakeholders and engineers. Systems rarely break because of syntax; they break because nobody clarified the boundary conditions or understood the human problem first.",
    bullets: [
      "Translating ambiguous multi-stakeholder vision into bulletproof API schemas & contracts",
      "Mentoring engineering squads to build for maintainability, clean architecture, and telemetry",
      "Eliminating scope creep and costly re-architecture by solving domain ambiguities upfront"
    ],
    techTags: ["System Architecture", "API Contract Design", "Jira / Confluence Certified", "Technical Mentorship"],
    badge: "Leadership & Empathy"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lynsi-wellness",
    index: "01",
    title: "Lynsi Wellness Core API",
    subtitle: "Event-driven voice journal pipeline & LangGraph state machine",
    headlineMetric: "< 2.0s Voice Pipeline · -30–40% Token Cost",
    summary: "Architected core backend APIs, database schemas, third-party integrations (Plaid, Twilio), and asynchronous workers for an AI wellness product.",
    challenge: "Voice journals arrived irregularly with unpredictable audio durations and high token consumption when feeding multi-day conversational history into LLMs.",
    craft: "Built an event-driven BullMQ audio worker pipeline utilizing OpenAI Whisper with sub-2s turnaround, backed by a 12,000-token rolling profile compressor in LangGraph.",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "LangChain", "LangGraph", "OpenAI Whisper", "LangSmith", "Plaid", "Twilio"],
    githubUrl: "https://github.com/contactAbdullahAamir",
    liveUrl: "https://contactabdullahaamir.github.io/My-Portfolio/",
    architectureFlow: [
      { step: "01", label: "Audio Ingest Gate", detail: "HTTP multipart voice stream validated & checksummed", tech: "NestJS Fastify" },
      { step: "02", label: "Async Queue", detail: "BullMQ worker pool with exponential retry backoff", tech: "BullMQ + Redis" },
      { step: "03", label: "Whisper Worker", detail: "Sub-2.0s chunked transcription pipeline", tech: "OpenAI Whisper" },
      { step: "04", label: "LangGraph State", detail: "Recursive state node compresses history into 12k tokens", tech: "LangGraph" },
      { step: "05", label: "Commit & Alerts", detail: "Transactional checkpoint stored & Twilio push fired", tech: "Prisma + Twilio" }
    ],
    tradeoffs: [
      {
        decision: "Asynchronous Worker Queue vs. Synchronous API Execution",
        choice: "BullMQ isolated worker processes",
        alternative: "Synchronous NestJS route handlers",
        reason: "Audio decoding and transcription are CPU/network heavy. Offloading to BullMQ guarantees API gateway p95 latency stays under 20ms regardless of upload size."
      },
      {
        decision: "LangGraph Recursive State vs. Raw Context Window",
        choice: "12,000-token rolling memory state graph",
        alternative: "Full conversation history in prompt",
        reason: "Slashing repetitive conversational fluff saved 30–40% in runtime API token bills while preventing context-window degradation on multi-day journals."
      }
    ],
    metrics: [
      { label: "Voice Pipeline Latency", value: "< 2.0s", detail: "From client upload to transcribed structured event" },
      { label: "Rolling Profile State", value: "12,000 tokens", detail: "Recursive state compression in LangGraph" },
      { label: "Runtime LLM Cost", value: "-30–40%", detail: "Saved via targeted memory window pruning" },
      { label: "Prompt Regression Time", value: "-80–90%", detail: "Automated evaluations using LangSmith datasets" }
    ],
    simulation: {
      title: "Audio Ingestion & Rolling Token State Simulator",
      description: "Trace how a user's voice journal is received, queued, transcribed by Whisper, and recursively compacted into a 12,000-token memory graph.",
      samplePayload: {
        sessionId: "sess_lynsi_9481",
        audioBlobUrl: "s3://lynsi-media/audio_journal_v4.m4a",
        durationSec: 42.8,
        previousStateTokens: 14200
      },
      steps: [
        {
          title: "Audio Payload Ingest & S3 Pre-sign",
          description: "Incoming HTTP multipart voice journal validated, checksummed, and pushed to BullMQ async queue.",
          input: "POST /v1/journal/voice (MIME: audio/m4a, 4.2 MB)",
          output: "202 Accepted { jobId: 'bull_aud_8892', status: 'queued' }",
          badge: "NestJS + BullMQ"
        },
        {
          title: "Whisper Transcription Worker (<2.0s)",
          description: "Dedicated worker worker thread streams audio chunks to OpenAI Whisper API with exponential backoff retry.",
          input: "Job ID: bull_aud_8892 (buffer: 4.2MB)",
          output: "Transcription ready: 'Today was stressful with the sprint deadline...'",
          badge: "OpenAI Whisper"
        },
        {
          title: "LangGraph Rolling Memory Summarizer",
          description: "Recursive state graph integrates the transcript into the user's longitudinal health memory without exceeding token ceilings.",
          input: "Prior token count: 14,200 (over 12,000 budget)",
          output: "Compacted to 9,450 tokens. Key stressors & sleep markers extracted.",
          badge: "LangGraph State Node"
        },
        {
          title: "Checkpointed Profile & Twilio Alert",
          description: "Updated memory checkpoint stored in PostgreSQL; automated wellness notification triggered via Twilio.",
          input: "Prisma.userProfile.update({ where: { userId } })",
          output: "200 OK — State committed (latency: 1.84s total)",
          badge: "Prisma + Twilio"
        }
      ]
    }
  },
  {
    id: "ai-inspection",
    index: "02",
    title: "AI Home Inspection Pipeline",
    subtitle: "Stateful agent checkpointer with Zod self-healing loops",
    headlineMetric: "99%+ Valid JSON · -80% DB Bloat",
    summary: "Architected backend state and data-management infrastructure for long-running agentic inspection workflows using PostgreSQL and Prisma checkpointing.",
    challenge: "Long-running multi-turn agent dialogues caused rapid PostgreSQL storage bloat, while LLM schema hallucinations broke downstream reporting engines.",
    craft: "Engineered single-flight request coalescing to absorb read spikes, automated checkpointer pruning to reclaim 80%+ storage, and Zod-based auto-repair loops for 99%+ schema reliability.",
    stack: ["NestJS", "PostgreSQL", "Prisma", "LangChain", "LangGraph", "OpenAI", "Zod", "BullMQ"],
    githubUrl: "https://github.com/contactAbdullahAamir",
    liveUrl: "https://contactabdullahaamir.github.io/My-Portfolio/",
    architectureFlow: [
      { step: "01", label: "Single-Flight Gate", detail: "50 concurrent inspection reads coalesced into 1 DB query", tech: "Memory Coalescer" },
      { step: "02", label: "Agent Execution", detail: "Long-running inspection analysis and schema synthesis", tech: "OpenAI GPT-4o" },
      { step: "03", label: "Zod Guardrail", detail: "Runtime schema validation catches enum/type drift", tech: "Zod Engine" },
      { step: "04", label: "Self-Healing Loop", detail: "Targeted error delta prompt repairs schema on Pass 2", tech: "LangGraph Node" },
      { step: "05", label: "Vacuum Pruning", detail: "Scratchpad checkpoint cleanup eliminates DB storage bloat", tech: "PostgreSQL Vacuum" }
    ],
    tradeoffs: [
      {
        decision: "Targeted Schema Repair vs. Full Chain Retry",
        choice: "Targeted Zod error trace injection",
        alternative: "Re-running the entire multi-turn prompt",
        reason: "Injecting only the validation delta into a repair node resolved 99.4% of anomalies in < 250ms with 70% fewer tokens than a full chain restart."
      },
      {
        decision: "Single-Flight Request Coalescing vs. Redis Cache",
        choice: "In-flight promise coalescing",
        alternative: "Heavy Redis cache invalidation",
        reason: "Simultaneous inspector sync operations requested the exact same room metadata during burst intervals. Merging pending promises quenches 90% of DB reads without cache stale issues."
      }
    ],
    metrics: [
      { label: "Structured Output Success", value: "99%+", detail: "Guaranteed via Zod validation & retry feedback loop" },
      { label: "Storage Bloat Reduction", value: "> 80%", detail: "Automated checkpointer pruning jobs" },
      { label: "Concurrent Burst Reads", value: "-90%", detail: "Single-flight caching during peak inspection sync" },
      { label: "Validation Latency", value: "< 15ms", detail: "Fast-path in-memory schema verification" }
    ],
    simulation: {
      title: "Zod Schema Drift Auto-Repair & Single-Flight Coalescer",
      description: "Watch how a malformed inspection JSON output is caught by Zod, fed back into an auto-correction prompt, and repaired in real time.",
      samplePayload: {
        inspectionId: "insp_roof_deck_42",
        expectedSchema: "{ severity: 'HIGH'|'MEDIUM'|'LOW', items: string[], estimateUSD: number }",
        modelRawResponse: "{ severity: 'CRITICAL', items: 'Minor leakage, loose shingles', estimate: '$4,200' }"
      },
      steps: [
        {
          title: "Single-Flight Coalescing Gate",
          description: "50 simultaneous inspector sync requests for the same room are merged into a single database read flight.",
          input: "50 concurrent GET /inspection/insp_roof_deck_42/metadata",
          output: "1 SQL query dispatched, 49 requests multiplexed onto result promise (-90% load)",
          badge: "Single-Flight Cache"
        },
        {
          title: "LLM Output Schema Validation (Pass 1)",
          description: "LLM outputs invalid enum ('CRITICAL' instead of 'HIGH') and string instead of number for estimateUSD.",
          input: "{ severity: 'CRITICAL', estimate: '$4,200' }",
          output: "ZodError: Invalid enum value 'CRITICAL'; Missing required field 'estimateUSD'",
          badge: "Zod Guardrail"
        },
        {
          title: "Automated Schema Repair Loop (Pass 2)",
          description: "Error trace fed back into prompt context with targeted repair instruction without re-running full conversational chain.",
          input: "SYSTEM REPAIR: Fix Zod errors in prior payload: [enum: 'HIGH'|'MEDIUM'|'LOW', estimateUSD: number]",
          output: "Auto-repaired: { severity: 'HIGH', items: ['Minor leakage', 'loose shingles'], estimateUSD: 4200 }",
          badge: "Self-Healing Loop"
        },
        {
          title: "Pruned Checkpointer Storage",
          description: "State committed to PostgreSQL. Intermediate scratchpad tokens pruned automatically to maintain a lean database footprint.",
          input: "Automated vacuum rule: DELETE WHERE step_type = 'scratchpad' AND age > 1 hour",
          output: "Record saved cleanly. DB bloat eliminated (-82% footprint)",
          badge: "Postgres Checkpointer"
        }
      ]
    }
  },
  {
    id: "traccar-gps",
    index: "03",
    title: "Traccar GPS Tracking Middleware",
    subtitle: "200+ Hz binary telemetry ingestion & batched retention engine",
    headlineMetric: "200+ Hz Binary Stream · 0ms Table Locks",
    summary: "Architected a high-throughput REST and socket orchestration layer around Traccar with hybrid M2M authentication and binary protocol decoders.",
    challenge: "Thousands of vehicle GPS trackers streaming raw GT06/H02 hex frames flooded the database, causing table locks during data retention cleanups.",
    craft: "Engineered binary codecs with CRC16-X25 checksums and BCD packing in Python/Node.js, alongside batched SQL delete jobs processing ~200,000 records daily with zero lock wait.",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Python", "Docker", "GT06/H02 Protocols", "Redis"],
    githubUrl: "https://github.com/contactAbdullahAamir",
    liveUrl: "https://contactabdullahaamir.github.io/My-Portfolio/",
    architectureFlow: [
      { step: "01", label: "TCP Socket Stream", detail: "200+ Hz raw hex packets ingested via non-blocking socket listener", tech: "Python Async Sockets" },
      { step: "02", label: "Binary Codecs", detail: "CRC16-X25 polynomial validation & BCD coordinate unpacking", tech: "Node C++ Addons" },
      { step: "03", label: "M2M Gateway", detail: "Device IMEI validation in Redis in < 0.5ms", tech: "Redis Key Lookup" },
      { step: "04", label: "Timeseries Ingest", detail: "Batched position logs written without exclusive write locks", tech: "Prisma PostgreSQL" },
      { step: "05", label: "Batched Retention", detail: "Iterative 2,000-row SQL deletes maintain 0ms table locks", tech: "Retention Worker" }
    ],
    tradeoffs: [
      {
        decision: "Batched Chunk Deletes vs. Table Partition Dropping",
        choice: "Iterative 2,000-row SQL chunk deletions with sleep intervals",
        alternative: "Drop partitions or truncate tables",
        reason: "Traccar's legacy relational schema does not natively support time-partitioned tables. Chunked SQL deletes pruned 200,000 daily points with 0ms lock contention on active writes."
      },
      {
        decision: "Direct Bitwise Binary Codec vs. String RegEx Parsing",
        choice: "Custom bitwise BCD unpacker",
        alternative: "Hex string regex splitters",
        reason: "Bitwise decoding executes in < 1.2ms per packet, reducing CPU overhead by 78% and allowing 200+ Hz telemetry streams to run on lightweight containers."
      }
    ],
    metrics: [
      { label: "Sustained Ingestion Rate", value: "200+ Hz", detail: "Stress-tested binary packet ingestion without dropping frames" },
      { label: "Daily Records Pruned", value: "~200,000", detail: "Cleaned continuously via batched SQL deletes" },
      { label: "Storage Reclaimed", value: "30%+", detail: "Optimized partition management and vacuuming" },
      { label: "Table Lock Overhead", value: "0ms", detail: "Zero blocking on active GPS telemetry writes" }
    ],
    simulation: {
      title: "Binary Hex Frame Unpacker & Batched Lock-Free Pruning",
      description: "Decode a raw IoT telemetry packet with CRC16-X25 verification and observe batched SQL retention operating without database locking.",
      samplePayload: {
        rawHex: "78 78 1F 12 18 0A 12 11 15 28 C9 02 7A C7 0B 41 12 34 00 14 00 01 02 8F 0D 0A",
        protocol: "GT06",
        simulatedFrequency: "215 packets/sec"
      },
      steps: [
        {
          title: "Raw Socket Hex Packet Ingestion",
          description: "TCP socket listener receives raw binary frame with start bit 0x7878 and length 0x1F.",
          input: "Raw Socket Buffer: 0x78781F12180A12111528C9027AC7...",
          output: "Frame detected: Protocol 0x12 (Location Data), Length 31 bytes",
          badge: "TCP Socket Listener"
        },
        {
          title: "CRC16-X25 Checksum & BCD Coordinate Extraction",
          description: "Calculates polynomial checksum and unpacks Binary Coded Decimal latitude/longitude bytes into float degrees.",
          input: "Hex BCD slice: [02 7A C7 0B] (Lat) & [04 11 23 40] (Lon)",
          output: "Checksum VALID (0x028F). Decoded: Lat 31.5204° N, Lon 74.3587° E, Speed: 42 km/h",
          badge: "CRC16 + BCD Codec"
        },
        {
          title: "Hybrid M2M Auth & Stream Ingestion",
          description: "Authenticates IoT device IMEI via cached Redis API key token before dispatching to PostgreSQL time-series table.",
          input: "Device IMEI: 864201048291034 -> Redis M2M Token Lookup",
          output: "Auth Authorized (0.4ms) -> Pushed to Traccar Telemetry Queue",
          badge: "Redis M2M Gateway"
        },
        {
          title: "Batched SQL Retention Runner",
          description: "Batch deletes 2,000 records per transaction with sleep intervals, pruning ~200,000 daily telemetry points without locking tables.",
          input: "DELETE FROM positions WHERE timestamp < NOW() - INTERVAL '30 days' LIMIT 2000;",
          output: "Reclaimed 142 MB. Active write queries running unaffected (0ms table lock)",
          badge: "Zero-Lock Retention"
        }
      ]
    }
  },
  {
    id: "adblocker-pro",
    index: "04",
    title: "AdBlocker Pro Backend API",
    subtitle: "uBlock-style rule compilation AST & distributed telemetry",
    headlineMetric: "uBlock-Style AST · Redis Edge Sync",
    summary: "Designed a backend filter-processing module inspired by uBlock-style rule distribution to compile, optimize, and distribute network filter rules to distributed browser clients.",
    challenge: "Distributing millions of regex filter rules across millions of browser extension clients created immense bandwidth overhead and slow compilation cycles.",
    craft: "Built an AST-based filter compiler that deduplicates redundant rules, merges subdomains into wildcard trees, and syncs compressed rule diffs to edge Redis caches.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "AST Compilers", "Docker"],
    githubUrl: "https://github.com/contactAbdullahAamir",
    liveUrl: "https://contactabdullahaamir.github.io/My-Portfolio/",
    architectureFlow: [
      { step: "01", label: "Rule Ingestion", detail: "Ingestion of 48,000+ raw Easylist and custom vendor rules", tech: "Worker ETL" },
      { step: "02", label: "AST Tokenizer", detail: "Lexical parse separating network filters, modifiers & cosmetic tags", tech: "Compiler AST" },
      { step: "03", label: "Trie Compaction", detail: "Overlapping subdomains merged into lean wildcard Trie (-45% size)", tech: "Wildcard Trie" },
      { step: "04", label: "Edge Sync", detail: "Gzip binary packages broadcast to regional Redis clusters", tech: "Redis Pub/Sub" },
      { step: "05", label: "Client Execution", detail: "Extension clients parse compiled bytecode in < 8ms", tech: "Client Engine" }
    ],
    tradeoffs: [
      {
        decision: "Server-side Pre-compiled Trie vs. Client-side Regex Compilation",
        choice: "Server-side AST Trie compiler",
        alternative: "Distributing raw regex text files to clients",
        reason: "Compiling on the backend reduced extension memory footprint by 45% and reduced web page load blocking times from 60ms to 8ms."
      }
    ],
    metrics: [
      { label: "Rule AST Deduplication", value: "-45%", detail: "Bundle size reduction via rule graph compaction" },
      { label: "Edge Cache Sync Latency", value: "< 50ms", detail: "Redis distributed pub/sub bundle distribution" },
      { label: "Telemetry Throughput", value: "High Volume", detail: "Buffered asynchronous logging backed by Redis & PostgreSQL" },
      { label: "Client Filter Parsing Time", value: "< 8ms", detail: "Pre-compiled bytecode executed by extension clients" }
    ],
    simulation: {
      title: "Filter Rule AST Optimizer & Differential Distribution",
      description: "Witness how redundant cosmetic and network ad-blocking rules are parsed into an Abstract Syntax Tree, optimized, and pushed to edge caches.",
      samplePayload: {
        rawRulesCount: 48500,
        sampleRules: [
          "||doubleclick.net^$third-party",
          "||adservice.google.com^$domain=example.com",
          "###ad-banner-top",
          "###ad-banner-top-wrapper"
        ]
      },
      steps: [
        {
          title: "Rule Tokenization & Lexical Parse",
          description: "Parses Adblock Plus / uBlock format rules into syntax tokens (hosts, filters, modifiers, cosmetic selectors).",
          input: "48,500 raw rules from Easylist & custom vendor feeds",
          output: "AST tree constructed with 48,500 nodes categorized into Network & Cosmetic rules",
          badge: "AST Parser"
        },
        {
          title: "Deduplication & Wildcard Tree Compaction",
          description: "Consolidates overlapping subdomain rules into single wildcard Trie nodes and drops redundant CSS cosmetic selectors.",
          input: "Overlapping rules detected: 8,420 redundant rules",
          output: "Compiled into lean Trie structure. Bundle size reduced from 4.2 MB to 2.3 MB (-45%)",
          badge: "Trie Optimizer"
        },
        {
          title: "Redis Edge Bundle Sync",
          description: "Serialized binary rule package synced to regional Redis instances with gzip compression and version hashes.",
          input: "Sync packet bundle_v4.18.9 (gzip hash: e4b29c)",
          output: "Propagated to edge caches in 38ms. Ready for differential client update",
          badge: "Redis Edge Sync"
        },
        {
          title: "Batched Extension Telemetry Pipeline",
          description: "Client performance metrics and blocked domain telemetry ingested via asynchronous Redis streams and persisted to PostgreSQL.",
          input: "POST /v1/telemetry/stats (1,000 extension heartbeats)",
          output: "Buffered in Redis, batched into PostgreSQL every 5 seconds without DB contention",
          badge: "Telemetry Engine"
        }
      ]
    }
  }
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "classroom",
    period: "2022 – 2023",
    chapterNumber: "01",
    title: "The Classroom",
    role: "Teaching Assistant (Computer Science)",
    organization: "University of Engineering and Technology (UET), Lahore",
    quote: "If you cannot explain a pointer or a recursive graph on a blank sheet of paper, you don't understand the system yet.",
    paragraphs: [
      "My engineering journey didn't start in an ivory tower of distributed architectures. It started beside first-year students at UET Lahore, leaning over laptops and dry-erase boards to debug segmentation faults, pointers, and recursive data structures.",
      "Teaching taught me that code isn't just instructions for silicon—it's a medium of human communication. When a student's program crashed, the bug wasn't the enemy; the ambiguity in their mental model was. That fundamental discipline—reducing confusion to first principles—became the cornerstone of how I approach system design today."
    ],
    takeaways: [
      "Break complex systems into digestible mental models",
      "Patience and empathy are engineering superpowers",
      "Clarity of thought precedes clarity of code"
    ]
  },
  {
    id: "discovery",
    period: "2024 – Jul 2026",
    chapterNumber: "02",
    title: "The Discovery Room",
    role: "Requirements Engineer → Associate Technical PM",
    organization: "Softaims",
    quote: "Software projects rarely fail from bad syntax. They fail because the engineering team built a flawless solution to the wrong human problem.",
    paragraphs: [
      "Before taking on technical leadership, I spent nearly two years in the discovery room at Softaims. I worked directly with business stakeholders, founders, and non-technical clients, translating messy, ambiguous requirements into concrete specifications and delivery roadmaps.",
      "I sat on both sides of the table. I saw how easily a missing edge case in requirements turns into 200 hours of painful refactoring. I learned to ask the second- and third-order questions before writing a single API endpoint: What happens when the network drops mid-stream? What is the real cost of this token budget at 50,000 monthly active users? How does this data model evolve in two years?"
    ],
    takeaways: [
      "Bridged business intent with technical feasibility",
      "Designed API contracts and specifications that prevented costly architectural rewrites",
      "Earned certifications across Jira, Jira Service Management, Confluence, and Agile"
    ]
  },
  {
    id: "lead",
    period: "Aug 2026 – Present",
    chapterNumber: "03",
    title: "The Tech Lead Seat",
    role: "Software Engineer | Technical Lead",
    organization: "Softaims",
    quote: "Deterministic AI and high-throughput backends require the same virtue: zero tolerance for unhandled ambiguity.",
    paragraphs: [
      "Today, as Technical Lead at Softaims, that journey comes together. I lead backend and AI engineering across NestJS, TypeScript, PostgreSQL, Redis, and LangGraph architectures. I don't build fragile AI wrapper demos that break on punctuation anomalies; I engineer deterministic state machines, Zod auto-repair loops, and event-driven BullMQ workers that hold up in production.",
      "My leadership is hands-on. I design database schemas and API contracts, architect mobile applications in React Native, review pull requests with high standards, and guide engineers to think about failure modes, token economics, and operational telemetry from day one."
    ],
    takeaways: [
      "Architected production AI agent workflows with LangGraph and Zod retry loops",
      "Designed event-driven backend systems with sub-2s audio turnaround and 200+ Hz IoT ingestion",
      "Mentored cross-functional teams bridging backend, mobile, and machine learning"
    ]
  }
];

export const FULL_CREDENTIALS = {
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering and Technology (UET), Lahore",
    period: "November 2021 – June 2025",
    focus: "Data Structures, Algorithms, Database Systems, Object-Oriented Software Engineering, Distributed Architectures, Backend Systems"
  },
  certifications: [
    { title: "Jira Service Management Certified", issuer: "Atlassian", badge: "Service Architecture" },
    { title: "Get the Most Out of Jira", issuer: "Atlassian", badge: "Agile Workflow" },
    { title: "Beginner's Guide to Agile in Jira Badge", issuer: "Atlassian", badge: "Delivery" },
    { title: "Get the Most Out of Confluence", issuer: "Atlassian", badge: "Knowledge Systems" },
    { title: "Get the Most Out of Trello", issuer: "Atlassian", badge: "Task Management" }
  ],
  skillsCategorized: {
    "AI & LLM Systems": [
      "LLM Orchestration", "LangGraph", "LangChain", "Autonomous AI Agents",
      "Tool Calling", "Structured Outputs (Zod)", "OpenAI Whisper", "Prompt Workflows",
      "Model Routing", "LangSmith Evaluations", "Token Economics & Context Windows"
    ],
    "Backend & Distributed Systems": [
      "NestJS", "Node.js", "TypeScript", "REST APIs", "Prisma ORM",
      "BullMQ Async Workers", "Event-Driven Architecture", "Redis Pub/Sub & Caching",
      "GT06 / H02 IoT Binary Protocols", "Python Sockets", "Single-Flight Request Coalescing"
    ],
    "Frontend & Mobile": [
      "React", "Next.js", "React Native", "Expo", "Flutter",
      "TypeScript", "Tailwind CSS", "Framer Motion", "Clean Component Architecture"
    ],
    "Data & Infrastructure": [
      "PostgreSQL", "Redis", "MongoDB", "SQL Optimization", "Batched Retention Jobs",
      "Docker", "Linux / Bash", "AWS S3", "Git / GitHub Actions", "Prisma Migrations"
    ],
    "Architecture, Product & Delivery": [
      "System Design", "API Contract Design", "Database Schema Architecture",
      "Technical Scoping", "Requirements Engineering", "Client Stakeholder Alignment",
      "Agile & Scrum Delivery", "Team Mentorship & Code Reviews"
    ]
  },
  careerHistory: [
    {
      role: "Software Engineer | Technical Lead",
      company: "Softaims",
      period: "Aug 2026 – Present",
      location: "Lahore, Pakistan",
      bullets: [
        "Design and develop backend services and REST APIs with NestJS, Node.js, and TypeScript for AI-powered and cross-platform applications.",
        "Build production-oriented LLM applications and agent workflows covering orchestration, tool calling, structured outputs, state management, and model integrations.",
        "Design database schemas, API contracts, service integrations, and scalable application architectures across backend and mobile initiatives.",
        "Lead technical implementation and architecture decisions, contribute to code quality and debugging, and translate complex requirements into practical engineering plans.",
        "Develop cross-platform features with React Native and collaborate with developers, product stakeholders, and clients from technical discovery through deployment."
      ]
    },
    {
      role: "Associate Technical Project Manager",
      company: "Softaims",
      period: "Mar 2025 – Jul 2026",
      location: "Lahore, Pakistan",
      bullets: [
        "Bridged clients, business stakeholders, and engineering teams by translating business goals into clear technical requirements, delivery plans, and actionable work.",
        "Coordinated project planning, execution, and delivery while maintaining alignment between client objectives, technical feasibility, and engineering priorities.",
        "Worked closely with developers on scope clarification, feature breakdown, technical discovery, and delivery tracking across multiple software initiatives."
      ]
    },
    {
      role: "Requirements Engineer",
      company: "Softaims",
      period: "Dec 2024 – Feb 2025",
      location: "Lahore, Pakistan",
      bullets: [
        "Gathered, analyzed, and documented software requirements for multidisciplinary engineering tracks.",
        "Authored technical specifications covering domain logic, API integrations, workflows, and implementation expectations to improve alignment between product and engineering teams."
      ]
    },
    {
      role: "Full Stack Mobile App Developer Intern",
      company: "Havenir Solutions",
      period: "Aug 2024 – Sep 2024",
      location: "Lahore, Pakistan",
      bullets: [
        "Developed and maintained cross-platform mobile applications with Flutter and built backend services with NestJS.",
        "Implemented MongoDB data storage and clean-architecture practices while collaborating with cross-functional teams on feature delivery.",
        "Participated in code reviews and contributed to maintainability and development-quality improvements."
      ]
    },
    {
      role: "Teaching Assistant (Computer Science)",
      company: "University of Engineering and Technology (UET), Lahore",
      period: "Dec 2022 – Mar 2023",
      location: "Lahore, Pakistan",
      bullets: [
        "Mentored undergraduate students in programming concepts, debugging, and algorithmic problem-solving, building strong technical communication habits."
      ]
    }
  ]
};
