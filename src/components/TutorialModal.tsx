import { useApp } from '../lib/AppContext';
import { tutorialSteps } from '../data/tutorials';
import { X, ChevronLeft, ChevronRight, BookOpen, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export function TutorialModal() {
  const { showTutorial, setShowTutorial, tutorialStep, setTutorialStep, theme, setCurrentProject } = useApp();

  if (!showTutorial) return null;

  const currentStep = tutorialSteps[tutorialStep];
  const isFirst = tutorialStep === 0;
  const isLast = tutorialStep === tutorialSteps.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setTutorialStep(tutorialStep + 1);
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
    if (currentStep.code) {
      const newFiles = Object.entries(currentStep.code).map(([name, content]) => ({
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
        name: `Tutorial: ${currentStep.title}`,
        description: currentStep.description,
        files: newFiles,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '2rem',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: theme.colors.surface,
          borderRadius: '16px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: '1.5rem',
            borderBottom: `1px solid ${theme.colors.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: theme.colors.background,
            borderRadius: '16px 16px 0 0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <BookOpen size={24} color={theme.colors.primary} />
            <div>
              <h2 style={{ color: theme.colors.text, margin: 0, fontSize: '1.25rem' }}>
                {currentStep.title}
              </h2>
              <p style={{ color: theme.colors.textSecondary, margin: 0, fontSize: '0.875rem' }}>
                Étape {tutorialStep + 1} sur {tutorialSteps.length}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: theme.colors.textSecondary,
              padding: '0.5rem',
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
          <p
            style={{
              color: theme.colors.text,
              fontSize: '1rem',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
            }}
          >
            {currentStep.content}
          </p>

          {currentStep.tips && currentStep.tips.length > 0 && (
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: theme.colors.background,
                borderRadius: '8px',
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Lightbulb size={18} color={theme.colors.primary} />
                <h3 style={{ color: theme.colors.text, margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>
                  Conseils
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: theme.colors.textSecondary }}>
                {currentStep.tips.map((tip, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentStep.constraints && currentStep.constraints.length > 0 && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#fef2f2',
                borderRadius: '8px',
                border: '1px solid #fecaca',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <AlertCircle size={18} color="#ef4444" />
                <h3 style={{ color: '#991b1b', margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>
                  Contraintes du Web Statique
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#7f1d1d' }}>
                {currentStep.constraints.map((constraint, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    {constraint}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentStep.nextSteps && currentStep.nextSteps.length > 0 && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#f0fdf4',
                borderRadius: '8px',
                border: '1px solid #bbf7d0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <TrendingUp size={18} color="#10b981" />
                <h3 style={{ color: '#065f46', margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>
                  Pour Aller Plus Loin
                </h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#064e3b' }}>
                {currentStep.nextSteps.map((step, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {currentStep.code && (
            <button
              onClick={handleLoadCode}
              style={{
                marginTop: '1.5rem',
                width: '100%',
                padding: '0.75rem',
                background: theme.colors.secondary,
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Charger l'exemple de code
            </button>
          )}
        </div>

        <div
          style={{
            padding: '1.5rem',
            borderTop: `1px solid ${theme.colors.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: theme.colors.background,
            borderRadius: '0 0 16px 16px',
          }}
        >
          <button
            onClick={handlePrevious}
            disabled={isFirst}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: isFirst ? theme.colors.border : 'transparent',
              color: isFirst ? theme.colors.textSecondary : theme.colors.primary,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: '8px',
              cursor: isFirst ? 'not-allowed' : 'pointer',
              fontSize: '0.875rem',
            }}
          >
            <ChevronLeft size={18} />
            Précédent
          </button>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {tutorialSteps.map((_, i) => (
              <div
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: i === tutorialStep ? theme.colors.primary : theme.colors.border,
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isLast}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: isLast ? theme.colors.border : theme.colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: isLast ? 'not-allowed' : 'pointer',
              fontSize: '0.875rem',
            }}
          >
            {isLast ? 'Terminé' : 'Suivant'}
            {!isLast && <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
