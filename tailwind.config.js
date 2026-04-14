/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#1a1a1a',
        primary: '#1f2937',
        secondary: '#6366f1',
        accent: '#ec4899',
        border: '#e5e7eb',
      },
    },
  },
  plugins: [],
}
