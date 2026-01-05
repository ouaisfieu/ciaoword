import { useState } from 'react';
import { useApp } from '../lib/AppContext';
import {
  FileText,
  FolderOpen,
  BookOpen,
  Palette,
  Download,
  HelpCircle,
} from 'lucide-react';
import { templates } from '../data/templates';
import { availableThemes } from '../data/themes';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export function Sidebar() {
  const {
    currentProject,
    setCurrentProject,
    currentFile,
    setCurrentFile,
    theme,
    setTheme,
    addConsoleMessage,
    setShowTutorial,
    setTutorialStep,
  } = useApp();
  const [activeTab, setActiveTab] = useState<'files' | 'templates' | 'settings'>('files');

  const handleFileClick = (fileId: string) => {
    setCurrentFile(fileId);
  };

  const handleTemplateSelect = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (!template) return;

    const newFiles = Object.entries(template.files).map(([name, content]) => ({
      id: name,
      name,
      type: 'file' as const,
      language: name.endsWith('.html')
        ? 'html'
        : name.endsWith('.css')
        ? 'css'
        : name.endsWith('.js')
        ? 'javascript'
        : 'plaintext',
      content,
    }));

    setCurrentProject({
      id: `project-${Date.now()}`,
      name: template.name,
      description: template.description,
      files: newFiles,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    setCurrentFile(newFiles[0]?.id || null);
    addConsoleMessage({
      type: 'success',
      message: `Template "${template.name}" chargé`,
    });
  };

  const handleExport = async () => {
    if (!currentProject) return;

    const zip = new JSZip();

    currentProject.files.forEach((file) => {
      if (file.content) {
        zip.file(file.name, file.content);
      }
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, `${currentProject.name.replace(/\s+/g, '-').toLowerCase()}.zip`);

    addConsoleMessage({
      type: 'success',
      message: 'Projet exporté avec succès',
    });
  };

  const handleStartTutorial = () => {
    setShowTutorial(true);
    setTutorialStep(0);
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.colors.surface,
        borderRight: `1px solid ${theme.colors.border}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          borderBottom: `1px solid ${theme.colors.border}`,
          background: theme.colors.background,
        }}
      >
        {[
          { id: 'files', icon: FolderOpen, label: 'Fichiers' },
          { id: 'templates', icon: BookOpen, label: 'Templates' },
          { id: 'settings', icon: Palette, label: 'Paramètres' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              flex: 1,
              padding: '0.75rem',
              background: activeTab === tab.id ? theme.colors.surface : 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? `2px solid ${theme.colors.primary}` : 'none',
              cursor: 'pointer',
              color: activeTab === tab.id ? theme.colors.primary : theme.colors.textSecondary,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.75rem',
            }}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
        {activeTab === 'files' && (
          <div>
            <h3 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '1rem' }}>
              {currentProject?.name || 'Projet'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {currentProject?.files.map((file) => (
                <button
                  key={file.id}
                  onClick={() => handleFileClick(file.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem',
                    background: currentFile === file.id ? theme.colors.primary : 'transparent',
                    color: currentFile === file.id ? 'white' : theme.colors.text,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                  }}
                >
                  <FileText size={14} />
                  {file.name}
                </button>
              ))}
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                onClick={handleExport}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem',
                  background: theme.colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                <Download size={14} />
                Exporter le projet
              </button>
              <button
                onClick={handleStartTutorial}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem',
                  background: theme.colors.secondary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                <HelpCircle size={14} />
                Démarrer le tutoriel
              </button>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div>
            <h3 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '1rem' }}>
              Bibliothèque de Templates
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {templates.map((template) => (
                <div
                  key={template.id}
                  style={{
                    padding: '1rem',
                    background: theme.colors.background,
                    borderRadius: '8px',
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <h4 style={{ color: theme.colors.text, fontSize: '0.875rem', margin: 0 }}>
                      {template.name}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.625rem',
                        padding: '0.125rem 0.5rem',
                        borderRadius: '12px',
                        background:
                          template.difficulty === 'beginner'
                            ? '#10b981'
                            : template.difficulty === 'intermediate'
                            ? '#f59e0b'
                            : '#ef4444',
                        color: 'white',
                      }}
                    >
                      {template.difficulty === 'beginner'
                        ? 'Débutant'
                        : template.difficulty === 'intermediate'
                        ? 'Intermédiaire'
                        : 'Avancé'}
                    </span>
                  </div>
                  <p
                    style={{
                      color: theme.colors.textSecondary,
                      fontSize: '0.75rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {template.description}
                  </p>
                  <button
                    onClick={() => handleTemplateSelect(template.id)}
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      background: theme.colors.primary,
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                    }}
                  >
                    Charger ce template
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h3 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '1rem' }}>
              Personnalisation
            </h3>
            <div>
              <h4 style={{ color: theme.colors.text, fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                Thème
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {availableThemes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t);
                      addConsoleMessage({
                        type: 'success',
                        message: `Thème "${t.name}" activé`,
                      });
                    }}
                    style={{
                      padding: '0.75rem',
                      background: theme.id === t.id ? theme.colors.primary : theme.colors.background,
                      color: theme.id === t.id ? 'white' : theme.colors.text,
                      border: `1px solid ${theme.colors.border}`,
                      borderRadius: '6px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                    }}
                  >
                    <div style={{ fontWeight: 500 }}>{t.name}</div>
                    <div style={{ display: 'flex', gap: '0.25rem', marginTop: '0.5rem' }}>
                      {Object.values(t.colors)
                        .slice(0, 4)
                        .map((color, i) => (
                          <div
                            key={i}
                            style={{
                              width: '20px',
                              height: '20px',
                              background: color,
                              borderRadius: '4px',
                            }}
                          />
                        ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
