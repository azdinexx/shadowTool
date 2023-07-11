// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {},
    extend: {},
    colors: {
      // Light mode colors
      primary: '',
      bg: '#f5f5f4',
      white: '#fff',
      gray: {
        50: '#f9fafb',
        900: '#111827',
        800: '#1e293b',
        200: '#e5e7eb',
        100: '#f3f4f6',
        400: '#94a3b8',
        600: '#475569',
        700: '#374151',
      },
      purple: {
        500: '#a855f7',
      },
      green: {
        500: '#22c55e',
      },

      // Dark mode colors
      dark: {
        primary: '#00ff00',
        bg: '#1e293b',
        black: '#000',
        gray: {
          50: '#f9fafb',
          900: '#111827',
          800: '#1e293b',
          200: '#e5e7eb',
          100: '#f3f4f6',
          400: '#94a3b8',
          600: '#475569',
          700: '#374151',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode for background colors
      textColor: ['dark'], // Enable dark mode for text colors
    },
  },
  darkMode: 'class', // Enable dark mode with class-based approach
  plugins: [
    // Enable dark mode variants for utilities
    require('tailwindcss-dark-mode')(),
  ],
};
