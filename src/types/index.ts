import { ReactElement } from 'react';

/** Common interfaces used across the application */

/** Represents a portfolio image item */
export interface ImageItem {
  id: string;
  url: string;
  title: string;
  blurDataUrl?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/** Navigation item structure */
export interface NavItem {
  id: string;
  icon: ReactElement;
  label: string;
  href: string;
}

/** Dark mode context props */
export interface ThemeProps {
  isDark: boolean;
  toggleTheme: () => void;
}

/** Base component props */
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

/** Image loading states */
export type ImageLoadingState = 'loading' | 'loaded' | 'error';

/** Image preload options */
export interface PreloadOptions {
  priority?: boolean;
  quality?: number;
  blur?: boolean;
}