import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

// Definir cores dos temas aqui
export const theme = {
  primary: {
    100: '#FFE1EC',
    200: '#FFB3D0',
    300: '#FF80AF',
    400: '#FF4D8F',
    500: '#FF006B',
    600: '#E60060',
    700: '#CC0056',
    800: '#A80049',
    900: '#80003A'
  },
  secondary: '#141414', // background
  heading: colors.slate[800],
  paragraph: colors.neutral[50]
}

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        buzz: 'buzz .12s linear 4',
        opacity: 'opacity 2s linear infinite',
        'spin-fast': 'spin .85s linear infinite'
      },
      colors: {
        'secondary-theme': 'var(--secondary-theme)',
        'heading-theme': 'var(--heading-theme)',
        'paragraph-theme': 'var(--paragraph-theme)',
        primary: {
          ...theme.primary
        }
      },
      boxShadow: {
        primary: '0 0 40px 0 #F5087B'
      },
      fontFamily: {
        heading: ['var(--font-merienda)'],
        sans: ['var(--font-inter)']
      },
      keyframes: {
        buzz: {
          '50%': { transform: ' translateX(3px) rotate(2deg)' },
          '100%': { transform: 'translateX(-3px) rotate(-2deg)' }
        },
        opacity: {
          '50%': { opacity: '70%' },
          '100%': { opacity: '100%' }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--secondary-theme': theme.secondary,
          '--heading-theme': theme.heading,
          '--paragraph-theme': theme.paragraph
        }
      })
    })
  ]
} satisfies Config
