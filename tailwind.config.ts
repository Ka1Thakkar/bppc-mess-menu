import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        bggray : "#121212",
        textgreen : '#2DD293'
      },
      backgroundImage : {
        hero_pattern : "../public/assets/Pattern.png"
      }
    },
  },
  plugins: [],
}
export default config
