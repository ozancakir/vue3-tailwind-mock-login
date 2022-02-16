module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    // fontFamily: {
    //   sans: ['Almarai']
    // },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        almarai: ['Almarai']
      },
      colors: {
        primary: {
          DEFAULT: '#24599C',
          light: '#E9EEF5',
          dark: '#48525F'
        },
        'bg-primary': {
          DEFAULT: '#fff',
          dark: '#F9FAFB',
          darker: '#E9EEF5'
        },
        'text-primary': {
          DEFAULT: '#48525F',
          light: '#9FA6B1',
          lighter: '#EEEEEE'
        },
        'bg-accent': {
          DEFAULT: '#3BC38E',
          alternate: '#E19F27'

        }

      }
    }
  },
  plugins: []
}
