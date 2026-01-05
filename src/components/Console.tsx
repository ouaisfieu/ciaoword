import { useApp } from '../lib/AppContext';
import { Trash2, Terminal } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Console() {
  const { consoleMessages, clearConsole, theme } = useApp();
  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [consoleMessages]);

  const getMessageColor = (type: string) => {
    switch (type) {
      case 'error':
        return '#ef4444';
      case 'warn':
        return '#f59e0b';
      case 'success':
        return theme.colors.primary;
      case 'info':
        return '#3b82f6';
      default:
        return theme.colors.text;
    }
  };

  const getMessageIcon = (type: string) => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warn':
        return '⚠️';
      case 'success':
        return '✅';
      case 'info':
        return 'ℹ️';
      default:
        return '📝';
    }
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.colors.surface,
        borderTop: `1px solid ${theme.colors.border}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          borderBottom: `1px solid ${theme.colors.border}`,
          background: theme.colors.background,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={16} color={theme.colors.primary} />
          <span style={{ color: theme.colors.text, fontWeight: 500 }}>Console</span>
          <span
            style={{
              background: theme.colors.primary,
              color: 'white',
              padding: '0.125rem 0.5rem',
              borderRadius: '12px',
              fontSize: '0.75rem',
            }}
          >
            {consoleMessages.length}
          </span>
        </div>
        <button
          onClick={clearConsole}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: theme.colors.textSecondary,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 0.5rem',
          }}
          title="Effacer la console"
        >
          <Trash2 size={16} />
        </button>
      </div>
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
        }}
      >
        {consoleMessages.length === 0 ? (
          <div style={{ color: theme.colors.textSecondary, textAlign: 'center', padding: '2rem' }}>
            Console vide - Les messages s'afficheront ici
          </div>
        ) : (
          consoleMessages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                padding: '0.5rem',
                borderRadius: '4px',
                background: theme.colors.background,
              }}
            >
              <span>{getMessageIcon(msg.type)}</span>
              <span style={{ color: theme.colors.textSecondary, minWidth: '60px' }}>
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
              <span style={{ color: getMessageColor(msg.type), flex: 1 }}>{msg.message}</span>
            </div>
          ))
        )}
        <div ref={consoleEndRef} />
      </div>
    </div>
  );
}
