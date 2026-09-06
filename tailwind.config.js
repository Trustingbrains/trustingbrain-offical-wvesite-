/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tb: {
          bg: '#100317',
          surface: '#160E22',
          card: '#1D112B',
          cardHover: '#241535',
          border: 'rgba(255, 255, 255, 0.12)',
          borderSubtle: 'rgba(255, 255, 255, 0.06)',
          purple: '#A234FD',
          purpleDark: '#771A99',
          purpleLight: '#BD6FFD',
          orange: '#FE7524',
          orangeHot: '#FF4C13',
          pink: '#FF31AB',
          blue: '#2B3BA1',
          teal: '#25756C',
          textMuted: '#BABABA',
          textSubtle: '#A299AB',
          darkGray: '#2D2733',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-purple': '0 0 40px -5px rgba(162, 52, 253, 0.35)',
        'glow-orange': '0 0 35px -5px rgba(254, 117, 36, 0.35)',
        'glow-button': '0 4px 20px 0 rgba(162, 52, 253, 0.4)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
