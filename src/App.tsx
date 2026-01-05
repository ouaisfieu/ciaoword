import { Panel, Group, Separator } from 'react-resizable-panels';
import { useApp } from './lib/AppContext';
import { CodeEditor } from './components/CodeEditor';
import { LivePreview } from './components/LivePreview';
import { Console } from './components/Console';
import { Sidebar } from './components/Sidebar';
import { TutorialModal } from './components/TutorialModal';
import { VirtualAssistant } from './components/VirtualAssistant';
import { Menu, EyeOff, Terminal, X, Code } from 'lucide-react';

function App() {
  const { theme, layout, setLayout, currentFile } = useApp();

  const toggleSidebar = () => {
    setLayout({ ...layout, showSidebar: !layout.showSidebar });
  };

  const toggleConsole = () => {
    setLayout({ ...layout, showConsole: !layout.showConsole });
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: theme.colors.background,
        color: theme.colors.text,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <header
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          color: 'white',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>C!AoWORD</h1>
          <span
            style={{
              fontSize: '0.875rem',
              opacity: 0.9,
              fontWeight: 300,
            }}
          >
            Créateur de Sites Statiques
          </span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={toggleSidebar}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
            title={layout.showSidebar ? 'Masquer la sidebar' : 'Afficher la sidebar'}
          >
            {layout.showSidebar ? <EyeOff size={16} /> : <Menu size={16} />}
            Menu
          </button>
          <button
            onClick={toggleConsole}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
            title={layout.showConsole ? 'Masquer la console' : 'Afficher la console'}
          >
            {layout.showConsole ? <X size={16} /> : <Terminal size={16} />}
            Console
          </button>
        </div>
      </header>

      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <Group orientation="horizontal" style={{ height: '100%' }}>
          {layout.showSidebar && (
            <>
              <Panel defaultSize={20} minSize={15} maxSize={30} style={{ position: 'relative', zIndex: 1 }}>
                <Sidebar />
              </Panel>
              <Separator
                style={{
                  width: '4px',
                  background: theme.colors.border,
                  cursor: 'col-resize',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
            </>
          )}

          <Panel defaultSize={layout.showSidebar ? 40 : 50} minSize={25} style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div
                style={{
                  padding: '0.75rem 1rem',
                  background: theme.colors.surface,
                  borderBottom: `1px solid ${theme.colors.border}`,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  letterSpacing: '0.3px',
                  flexShrink: 0,
                }}
              >
                <Code size={16} color={theme.colors.primary} />
                <span>Éditeur</span>
                {currentFile && (
                  <span style={{
                    marginLeft: 'auto',
                    fontSize: '0.75rem',
                    color: theme.colors.textSecondary,
                    fontWeight: 400,
                  }}>
                    {currentFile}
                  </span>
                )}
              </div>
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <CodeEditor />
              </div>
            </div>
          </Panel>

          <Separator
            style={{
              width: '4px',
              background: theme.colors.border,
              cursor: 'col-resize',
              position: 'relative',
              zIndex: 2,
            }}
          />

          <Panel defaultSize={layout.showSidebar ? 40 : 50} minSize={25} style={{ position: 'relative', zIndex: 1 }}>
            {layout.showConsole ? (
              <Group orientation="vertical">
                <Panel defaultSize={70} minSize={40}>
                  <LivePreview />
                </Panel>
                <Separator
                  style={{
                    height: '4px',
                    background: theme.colors.border,
                    cursor: 'row-resize',
                  }}
                />
                <Panel defaultSize={30} minSize={15} maxSize={50}>
                  <Console />
                </Panel>
              </Group>
            ) : (
              <LivePreview />
            )}
          </Panel>
        </Group>
      </div>

      <TutorialModal />
      <VirtualAssistant />
    </div>
  );
}

export default App;
