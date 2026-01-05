import { useApp } from '../lib/AppContext';
import { Trash2, Terminal, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Console() {
  const { consoleMessages, clearConsole, theme } = useApp();
  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [consoleMessages]);

  const getMessageStyle = (type: string) => {
    switch (type) {
      case 'error':
        return { color: '#ef4444', bg: '#fef2f2', icon: 'X' };
      case 'warn':
        return { color: '#f59e0b', bg: '#fffbeb', icon: '!' };
      case 'success':
        return { color: theme.colors.primary, bg: `${theme.colors.primary}10`, icon: 'ok' };
      case 'info':
        return { color: '#3b82f6', bg: '#eff6ff', icon: 'i' };
      case 'system':
        return { color: theme.colors.secondary, bg: `${theme.colors.secondary}10`, icon: 'sys' };
      case 'revelation':
        return { color: '#8b5cf6', bg: '#f5f3ff', icon: 'zap' };
      default:
        return { color: theme.colors.text, bg: 'transparent', icon: '>' };
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
          <Terminal size={14} color={theme.colors.primary} />
          <span style={{ color: theme.colors.text, fontWeight: 500, fontSize: '0.8rem' }}>Console</span>
          {consoleMessages.length > 0 && (
            <span
              style={{
                background: theme.colors.primary,
                color: 'white',
                padding: '0.1rem 0.4rem',
                borderRadius: '10px',
                fontSize: '0.65rem',
              }}
            >
              {consoleMessages.length}
            </span>
          )}
        </div>
        <button
          onClick={clearConsole}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: theme.colors.textSecondary,
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
          }}
          title="Effacer"
        >
          <Trash2 size={14} />
        </button>
      </div>
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.75rem',
        }}
      >
        {consoleMessages.length === 0 ? (
          <div style={{ color: theme.colors.textSecondary, textAlign: 'center', padding: '1.5rem', fontSize: '0.75rem' }}>
            Les messages de la page et du systeme s'afficheront ici
          </div>
        ) : (
          consoleMessages.map((msg) => {
            const style = getMessageStyle(msg.type);
            return (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '0.25rem',
                  padding: '0.4rem 0.5rem',
                  borderRadius: '4px',
                  background: style.bg,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    color: style.color,
                    fontWeight: 600,
                    minWidth: '24px',
                    fontSize: '0.65rem',
                  }}
                >
                  {msg.type === 'revelation' ? (
                    <Zap size={12} style={{ verticalAlign: 'middle' }} />
                  ) : (
                    `[${style.icon}]`
                  )}
                </span>
                <span style={{ color: theme.colors.textSecondary, minWidth: '50px', fontSize: '0.65rem' }}>
                  {new Date(msg.timestamp).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </span>
                <span
                  style={{
                    color: style.color,
                    flex: 1,
                    wordBreak: 'break-word',
                    fontWeight: msg.type === 'revelation' ? 500 : 400,
                  }}
                >
                  {msg.message}
                </span>
              </div>
            );
          })
        )}
        <div ref={consoleEndRef} />
      </div>
    </div>
  );
}
