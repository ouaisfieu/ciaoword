import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Theme, LayoutConfig, Project, ConsoleMessage } from '../types';
import { defaultTheme } from '../data/themes';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  layout: LayoutConfig;
  setLayout: (layout: LayoutConfig | ((prev: LayoutConfig) => LayoutConfig)) => void;
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
  consoleMessages: ConsoleMessage[];
  addConsoleMessage: (message: Omit<ConsoleMessage, 'id' | 'timestamp'>) => void;
  clearConsole: () => void;
  currentFile: string | null;
  setCurrentFile: (file: string | null) => void;
  showTutorial: boolean;
  setShowTutorial: (show: boolean) => void;
  tutorialStep: number;
  setTutorialStep: (step: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultLayout: LayoutConfig = {
  editorWidth: 50,
  previewWidth: 50,
  sidebarWidth: 250,
  consoleHeight: 200,
  showSidebar: true,
  showConsole: true,
  showAssistant: false,
};

const createDefaultProject = (): Project => ({
  id: 'default',
  name: 'Mon Premier Projet',
  description: 'Créé avec C!AoWORD',
  files: [
    {
      id: 'index.html',
      name: 'index.html',
      type: 'file',
      language: 'html',
      content: `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C!AoWORD</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Bienvenue dans C!AoWORD</h1>
        <p>Votre poste de travail pour créer des sites statiques</p>
        <button onclick="handleClick()">Commencer</button>
    </div>
    <script src="script.js"></script>
</body>
</html>`,
    },
    {
      id: 'style.css',
      name: 'style.css',
      type: 'file',
      language: 'css',
      content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, #98D8C8 0%, #C8B5D8 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    text-align: center;
    max-width: 500px;
}

h1 {
    color: #2D4A42;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

p {
    color: #6B8580;
    font-size: 1.125rem;
    margin-bottom: 2rem;
}

button {
    background: #7CB9A8;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
}

button:hover {
    background: #B39BC8;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(124, 185, 168, 0.3);
}`,
    },
    {
      id: 'script.js',
      name: 'script.js',
      type: 'file',
      language: 'javascript',
      content: `console.log('Bienvenue dans C!AoWORD!');

function handleClick() {
    alert('Bravo! Vous avez cliqué sur le bouton.\\n\\nCommencez à éditer le code pour créer votre site!');
    console.log('Bouton cliqué à', new Date().toLocaleTimeString());
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('✨ Page chargée avec succès');
    console.log('📝 Éditez le code et voyez les changements en temps réel!');
});`,
    },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>('ciaoword-theme', defaultTheme);
  const [layout, setLayout] = useLocalStorage<LayoutConfig>('ciaoword-layout', defaultLayout);
  const [currentProject, setCurrentProject] = useLocalStorage<Project | null>(
    'ciaoword-current-project',
    createDefaultProject()
  );
  const [consoleMessages, setConsoleMessages] = useLocalStorage<ConsoleMessage[]>(
    'ciaoword-console',
    []
  );
  const [currentFile, setCurrentFile] = useLocalStorage<string | null>(
    'ciaoword-current-file',
    'index.html'
  );
  const [showTutorial, setShowTutorial] = useLocalStorage('ciaoword-show-tutorial', true);
  const [tutorialStep, setTutorialStep] = useLocalStorage('ciaoword-tutorial-step', 0);

  const addConsoleMessage = (message: Omit<ConsoleMessage, 'id' | 'timestamp'>) => {
    const newMessage: ConsoleMessage = {
      ...message,
      id: `${Date.now()}-${Math.random()}`,
      timestamp: new Date(),
    };
    setConsoleMessages((prev) => [...prev, newMessage]);
  };

  const clearConsole = () => {
    setConsoleMessages([]);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        layout,
        setLayout,
        currentProject,
        setCurrentProject,
        consoleMessages,
        addConsoleMessage,
        clearConsole,
        currentFile,
        setCurrentFile,
        showTutorial,
        setShowTutorial,
        tutorialStep,
        setTutorialStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
