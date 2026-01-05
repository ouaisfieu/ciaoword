import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Theme, LayoutConfig, Project, ConsoleMessage, UserProgress, Campaign } from '../types';
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
  userProgress: UserProgress;
  updateProgress: (progress: UserProgress) => void;
  campaigns: Campaign[];
  setCampaigns: (campaigns: Campaign[]) => void;
  activeView: 'editor' | 'missions' | 'analyzer' | 'campaign';
  setActiveView: (view: 'editor' | 'missions' | 'analyzer' | 'campaign') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultLayout: LayoutConfig = {
  editorWidth: 50,
  previewWidth: 50,
  sidebarWidth: 280,
  consoleHeight: 200,
  showSidebar: true,
  showConsole: true,
  showAssistant: false,
};

const defaultUserProgress: UserProgress = {
  id: `user-${Date.now()}`,
  currentPhase: 'awakening',
  completedMissions: [],
  unlockedTools: ['preview', 'export'],
  insightsGained: [],
  sitesCreated: 0,
  sitesDeployed: 0,
  campaignsLaunched: 0,
  networkSize: 0,
  awakenedAt: new Date().toISOString(),
};

const createDefaultProject = (): Project => ({
  id: 'default',
  name: 'Premier Contact',
  description: 'Votre premiere creation avec C!AoWORD',
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
    <title>Ma Voix</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Ma Voix</h1>
            <p class="subtitle">Parce que j'ai quelque chose a dire</p>
        </header>

        <main>
            <article>
                <h2>Le Message</h2>
                <p>Ce que les autres ne veulent pas que vous entendiez.</p>
                <p>Le web a ete cree pour etre libre. Pour que chacun puisse s'exprimer sans demander la permission.</p>
                <p>Vous etes ici pour reprendre ce pouvoir.</p>
            </article>

            <section class="cta-section">
                <button class="cta" onclick="handleAwakening()">Commencer l'eveil</button>
            </section>
        </main>

        <footer>
            <p>Cree librement, sans permission.</p>
            <p class="signature">C!AoWORD - Poste de travail d'emancipation numerique</p>
        </footer>
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
      content: `/* Systeme de design emancipateur */
:root {
    --c-primary: #7CB9A8;
    --c-secondary: #B39BC8;
    --c-dark: #2D4A42;
    --c-light: #F5FAF8;
    --c-text: #1a1a1a;
    --c-text-secondary: #6B8580;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    background: linear-gradient(135deg, var(--c-primary) 0%, var(--c-secondary) 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.container {
    background: white;
    max-width: 600px;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

header {
    background: var(--c-dark);
    color: white;
    padding: 2.5rem 2rem;
    text-align: center;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
}

.subtitle {
    opacity: 0.85;
    font-size: 1.1rem;
}

main {
    padding: 2rem;
}

article {
    margin-bottom: 2rem;
}

article h2 {
    color: var(--c-dark);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

article p {
    color: var(--c-text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
}

.cta-section {
    text-align: center;
}

.cta {
    background: linear-gradient(135deg, var(--c-primary), var(--c-secondary));
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(124, 185, 168, 0.4);
}

.cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(124, 185, 168, 0.5);
}

.cta:active {
    transform: translateY(-1px);
}

footer {
    background: var(--c-light);
    padding: 1.5rem 2rem;
    text-align: center;
}

footer p {
    color: var(--c-text-secondary);
    font-size: 0.875rem;
}

.signature {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    opacity: 0.7;
}

/* Animation d'entree */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.container {
    animation: fadeInUp 0.8s ease-out;
}`,
    },
    {
      id: 'script.js',
      name: 'script.js',
      type: 'file',
      language: 'javascript',
      content: `// C!AoWORD - Script d'eveil

console.log('%c C!AoWORD ', 'background: #2D4A42; color: white; padding: 4px 8px; border-radius: 4px;');
console.log('Bienvenue. Vous avez fait le premier pas.');

function handleAwakening() {
    const messages = [
        "Vous venez de creer votre premier site.",
        "Aucune plateforme ne vous a donne la permission.",
        "Aucune entreprise ne collecte vos donnees.",
        "Ce code vous appartient.",
        "",
        "Le web a ete cree pour ca.",
        "Pour que chacun puisse s'exprimer librement.",
        "",
        "Continuez. Apprenez. Creez. Resistez."
    ];

    alert(messages.join("\\n"));

    console.log('Eveil initie a', new Date().toLocaleTimeString());
    console.log('Prochaine etape: explorez les missions dans le panneau lateral.');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page chargee avec succes');
    console.log('Editez le code et voyez les changements en temps reel');
    console.log('');
    console.log('Conseil: Cliquez sur "Commencer l\\'eveil" pour comprendre pourquoi vous etes ici.');
});

// Easter egg subtil
let sequence = [];
document.addEventListener('keydown', (e) => {
    sequence.push(e.key);
    sequence = sequence.slice(-5);
    if (sequence.join('') === 'eveil') {
        console.log('%c VOUS ETES EVEILLE ', 'background: #B39BC8; color: white; padding: 8px; font-size: 16px;');
        console.log('Le pouvoir est entre vos mains. Utilisez-le sagement.');
    }
});`,
    },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ['premier-projet', 'eveil'],
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
  const [userProgress, setUserProgress] = useLocalStorage<UserProgress>(
    'ciaoword-progress',
    defaultUserProgress
  );
  const [campaigns, setCampaigns] = useLocalStorage<Campaign[]>('ciaoword-campaigns', []);
  const [activeView, setActiveView] = useLocalStorage<'editor' | 'missions' | 'analyzer' | 'campaign'>(
    'ciaoword-active-view',
    'editor'
  );

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

  const updateProgress = (progress: UserProgress) => {
    setUserProgress(progress);
    if (progress.completedMissions.length > userProgress.completedMissions.length) {
      addConsoleMessage({
        type: 'revelation',
        message: 'Nouvelle mission accomplie. Votre pouvoir grandit.',
      });
    }
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
        userProgress,
        updateProgress,
        campaigns,
        setCampaigns,
        activeView,
        setActiveView,
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
