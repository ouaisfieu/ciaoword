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
  showConsole: boolean;
  showAssistant: boolean;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  files: Record<string, string>;
  preview?: string;
}

export interface ConsoleMessage {
  id: string;
  type: 'log' | 'error' | 'warn' | 'info' | 'success';
  message: string;
  timestamp: Date;
}

export interface AssistantMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}
