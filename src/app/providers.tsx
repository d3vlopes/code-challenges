'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/presentation/styles/global';
import { theme } from '@/presentation/styles/theme';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
