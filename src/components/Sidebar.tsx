import { useState } from 'react';
import { useApp } from '../lib/AppContext';
import { useI18n, languageNames, type Language } from '../lib/i18n';
import {
  FileText,
  FolderOpen,
  BookOpen,
  Palette,
  Download,
  HelpCircle,
  Target,
  Network,
  Code,
  Zap,
  Globe,
} from 'lucide-react';
import { templates } from '../data/templates';
import { availableThemes } from '../data/themes';
import { MissionPanel } from './MissionPanel';
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
    userProgress,
    setActiveView,
  } = useApp();
  const { language, setLanguage, t } = useI18n();
  const [activeTab, setActiveTab] = useState<'files' | 'missions' | 'templates' | 'settings'>('files');

  const handleFileClick = (fileId: string) => {
    setCurrentFile(fileId);
    setActiveView('editor');
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
    setActiveView('editor');
    addConsoleMessage({
      type: 'success',
      message: `Template "${template.name}" ${t('common.exampleLoaded').toLowerCase()}`,
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
      message: language === 'fr' ? 'Projet exporte avec succes.' :
               language === 'en' ? 'Project exported successfully.' :
               language === 'nl' ? 'Project succesvol geexporteerd.' :
               'Projekt erfolgreich exportiert.',
    });
  };

  const handleStartTutorial = () => {
    setShowTutorial(true);
    setTutorialStep(0);
  };

  const phaseLabels: Record<Language, Record<string, string>> = {
    fr: {
      awakening: 'Eveil',
      observation: 'Observation',
      deconstruction: 'Deconstruction',
      creation: 'Creation',
      influence: 'Influence',
      network: 'Reseau',
      campaign: 'Campagne',
    },
    en: {
      awakening: 'Awakening',
      observation: 'Observation',
      deconstruction: 'Deconstruction',
      creation: 'Creation',
      influence: 'Influence',
      network: 'Network',
      campaign: 'Campaign',
    },
    nl: {
      awakening: 'Ontwaken',
      observation: 'Observatie',
      deconstruction: 'Deconstructie',
      creation: 'Creatie',
      influence: 'Invloed',
      network: 'Netwerk',
      campaign: 'Campagne',
    },
    de: {
      awakening: 'Erwachen',
      observation: 'Beobachtung',
      deconstruction: 'Dekonstruktion',
      creation: 'Kreation',
      influence: 'Einfluss',
      network: 'Netzwerk',
      campaign: 'Kampagne',
    },
  };

  const getPhaseLabel = () => {
    return phaseLabels[language][userProgress.currentPhase] || phaseLabels.fr[userProgress.currentPhase];
  };

  const difficultyLabels: Record<Language, Record<string, string>> = {
    fr: { beginner: 'Debut', intermediate: 'Inter', advanced: 'Avance', subversive: 'Subversif' },
    en: { beginner: 'Beginner', intermediate: 'Inter', advanced: 'Advanced', subversive: 'Subversive' },
    nl: { beginner: 'Begin', intermediate: 'Midden', advanced: 'Gevord', subversive: 'Subversief' },
    de: { beginner: 'Anfang', intermediate: 'Mittel', advanced: 'Fortg', subversive: 'Subversiv' },
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.colors.surface,
        borderRight: `1px solid ${theme.colors.border}`,
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          padding: '1rem',
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Zap size={18} />
          <span style={{ fontWeight: 600 }}>C!AoWORD</span>
        </div>
        <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>
          Phase: {getPhaseLabel()} | {userProgress.completedMissions.length} missions
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          borderBottom: `1px solid ${theme.colors.border}`,
          background: theme.colors.background,
        }}
      >
        {[
          { id: 'files', icon: Code, label: 'Code' },
          { id: 'missions', icon: Target, label: t('sidebar.missions') },
          { id: 'templates', icon: BookOpen, label: 'Kits' },
          { id: 'settings', icon: Palette, label: 'Style' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'files' | 'missions' | 'templates' | 'settings')}
            style={{
              flex: 1,
              padding: '0.6rem 0.25rem',
              background: activeTab === tab.id ? theme.colors.surface : 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? `2px solid ${theme.colors.primary}` : '2px solid transparent',
              cursor: 'pointer',
              color: activeTab === tab.id ? theme.colors.primary : theme.colors.textSecondary,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem',
              fontSize: '0.65rem',
              transition: 'all 0.2s',
            }}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {activeTab === 'files' && (
          <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ color: theme.colors.text, fontSize: '0.875rem', margin: 0 }}>
                {currentProject?.name || 'Projet'}
              </h3>
              <FolderOpen size={14} color={theme.colors.textSecondary} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {currentProject?.files.map((file) => (
                <button
                  key={file.id}
                  onClick={() => handleFileClick(file.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    background: currentFile === file.id ? theme.colors.primary : 'transparent',
                    color: currentFile === file.id ? 'white' : theme.colors.text,
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    transition: 'all 0.15s',
                  }}
                >
                  <FileText size={14} />
                  {file.name}
                </button>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                onClick={handleExport}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem',
                  background: theme.colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}
              >
                <Download size={14} />
                {t('sidebar.export')} (ZIP)
              </button>
              <button
                onClick={handleStartTutorial}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem',
                  background: 'transparent',
                  color: theme.colors.secondary,
                  border: `1px solid ${theme.colors.secondary}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                }}
              >
                <HelpCircle size={14} />
                {t('sidebar.guide')}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'missions' && <MissionPanel />}

        {activeTab === 'templates' && (
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '1rem' }}>
              {language === 'fr' ? 'Kits de demarrage' :
               language === 'en' ? 'Starter kits' :
               language === 'nl' ? 'Startkits' :
               'Starterkits'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {templates.map((template) => (
                <div
                  key={template.id}
                  style={{
                    padding: '0.75rem',
                    background: theme.colors.background,
                    borderRadius: '8px',
                    border: `1px solid ${theme.colors.border}`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h4 style={{ color: theme.colors.text, fontSize: '0.8rem', margin: 0 }}>
                      {template.name}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.6rem',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '10px',
                        background:
                          template.difficulty === 'beginner'
                            ? '#10b981'
                            : template.difficulty === 'intermediate'
                            ? '#f59e0b'
                            : template.difficulty === 'advanced'
                            ? '#ef4444'
                            : '#8b5cf6',
                        color: 'white',
                      }}
                    >
                      {difficultyLabels[language][template.difficulty] || difficultyLabels.fr[template.difficulty]}
                    </span>
                  </div>
                  <p style={{ color: theme.colors.textSecondary, fontSize: '0.7rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                    {template.description}
                  </p>
                  <button
                    onClick={() => handleTemplateSelect(template.id)}
                    style={{
                      width: '100%',
                      padding: '0.4rem',
                      background: theme.colors.primary,
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.7rem',
                    }}
                  >
                    {language === 'fr' ? 'Charger' :
                     language === 'en' ? 'Load' :
                     language === 'nl' ? 'Laden' :
                     'Laden'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={14} />
                {language === 'fr' ? 'Langue' :
                 language === 'en' ? 'Language' :
                 language === 'nl' ? 'Taal' :
                 'Sprache'}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      addConsoleMessage({
                        type: 'success',
                        message: lang === 'fr' ? 'Langue changee: Francais' :
                                 lang === 'en' ? 'Language changed: English' :
                                 lang === 'nl' ? 'Taal gewijzigd: Nederlands' :
                                 'Sprache geandert: Deutsch',
                      });
                    }}
                    style={{
                      padding: '0.5rem 0.75rem',
                      background: language === lang ? theme.colors.primary : theme.colors.background,
                      color: language === lang ? 'white' : theme.colors.text,
                      border: language === lang ? 'none' : `1px solid ${theme.colors.border}`,
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: language === lang ? 600 : 400,
                    }}
                  >
                    {languageNames[lang]}
                  </button>
                ))}
              </div>
            </div>

            <h3 style={{ color: theme.colors.text, fontSize: '0.875rem', marginBottom: '1rem' }}>
              {language === 'fr' ? 'Apparence' :
               language === 'en' ? 'Appearance' :
               language === 'nl' ? 'Uiterlijk' :
               'Aussehen'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {availableThemes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t);
                    addConsoleMessage({
                      type: 'success',
                      message: `Theme "${t.name}" ${language === 'fr' ? 'active' :
                               language === 'en' ? 'activated' :
                               language === 'nl' ? 'geactiveerd' :
                               'aktiviert'}`,
                    });
                  }}
                  style={{
                    padding: '0.75rem',
                    background: theme.id === t.id ? `${theme.colors.primary}20` : theme.colors.background,
                    color: theme.colors.text,
                    border: theme.id === t.id ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.border}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ fontWeight: 500, fontSize: '0.8rem', marginBottom: '0.5rem' }}>{t.name}</div>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {Object.values(t.colors).slice(0, 5).map((color, i) => (
                      <div
                        key={i}
                        style={{
                          width: '16px',
                          height: '16px',
                          background: color,
                          borderRadius: '3px',
                          border: '1px solid rgba(0,0,0,0.1)',
                        }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: theme.colors.text, fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                Suite CIAoWORLD
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.7 }}>
                {[
                  { name: 'C!AoSCAN', desc: language === 'fr' ? 'Veille automatisee' :
                                           language === 'en' ? 'Automated monitoring' :
                                           language === 'nl' ? 'Automatische monitoring' :
                                           'Automatische Uberwachung' },
                  { name: 'C!AoNET', desc: language === 'fr' ? 'Gestion de reseaux' :
                                          language === 'en' ? 'Network management' :
                                          language === 'nl' ? 'Netwerkbeheer' :
                                          'Netzwerkverwaltung' },
                  { name: 'C!AoVOX', desc: language === 'fr' ? 'Amplification' :
                                          language === 'en' ? 'Amplification' :
                                          language === 'nl' ? 'Versterking' :
                                          'Verstarkung' },
                  { name: 'C!AoSAFE', desc: language === 'fr' ? 'Securite' :
                                           language === 'en' ? 'Security' :
                                           language === 'nl' ? 'Veiligheid' :
                                           'Sicherheit' },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    style={{
                      padding: '0.5rem',
                      background: theme.colors.background,
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Network size={14} color={theme.colors.secondary} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', color: theme.colors.text }}>{tool.name}</div>
                      <div style={{ fontSize: '0.65rem', color: theme.colors.textSecondary }}>{tool.desc}</div>
                    </div>
                    <span style={{ fontSize: '0.6rem', color: theme.colors.textSecondary }}>
                      {language === 'fr' ? 'Bientot' :
                       language === 'en' ? 'Soon' :
                       language === 'nl' ? 'Binnenkort' :
                       'Bald'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
