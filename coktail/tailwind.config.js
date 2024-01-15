import scrollbar from 'tailwind-scrollbar-hide'
import {
  HEADER_HEIGHT,
  MOBILE_MIN_WIDTH,
  NAVBAR_HEIGHT,
  // INPUT_HEIGHT,
  // BUTTON_HEIGHT,
} from './src/constants'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE1E1',
        secondary: '#F4F4F4',
      },
      width: {
        mobile: `${MOBILE_MIN_WIDTH}px`,
      },
      height: {
        header: HEADER_HEIGHT,
        navbar: NAVBAR_HEIGHT,
      },
      margin: {
        header: HEADER_HEIGHT,
      },
    },
  },
  plugins: [scrollbar],
}
