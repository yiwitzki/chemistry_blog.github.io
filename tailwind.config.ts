import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
        card: 'hsl(var(--card))',
        accent: 'hsl(var(--accent))',
        primary: 'hsl(var(--primary))'
      },
      boxShadow: {
        soft: '0 10px 30px -15px rgba(18, 32, 56, 0.15)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
