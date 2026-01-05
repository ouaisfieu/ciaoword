import { useEffect, useRef, useState } from 'react';
import { useApp } from '../lib/AppContext';
import { RefreshCw } from 'lucide-react';

export function LivePreview() {
  const { currentProject, theme, addConsoleMessage } = useApp();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (!currentProject || !iframeRef.current) return;

    const htmlFile = currentProject.files.find((f) => f.name === 'index.html');
    const cssFile = currentProject.files.find((f) => f.name === 'style.css');
    const jsFile = currentProject.files.find((f) => f.name === 'script.js');

    if (!htmlFile?.content) return;

    let html = htmlFile.content;

    if (cssFile?.content) {
      html = html.replace(
        /<link[^>]*href=["']style\.css["'][^>]*>/gi,
        `<style>${cssFile.content}</style>`
      );
    }

    if (jsFile?.content) {
      const wrappedJs = `
        (function() {
          const originalConsoleLog = console.log;
          const originalConsoleError = console.error;
          const originalConsoleWarn = console.warn;

          console.log = function(...args) {
            window.parent.postMessage({ type: 'console', level: 'log', args: args.map(String) }, '*');
            originalConsoleLog.apply(console, args);
          };

          console.error = function(...args) {
            window.parent.postMessage({ type: 'console', level: 'error', args: args.map(String) }, '*');
            originalConsoleError.apply(console, args);
          };

          console.warn = function(...args) {
            window.parent.postMessage({ type: 'console', level: 'warn', args: args.map(String) }, '*');
            originalConsoleWarn.apply(console, args);
          };

          window.addEventListener('error', function(e) {
            window.parent.postMessage({
              type: 'console',
              level: 'error',
              args: [e.message + ' at ' + e.filename + ':' + e.lineno]
            }, '*');
          });

          try {
            ${jsFile.content}
          } catch(e) {
            console.error('Erreur JavaScript:', e.message);
          }
        })();
      `;

      html = html.replace(
        /<script[^>]*src=["']script\.js["'][^>]*><\/script>/gi,
        `<script>${wrappedJs}</script>`
      );
    }

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();
    }
  }, [currentProject, key]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'console') {
        const { level, args } = event.data;
        addConsoleMessage({
          type: level as 'log' | 'error' | 'warn',
          message: args.join(' '),
        });
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [addConsoleMessage]);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
    addConsoleMessage({
      type: 'info',
      message: 'Prévisualisation rechargée',
    });
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: theme.colors.background }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          background: theme.colors.surface,
          borderBottom: `1px solid ${theme.colors.border}`,
        }}
      >
        <span style={{ color: theme.colors.text, fontWeight: 500 }}>Prévisualisation</span>
        <button
          onClick={handleRefresh}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: theme.colors.primary,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 0.5rem',
          }}
          title="Rafraîchir la prévisualisation"
        >
          <RefreshCw size={16} />
        </button>
      </div>
      <iframe
        key={key}
        ref={iframeRef}
        style={{
          flex: 1,
          border: 'none',
          width: '100%',
          background: 'white',
        }}
        title="Live Preview"
        sandbox="allow-scripts allow-same-origin allow-modals"
      />
    </div>
  );
}
