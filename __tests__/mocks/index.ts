import { vitest } from 'vitest';

global.IntersectionObserver = class IntersectionObserver {
	observe() {
		return null;
	}

	disconnect() {
		return null;
	}

	unobserve() {
		return null;
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as any;

vitest.mock('next/router', () => ({
	useRouter: vitest.fn(),
}));
