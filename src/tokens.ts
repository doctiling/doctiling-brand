// Doctiling brand tokens — shared web ↔ mobile.
// Source of truth for the values: src/app/globals.css (:root / .dark HSL vars).
// Hex equivalents here because React Native can't consume CSS custom properties.
// If globals.css changes, regenerate these (HSL → hex) in the same commit.

export const lightColors = {
  background: '#FBFAF9',
  foreground: '#212E3B',
  card: '#FFFFFF',
  cardForeground: '#212E3B',
  popover: '#FFFFFF',
  popoverForeground: '#212E3B',
  primary: '#798A75',
  primaryForeground: '#F6F7F9',
  secondary: '#F2F1ED',
  secondaryForeground: '#212E3B',
  muted: '#F0EEEA',
  mutedForeground: '#53606E',
  accent: '#2C3D4E',
  accentForeground: '#F6F7F9',
  destructive: '#BE4037',
  destructiveForeground: '#F6F7F9',
  border: '#E2DFD9',
  input: '#E2DFD9',
  ring: '#849A7E',
} as const;

export const darkColors = {
  background: '#181F25',
  foreground: '#E8E2D9',
  card: '#1E262F',
  cardForeground: '#E8E2D9',
  popover: '#1E262F',
  popoverForeground: '#E8E2D9',
  primary: '#92A58D',
  primaryForeground: '#181F25',
  secondary: '#2E3842',
  secondaryForeground: '#E8E2D9',
  muted: '#2A333C',
  mutedForeground: '#B0A99B',
  accent: '#C2B3A3',
  accentForeground: '#181F25',
  destructive: '#BF4840',
  destructiveForeground: '#F0ECE6',
  border: '#36424E',
  input: '#36424E',
  ring: '#92A58D',
} as const;

export type BrandColors = Record<keyof typeof lightColors, string>;
export type ColorScheme = 'light' | 'dark';

export const colors: Record<ColorScheme, BrandColors> = {
  light: lightColors,
  dark: darkColors,
};

export const typography = {
  // Display/headings — serif, "editorial, print-inspired".
  display: 'Fraunces',
  // UI/body.
  body: 'Inter',
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
  },
} as const;

// --radius: 0.5rem in globals.css (lg = radius, md = radius - 2px, sm = radius - 4px).
export const radius = {
  sm: 4,
  md: 6,
  lg: 8,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;
