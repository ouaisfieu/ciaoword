import { useApp } from '../lib/AppContext';
import { useI18n } from '../lib/i18n';
import { tutorialTranslations, tutorialStepIds } from '../data/translations/tutorials';
import { tutorialSteps } from '../data/tutorials';
import { X, ChevronLeft, ChevronRight, BookOpen, AlertCircle, Lightbulb, TrendingUp, Zap } from 'lucide-react';
import { getPhaseInfo } from '../data/missions';
import { parseMarkdown } from '../lib/markdown';

export function TutorialModal() {
  const { showTutorial, setShowTutorial, tutorialStep, setTutorialStep, theme, setCurrentProject, addConsoleMessage } = useApp();
  const { language, t } = useI18n();

  if (!showTutorial) return null;

  const currentStepId = tutorialStepIds[tutorialStep];
  const currentStepData = tutorialSteps[tutorialStep];
  const translatedStep = tutorialTranslations[language]?.[currentStepId] || tutorialTranslations.fr[currentStepId];

  const isFirst = tutorialStep === 0;
  const isLast = tutorialStep === tutorialStepIds.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setShowTutorial(false);
      addConsoleMessage({
        type: 'revelation',
        message: t('common.guideComplete'),
      });
    }
  };

  const handlePrevious = () => {
    if (!isFirst) {
      setTutorialStep(tutorialStep - 1);
    }
  };

  const handleClose = () => {
    setShowTutorial(false);
  };

  const handleLoadCode = () => {
    if (currentStepData?.code) {
      const newFiles = Object.entries(currentStepData.code).map(([name, content]) => ({
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
        id: `tutorial-${Date.now()}`,
        name: `Tutorial: ${translatedStep.title}`,
        description: translatedStep.description,
        files: newFiles,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      addConsoleMessage({
        type: 'success',
        message: `${t('common.exampleLoaded')}: ${translatedStep.title}`,
      });
    }
  };

  const phaseInfo = currentStepData?.phase ? getPhaseInfo(currentStepData.phase) : null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
        backdropFilter: 'blur(4px)',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: theme.colors.surface,
          borderRadius: '16px',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            color: 'white',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <BookOpen size={20} />
              <div>
                <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
                  {translatedStep.title}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>
                    {tutorialStep + 1} / {tutorialStepIds.length}
                  </span>
                  {phaseInfo && (
                    <>
                      <span style={{ opacity: 0.5 }}>|</span>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.1rem 0.5rem',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '10px',
                        }}
                      >
                        {phaseInfo.name}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                padding: '0.4rem',
                borderRadius: '6px',
                display: 'flex',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          <p style={{ color: theme.colors.secondary, fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem' }}>
            {translatedStep.description}
          </p>

          <div
            style={{
              color: theme.colors.text,
              fontSize: '0.9rem',
              lineHeight: '1.7',
            }}
          >
            {parseMarkdown(translatedStep.content)}
          </div>

          {translatedStep.awakening && (
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: `linear-gradient(135deg, ${theme.colors.primary}15, ${theme.colors.secondary}15)`,
                borderLeft: `3px solid ${theme.colors.secondary}`,
                borderRadius: '0 8px 8px 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Zap size={16} color={theme.colors.secondary} />
                <span style={{ color: theme.colors.secondary, fontWeight: 600, fontSize: '0.8rem' }}>
                  {t('common.revelation')}
                </span>
              </div>
              <p style={{ color: theme.colors.text, fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>
                {translatedStep.awakening}
              </p>
            </div>
          )}

          {translatedStep.narrative && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: theme.colors.background,
                borderRadius: '8px',
                fontStyle: 'italic',
                color: theme.colors.textSecondary,
                fontSize: '0.85rem',
                lineHeight: 1.6,
              }}
            >
              "{translatedStep.narrative}"
            </div>
          )}

          {translatedStep.tips && translatedStep.tips.length > 0 && (
            <div
              style={{
                marginTop: '1.25rem',
                padding: '1rem',
                background: theme.colors.background,
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Lightbulb size={16} color={theme.colors.primary} />
                <span style={{ color: theme.colors.text, fontWeight: 600, fontSize: '0.8rem' }}>{t('common.tips')}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: theme.colors.textSecondary }}>
                {translatedStep.tips.map((tip, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem', fontSize: '0.8rem', lineHeight: 1.5 }}>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentStepData?.constraints && currentStepData.constraints.length > 0 && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#fef2f2',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <AlertCircle size={16} color="#ef4444" />
                <span style={{ color: '#991b1b', fontWeight: 600, fontSize: '0.8rem' }}>{t('common.limits')}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#7f1d1d' }}>
                {currentStepData.constraints.map((c, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem', fontSize: '0.8rem', lineHeight: 1.5 }}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentStepData?.nextSteps && currentStepData.nextSteps.length > 0 && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#f0fdf4',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <TrendingUp size={16} color="#10b981" />
                <span style={{ color: '#065f46', fontWeight: 600, fontSize: '0.8rem' }}>{t('common.goFurther')}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#064e3b' }}>
                {currentStepData.nextSteps.map((s, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem', fontSize: '0.8rem', lineHeight: 1.5 }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentStepData?.code && (
            <button
              onClick={handleLoadCode}
              style={{
                marginTop: '1.25rem',
                width: '100%',
                padding: '0.75rem',
                background: theme.colors.secondary,
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              {t('common.loadExample')}
            </button>
          )}
        </div>

        <div
          style={{
            padding: '1rem 1.5rem',
            borderTop: `1px solid ${theme.colors.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: theme.colors.background,
          }}
        >
          <button
            onClick={handlePrevious}
            disabled={isFirst}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.6rem 1rem',
              background: isFirst ? theme.colors.border : 'transparent',
              color: isFirst ? theme.colors.textSecondary : theme.colors.text,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: '6px',
              cursor: isFirst ? 'not-allowed' : 'pointer',
              fontSize: '0.8rem',
            }}
          >
            <ChevronLeft size={16} />
            {t('common.previous')}
          </button>

          <div style={{ display: 'flex', gap: '0.35rem' }}>
            {tutorialStepIds.map((_, i) => (
              <button
                key={i}
                onClick={() => setTutorialStep(i)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i === tutorialStep ? theme.colors.primary : theme.colors.border,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.6rem 1rem',
              background: theme.colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            {isLast ? t('common.finish') : t('common.next')}
            {!isLast && <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
