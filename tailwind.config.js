// In order to see all the keys you can create the full tailwind configuration file
// npx tailwind init tailwind-full.config.js --full

module.exports = {
  purge: {
    content: ['./src/**/*.ts', './src/**/*.tsx'],
    options: {},
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: '#1652F0',
      secondary: '#212121',
      light: '#f5f5f5',
      gray: '#575961',
      dark: '#16171B', //
      success: '#00CD98',
      info: '#17a2b8',
      warning: '#F6B900',
      danger: '#F46E6E',
      blue: '#007bff',
      indigo: '#6610f2',
      purple: '#5351FB',
      pink: '#e83e8c',
      red: '#F46E6E',
      orange: '#fd7e14',
      yellow: '#F6B900',
      green: '#00CD98',
      teal: '#20c997',
      cyan: '#17a2b8',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
    },
    extend: {
      fontFamily: {
        mono: ['SFMono-Regular'],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
