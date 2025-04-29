// src/theme/colors.ts

export const baseColors = {
  primary: {
    DEFAULT: '#1D4ED8',
    light: '#3B82F6',
    dark: '#1E40AF',
  },
  secondary: {
    DEFAULT: '#64748B',
    light: '#94A3B8',
    dark: '#475569',
  },
  success: {
    DEFAULT: '#10B981',
    light: '#34D399',
    dark: '#059669',
  },
  warning: {
    DEFAULT: '#F59E0B',
    light: '#FBBF24',
    dark: '#D97706',
  },
  error: {
    DEFAULT: '#EF4444',
    light: '#F87171',
    dark: '#B91C1C',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
};

export const lightTheme = {
  ...baseColors,
  background: {
    default: '#FFFFFF',
    surface: '#F9FAFB',
  },
  text: {
    primary: '#111827',
    secondary: '#4B5563',
  },
};

export const darkTheme = {
  ...baseColors,
  background: {
    default: '#111827',
    surface: '#1F2937',
  },
  text: {
    primary: '#F9FAFB',
    secondary: '#9CA3AF',
  },
};
