export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectSimulationStep {
  title: string;
  description: string;
  input: string;
  output: string;
  badge: string;
}

export interface ArchitectureStep {
  step: string;
  label: string;
  detail: string;
  tech: string;
}

export interface ProjectTradeoff {
  decision: string;
  choice: string;
  alternative: string;
  reason: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  index: string;
  headlineMetric: string;
  summary: string;
  challenge: string;
  craft: string;
  stack: string[];
  metrics: ProjectMetric[];
  architectureFlow?: ArchitectureStep[];
  tradeoffs?: ProjectTradeoff[];
  githubUrl?: string;
  liveUrl?: string;
  simulation: {
    title: string;
    description: string;
    steps: ProjectSimulationStep[];
    samplePayload: Record<string, any>;
  };
}

export interface Perspective {
  id: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  techTags: string[];
  badge: string;
}

export interface StoryChapter {
  id: string;
  period: string;
  chapterNumber: string;
  title: string;
  role: string;
  organization: string;
  quote: string;
  paragraphs: string[];
  takeaways: string[];
}
