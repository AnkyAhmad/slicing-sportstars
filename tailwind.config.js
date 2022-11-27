module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      backgroundImage: {
        'gradient-card':
          'linear-gradient(to bottom,rgba(7, 13, 89, 0) 37.72%, #070D59 99.75%)',
        'gradient-card-black':
          'linear-gradient(to bottom,rgba(0, 0, 0, 0) 43.65%, #000000 100%)',
      },
      colors: {
        transparent: 'transparent',
        'red-primary': '#ED1C24',
        'dark-blue': '#070d59',
        'dark-blue-secondary': '#24326F',
      },
      dropShadow: {
        bottom: '0px 4px 2px  rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
