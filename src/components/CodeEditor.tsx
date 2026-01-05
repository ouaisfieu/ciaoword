import { Editor } from '@monaco-editor/react';
import { useApp } from '../lib/AppContext';
import { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

export function CodeEditor() {
  const { currentProject, setCurrentProject, currentFile, theme, addConsoleMessage } = useApp();
  const [code, setCode] = useState('');

  const currentFileObj = currentProject?.files.find((f) => f.id === currentFile);

  useEffect(() => {
    if (currentFileObj?.content) {
      setCode(currentFileObj.content);
    }
  }, [currentFileObj]);

  const handleEditorChange = (value: string | undefined) => {
    if (!value || !currentProject || !currentFile) return;

    setCode(value);

    setCurrentProject({
      ...currentProject,
      files: currentProject.files.map((file) =>
        file.id === currentFile ? { ...file, content: value } : file
      ),
      updatedAt: new Date().toISOString(),
    });

    addConsoleMessage({
      type: 'info',
      message: `Fichier ${currentFile} modifié`,
    });
  };

  if (!currentFileObj) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          color: theme.colors.textSecondary,
          background: theme.colors.background,
          fontSize: '1rem',
          gap: '0.5rem',
        }}
      >
        <Code size={48} style={{ opacity: 0.3 }} />
        <span>Sélectionnez un fichier pour commencer</span>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Editor
        height="100%"
        language={currentFileObj.language}
        value={code}
        onChange={handleEditorChange}
        theme={theme.id.includes('dark') ? 'vs-dark' : 'vs'}
        options={{
          minimap: { enabled: true, scale: 1 },
          fontSize: 15,
          lineHeight: 24,
          fontFamily: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
          fontLigatures: true,
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          wrappingIndent: 'indent',
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          renderLineHighlight: 'all',
          renderWhitespace: 'selection',
          padding: { top: 16, bottom: 16 },
          suggest: {
            showKeywords: true,
            showSnippets: true,
          },
          quickSuggestions: {
            other: true,
            comments: false,
            strings: true,
          },
          formatOnPaste: true,
          formatOnType: true,
          folding: true,
          foldingStrategy: 'indentation',
          bracketPairColorization: {
            enabled: true,
          },
        }}
      />
    </div>
  );
}
