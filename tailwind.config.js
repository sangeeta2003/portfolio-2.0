/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a192f",
          light: "#f8fafc",
        },
        secondary: {
          DEFAULT: "#64ffda",
          light: "#0891b2",
        },
        tertiary: {
          DEFAULT: "#112240",
          light: "#e2e8f0",
        },
        textPrimary: {
          DEFAULT: "#ccd6f6",
          light: "#1e293b",
        },
        textSecondary: {
          DEFAULT: "#8892b0",
          light: "#475569",
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}