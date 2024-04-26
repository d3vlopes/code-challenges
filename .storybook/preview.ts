import type { Preview } from '@storybook/react';

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/presentation/styles/global';
import { theme } from '../src/presentation/styles/theme';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'background-400',
			values: [
				{
					name: 'background-100',
					value: theme.colors.background[100],
				},
				{
					name: 'background-200',
					value: theme.colors.background[200],
				},
				{
					name: 'background-300',
					value: theme.colors.background[300],
				},
				{
					name: 'background-400',
					value: theme.colors.background[400],
				},
				{
					name: 'background-500',
					value: theme.colors.background[500],
				},
			],
		},
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
