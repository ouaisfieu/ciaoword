import { Panel, Group, Separator } from 'react-resizable-panels';
import { useApp } from './lib/AppContext';
import { CodeEditor } from './components/CodeEditor';
import { LivePreview } from './components/LivePreview';
import { Console } from './components/Console';
import { Sidebar } from './components/Sidebar';
import { TutorialModal } from './components/TutorialModal';
import { VirtualAssistant } from './components/VirtualAssistant';
import { Menu, Code, Eye, Terminal } from 'lucide-react';

function App() {
  const { theme, layout, setLayout, currentFile } = useApp();

  const toggleSidebar = () => setLayout({ ...layout, showSidebar: !layout.showSidebar });
  const toggleEditor = () => setLayout({ ...layout, showEditor: !layout.showEditor });
  const togglePreview = () => setLayout({ ...layout, showPreview: !layout.showPreview });
  const toggleConsole = () => setLayout({ ...layout, showConsole: !layout.showConsole });

  const visiblePanels = [
    layout.showSidebar,
    layout.showEditor,
    layout.showPreview
  ].filter(Boolean).length;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: theme.colors.background,
        color: theme.colors.text,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <header
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          color: 'white',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 700 }}>C!AoWORD</h1>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={toggleSidebar}
            style={{
              background: layout.showSidebar ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              border: layout.showSidebar ? '2px solid rgba(255, 255, 255, 0.5)' : '2px solid transparent',
              color: 'white',
              padding: '0.4rem 0.9rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontWeight: layout.showSidebar ? 600 : 400,
              transition: 'all 0.2s',
            }}
            title="Menu / Sidebar"
          >
            <Menu size={14} />
            Menu
          </button>
          <button
            onClick={toggleEditor}
            style={{
              background: layout.showEditor ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              border: layout.showEditor ? '2px solid rgba(255, 255, 255, 0.5)' : '2px solid transparent',
              color: 'white',
              padding: '0.4rem 0.9rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontWeight: layout.showEditor ? 600 : 400,
              transition: 'all 0.2s',
            }}
            title="Éditeur de code"
          >
            <Code size={14} />
            Éditeur
          </button>
          <button
            onClick={togglePreview}
            style={{
              background: layout.showPreview ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              border: layout.showPreview ? '2px solid rgba(255, 255, 255, 0.5)' : '2px solid transparent',
              color: 'white',
              padding: '0.4rem 0.9rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontWeight: layout.showPreview ? 600 : 400,
              transition: 'all 0.2s',
            }}
            title="Aperçu en direct"
          >
            <Eye size={14} />
            Aperçu
          </button>
          <button
            onClick={toggleConsole}
            style={{
              background: layout.showConsole ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              border: layout.showConsole ? '2px solid rgba(255, 255, 255, 0.5)' : '2px solid transparent',
              color: 'white',
              padding: '0.4rem 0.9rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              fontWeight: layout.showConsole ? 600 : 400,
              transition: 'all 0.2s',
            }}
            title="Console"
          >
            <Terminal size={14} />
            Console
          </button>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {visiblePanels === 0 ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.colors.textSecondary,
              fontSize: '1.1rem',
            }}
          >
            Activez au moins un panneau pour commencer
          </div>
        ) : (
          <Group orientation="horizontal" style={{ width: '100%', height: '100%' }}>
            {layout.showSidebar && (
              <>
                <Panel defaultSize={20} minSize={15} maxSize={35}>
                  <Sidebar />
                </Panel>
                <Separator
                  style={{
                    width: '4px',
                    background: theme.colors.border,
                    cursor: 'col-resize',
                  }}
                />
              </>
            )}

            {layout.showEditor && (
              <>
                <Panel defaultSize={40} minSize={25}>
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        padding: '0.75rem 1rem',
                        background: theme.colors.surface,
                        borderBottom: `1px solid ${theme.colors.border}`,
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <Code size={16} color={theme.colors.primary} />
                      <span>Éditeur</span>
                      {currentFile && (
                        <span
                          style={{
                            marginLeft: 'auto',
                            fontSize: '0.75rem',
                            color: theme.colors.textSecondary,
                            fontWeight: 400,
                          }}
                        >
                          {currentFile}
                        </span>
                      )}
                    </div>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      <CodeEditor />
                    </div>
                  </div>
                </Panel>
                {layout.showPreview && (
                  <Separator
                    style={{
                      width: '4px',
                      background: theme.colors.border,
                      cursor: 'col-resize',
                    }}
                  />
                )}
              </>
            )}

            {layout.showPreview && (
              <Panel defaultSize={40} minSize={25}>
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
            )}

            {!layout.showPreview && layout.showConsole && layout.showEditor && (
              <>
                <Separator
                  style={{
                    width: '4px',
                    background: theme.colors.border,
                    cursor: 'col-resize',
                  }}
                />
                <Panel defaultSize={30} minSize={20} maxSize={40}>
                  <Console />
                </Panel>
              </>
            )}

            {!layout.showPreview && layout.showConsole && !layout.showEditor && (
              <Panel defaultSize={60} minSize={30}>
                <Console />
              </Panel>
            )}
          </Group>
        )}
      </div>

      <TutorialModal />
      <VirtualAssistant />
    </div>
  );
}

export default App;
