import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [],
}
export default config
