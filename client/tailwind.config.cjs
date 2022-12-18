module.exports = {
  content: [
    './src/components/**/*.{jsx,js,html,scss}',
    './src/pages/**/*.{jsx,js,html,scss}',
    './src/**/*.{jsx,js,html,scss}',
    './src/index.html',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '567px',
      md: '800px',
      lg: '990px',
      xl: '1200px',
      xxl: '1600px',
    },
    fontSize: {
      h3Footer: '2rem',
      socialLink: '3.5rem',
      searchIcon: '3rem',
      navLogo: '2.2rem',
      base: '1.6rem',
    },
    extend: {
      colors: {
        mainGrey: '#f3f4f6',
        bodyBg: '#9ca3af',
        alt: '#334155',
        btnHover: '#64748b',
        textColor: '#000',
        progressGray: 'rgba(35, 31, 32, 0.15)',
      },
    },
  },
  plugins: [],
};
