import { Editor } from '@monaco-editor/react';
import { useApp } from '../lib/AppContext';
import { useEffect, useState } from 'react';

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
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: theme.colors.textSecondary,
          background: theme.colors.background,
        }}
      >
        Sélectionnez un fichier pour commencer
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
          minimap: { enabled: true },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
        }}
      />
    </div>
  );
}
