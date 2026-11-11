import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#101B35', 700: '#26335A', 500: '#4A5578', 300: '#8A93AE' },
        brand: { DEFAULT: '#8175E5', dark: '#5B4FD1', soft: '#EEECFC' },
        canvas: '#F6F8FC',
        sky: { DEFAULT: '#B8D9FF', soft: '#E9F3FF' },
        mint: { DEFAULT: '#4FB98A', dark: '#2E8A63', soft: '#E3F5EC' },
        amber: { DEFAULT: '#E9A23B', dark: '#9A6411', soft: '#FDF1DC' },
        coral: { DEFAULT: '#E0555F', dark: '#B3333E', soft: '#FCE8EA' },
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', '"Noto Sans Bengali"', 'system-ui', 'sans-serif'] },
      boxShadow: { soft: '0 1px 2px rgba(16,27,53,.04), 0 8px 24px -8px rgba(16,27,53,.10)', lift: '0 12px 40px -12px rgba(91,79,209,.35)' },
      borderRadius: { '3xl': '1.75rem' },
    },
  },
  plugins: [],
};
export default config;
