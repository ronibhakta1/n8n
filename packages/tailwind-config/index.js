/** @type {import('tailwindcss').Config} */
const basePreset = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      }
    }
  },
  plugins: []
};

const config = {
  // Consumers should set their own content globs; preset provides theme/plugins
  presets: [basePreset]
};

export default config;
