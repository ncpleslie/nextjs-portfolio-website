function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xlPlusSome': '1465px'
      },
      boxShadow: {
        full: '0 8px 48px 8px rgba(0, 0, 0, 0.87)'
      },
      colors: {
        accent1: withOpacity('--color-accent1'),
        accent2: withOpacity('--color-accent2'),
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          secondary: withOpacity('--color-text-secondary'),
          accent1: withOpacity('--color-accent1'),
          accent2: withOpacity('--color-accent2'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'fill-accent': withOpacity('--color-fill-accent'),
          card: withOpacity('--color-card'),
          'button-base': withOpacity('--color-button-base'),
          'button-base-hover': withOpacity('--color-button-base-hover'),
          'button-disabled': withOpacity('--color-button-disabled'),
          'fill-dark-accent': withOpacity('--color-dark-accent')
        },
      },
      borderColor: {
        skin: {
          'button-base': withOpacity('--color-button-accent'),
          'button-base-hover': withOpacity('--color-button-accent-hover'),
          'button-disabled': withOpacity('--color-button-disabled'),
          accent1: withOpacity('--color-accent1'),
          accent2: withOpacity('--color-accent2'),
          'dark-accent': withOpacity('--color-dark-accent')
        },
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
