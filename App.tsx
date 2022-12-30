import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import AppRoot from './src/routes/AppRoot';
import theme from './src/theme/theme';

const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoot />
    </ThemeProvider>
  );
};

export default AppWrapper;
