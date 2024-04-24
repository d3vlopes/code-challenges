import type { ReactElement } from 'react';
import type { RenderOptions, RenderResult } from '@testing-library/react';

import { cleanup, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { afterEach } from 'vitest';

import userEvent from '@testing-library/user-event';

import { theme } from '../../src/presentation/styles/theme';

afterEach(() => {
  cleanup();
});

const customRender = (
  ui: ReactElement,
  options: RenderOptions = {},
): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render, userEvent };
