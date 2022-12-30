import {createTheme} from '@shopify/restyle';

const palette = {
  bg: {
    light: '#FFFFFA',
  },

  black: '#000714',
  white: '#FFFFFA',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.bg.light,
    mainText: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    h1: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'mainText',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'mainText',
    },
  },
});

export type Theme = typeof theme;
export default theme;
