/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        foreground: '#f5f5f5',
        primary: {
          DEFAULT: '#10b981',
          foreground: '#0d0d0d',
        },
        card: {
          DEFAULT: '#1a1a1a',
          foreground: '#f5f5f5',
        },
        border: '#262626',
        input: '#262626',
        ring: '#10b981',
      },
       borderRadius: {
        lg: `0.5rem`,
        md: `calc(0.5rem - 2px)`,
        sm: `calc(0.5rem - 4px)`,
      },
    },
  },
  plugins: [],
}
