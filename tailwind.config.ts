import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto','sans-serif'],
        firasans: ['Fira Sans', 'sans-serif'],
        oswald: ['Oswald','sans-serif'],
        economica: ['Economica', 'sans-serif'],
        notoserif: ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
