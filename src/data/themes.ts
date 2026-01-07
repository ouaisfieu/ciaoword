import type { Theme } from '../types';

export const defaultTheme: Theme = {
  id: 'tender-lilac',
  name: 'Vert Tendre & Lilas',
  colors: {
    primary: '#7CB9A8',
    secondary: '#B39BC8',
    background: '#F5FAF8',
    surface: '#FFFFFF',
    text: '#2D4A42',
    textSecondary: '#6B8580',
    border: '#D4E8E1',
    accent: '#C8B5D8',
  },
};

export const darkTheme: Theme = {
  id: 'dark-tender-lilac',
  name: 'Sombre Tendre & Lilas',
  colors: {
    primary: '#98D8C8',
    secondary: '#C8B5D8',
    background: '#1A2E28',
    surface: '#243A33',
    text: '#E8F3F0',
    textSecondary: '#A8C5BE',
    border: '#3A5A4F',
    accent: '#D4BFDE',
  },
};

export const availableThemes: Theme[] = [defaultTheme, darkTheme];
