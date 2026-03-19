import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',
} satisfies Config;