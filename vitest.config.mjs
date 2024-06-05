import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './vitest.setup.ts',
		coverage: {
			provider: 'istanbul',
			include: ['**/src/presentation/components/**'],
			exclude: [
				'**/src/presentation/components/**/*.stories.tsx',
				'**/src/presentation/components/**/*.mock.ts',
			],
		},
		include: ['./src/**/**/**/**/*.test.tsx', './src/**/**/**/**/*.test.ts'],
	},
});
