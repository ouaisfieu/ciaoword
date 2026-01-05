import type { ReactNode } from 'react';
import { createElement, Fragment } from 'react';

export function parseMarkdown(text: string): ReactNode[] {
  const lines = text.split('\n');
  const elements: ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let codeLanguage = '';
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        codeContent = [];
      } else {
        elements.push(
          createElement(
            'pre',
            {
              key: key++,
              style: {
                background: '#1e1e1e',
                color: '#d4d4d4',
                padding: '1rem',
                borderRadius: '8px',
                overflow: 'auto',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
                margin: '0.75rem 0',
              },
            },
            createElement('code', { className: `language-${codeLanguage}` }, codeContent.join('\n'))
          )
        );
        inCodeBlock = false;
        codeContent = [];
        codeLanguage = '';
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    if (line.trim() === '') {
      elements.push(createElement('br', { key: key++ }));
      continue;
    }

    const parsedLine = parseInlineMarkdown(line, key++);
    elements.push(parsedLine);
  }

  return elements;
}

function parseInlineMarkdown(text: string, key: number): ReactNode {
  const parts: ReactNode[] = [];
  let partKey = 0;

  const tokens: { type: 'text' | 'bold' | 'code'; content: string; index: number }[] = [];
  let lastIndex = 0;

  const combined = [...text.matchAll(/\*\*(.+?)\*\*|`([^`]+)`/g)];

  for (const match of combined) {
    if (match.index !== undefined && match.index > lastIndex) {
      tokens.push({ type: 'text', content: text.slice(lastIndex, match.index), index: lastIndex });
    }

    if (match[0].startsWith('**')) {
      tokens.push({ type: 'bold', content: match[1], index: match.index || 0 });
    } else if (match[0].startsWith('`')) {
      tokens.push({ type: 'code', content: match[2], index: match.index || 0 });
    }

    lastIndex = (match.index || 0) + match[0].length;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', content: text.slice(lastIndex), index: lastIndex });
  }

  if (tokens.length === 0) {
    return createElement('div', { key, style: { marginBottom: '0.5rem' } }, text);
  }

  for (const token of tokens) {
    if (token.type === 'text') {
      parts.push(createElement(Fragment, { key: partKey++ }, token.content));
    } else if (token.type === 'bold') {
      parts.push(
        createElement(
          'strong',
          { key: partKey++, style: { fontWeight: 600, color: 'inherit' } },
          token.content
        )
      );
    } else if (token.type === 'code') {
      parts.push(
        createElement(
          'code',
          {
            key: partKey++,
            style: {
              background: 'rgba(0,0,0,0.1)',
              padding: '0.15rem 0.4rem',
              borderRadius: '4px',
              fontFamily: 'monospace',
              fontSize: '0.9em',
            },
          },
          token.content
        )
      );
    }
  }

  return createElement('div', { key, style: { marginBottom: '0.5rem' } }, parts);
}
