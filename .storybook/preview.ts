import type { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { theme } from '../src/presentation/styles/theme';
import { GlobalStyles } from '../src/presentation/styles/global';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        default: theme,
      },
      defaultTheme: 'default',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
