/** @type {import('tailwindcss').Config} */

export default {
  important: '.ui', // Scope Tailwind classes under .ui
  prefix: 'ui-', // All utilities will have 'ui-' prefix e.g., 'ui-bg-primary'
  
  content: [
    './src/**/*.{ts,tsx}', // Scan your components for Tailwind classes
  ],

  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',

        success: 'var(--success-color)',
        info: 'var(--info-color)',
        warning: 'var(--warning-color)',
        error: 'var(--error-color)',

        neutral: {
          white: 'var(--neutral-white)',
          black: 'var(--neutral-black)',
          gray100: 'var(--neutral-gray-100)',
          gray200: 'var(--neutral-gray-200)',
          gray300: 'var(--neutral-gray-300)',
          gray400: 'var(--neutral-gray-400)',
          gray500: 'var(--neutral-gray-500)',
          gray600: 'var(--neutral-gray-600)',
          gray700: 'var(--neutral-gray-700)',
          gray800: 'var(--neutral-gray-800)',
          gray900: 'var(--neutral-gray-900)',
        },

        background: {
          light: 'var(--background-light)',
          dark: 'var(--background-dark)',
        },

        surface: {
          light: 'var(--surface-light)',
          dark: 'var(--surface-dark)',
        },

        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          hover: 'var(--text-hover)',
        },

        focus: 'var(--focus-ring-color)',
      },
    },
  },

  plugins: [],
};
