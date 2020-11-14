import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import reset from './src/styles/reset';
import theme from './src/styles/theme';

interface WrapWithProviderProps {
  element: HTMLElement;
}

const WrapWithProvider: React.FC<WrapWithProviderProps> = ({ element }) => (
  <>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
);

export default WrapWithProvider;
