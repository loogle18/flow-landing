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
      primary: '#FABE0D',
      secondary: '#151515',
      light: '#f5f5f5',
      gray: '#575961',
      dark: '#16171B',
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
    fontFamily: {
      flow: ['"IBM Plex Sans"', 'sans-serif'],
      'flow-mono': ['"IBM Plex Mono"', 'monospace'],
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
