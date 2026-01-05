export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: string;
  language?: string;
  children?: FileNode[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  files: FileNode[];
  createdAt: string;
  updatedAt: string;
  campaignId?: string;
  tags?: string[];
}

export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
  };
}

export interface LayoutConfig {
  editorWidth: number;
  previewWidth: number;
  sidebarWidth: number;
  consoleHeight: number;
  showSidebar: boolean;
  showEditor: boolean;
  showPreview: boolean;
  showConsole: boolean;
  showAssistant: boolean;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'subversive';
  files: Record<string, string>;
  preview?: string;
  tags?: string[];
}

export interface ConsoleMessage {
  id: string;
  type: 'log' | 'error' | 'warn' | 'info' | 'success' | 'system' | 'revelation';
  message: string;
  timestamp: Date;
}

export interface AssistantMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'oracle';
  content: string;
  timestamp: Date;
}

export type MissionPhase =
  | 'awakening'
  | 'observation'
  | 'deconstruction'
  | 'creation'
  | 'influence'
  | 'network'
  | 'campaign';

export interface Mission {
  id: string;
  phase: MissionPhase;
  title: string;
  subtitle: string;
  description: string;
  objectives: MissionObjective[];
  rewards: MissionReward[];
  unlocks?: string[];
  narrative?: string;
  criticalInsight?: string;
  resources?: Resource[];
  completed: boolean;
  hidden?: boolean;
}

export interface MissionObjective {
  id: string;
  description: string;
  type: 'create' | 'analyze' | 'clone' | 'deploy' | 'influence' | 'connect';
  target?: string;
  completed: boolean;
}

export interface MissionReward {
  type: 'tool' | 'template' | 'insight' | 'connection' | 'power';
  id: string;
  name: string;
  description: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'book' | 'tool' | 'community';
  url?: string;
  description: string;
  critical?: boolean;
}

export interface UserProgress {
  id: string;
  currentPhase: MissionPhase;
  completedMissions: string[];
  unlockedTools: string[];
  insightsGained: string[];
  sitesCreated: number;
  sitesDeployed: number;
  campaignsLaunched: number;
  networkSize: number;
  awakenedAt?: string;
  alias?: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  objective: string;
  sites: CampaignSite[];
  status: 'planning' | 'active' | 'deployed' | 'viral';
  createdAt: string;
  metrics?: CampaignMetrics;
}

export interface CampaignSite {
  id: string;
  projectId: string;
  role: 'hub' | 'satellite' | 'mirror' | 'decoy';
  url?: string;
  deployed: boolean;
}

export interface CampaignMetrics {
  totalViews: number;
  uniqueVisitors: number;
  shares: number;
  conversions: number;
}

export interface ClonedSite {
  id: string;
  sourceUrl: string;
  clonedAt: string;
  analysis?: SiteAnalysis;
  project?: Project;
}

export interface SiteAnalysis {
  technologies: string[];
  structure: string;
  persuasionTechniques: string[];
  targetAudience: string;
  dominantNarrative: string;
  vulnerabilities: string[];
  counterStrategies: string[];
}

export interface TutorialStep {
  id: string;
  title: string;
  description: string;
  content: string;
  code?: Record<string, string>;
  tips: string[];
  constraints?: string[];
  nextSteps?: string[];
  phase?: MissionPhase;
  narrative?: string;
  awakening?: string;
}

export interface CIAoToolLink {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  unlockCondition?: string;
}
