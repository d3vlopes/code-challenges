import { ReactNode } from 'react';
import { vitest } from 'vitest';

import { render, screen } from '@/__tests__/helpers';

import { heroMock as mock } from './mock';

import { Hero } from '.';

vitest.mock('@/presentation/components/Button', () => ({
	Button: ({ children }: { children: ReactNode }) => (
		<div data-testid="mock-button">{children}</div>
	),
}));

describe('<Hero />', () => {
	beforeEach(() => render(<Hero {...mock} />));

	it('should render title', () => {
		const title = screen.getByRole('heading');

		expect(title).toBeInTheDocument();
	});

	it('should render description', () => {
		const description = screen.getByText(mock.description);

		expect(description).toBeInTheDocument();
	});

	it('should render Button as anchor', () => {
		const anchor = screen.getByRole('link');

		expect(anchor).toHaveAttribute('href', mock.button.href);
		expect(anchor).toHaveTextContent(mock.button.text);
	});

	it('should render technologies icons', () => {
		for (const technologiesIcon of mock.technologiesIcons) {
			const icon = screen.getByRole('img', { name: technologiesIcon.alt });

			expect(icon).toHaveAttribute('src', technologiesIcon.src);
		}
	});
});
