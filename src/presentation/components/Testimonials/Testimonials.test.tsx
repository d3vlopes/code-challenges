import { screen } from '@testing-library/react';
import { vitest } from 'vitest';

import { render } from '@/__tests__/helpers';

import { testimonialsMock as mock } from './mock';

import { Testimonials } from '.';

vitest.mock('@/presentation/components/Avatar', () => ({
	Avatar: () => <div data-testid="mock-avatar" />,
}));

vitest.mock('@/presentation/components/SocialIcons', () => ({
	SocialIcons: () => <div data-testid="mock-social-icons" />,
}));

describe('<Testimonials />', () => {
	it('should render Avatars', () => {
		render(<Testimonials items={mock.items.slice(0, 1)} />);

		const Avatars = screen.getByTestId('mock-avatar');

		expect(Avatars).toBeInTheDocument();
	});

	it('should render text', () => {
		render(<Testimonials items={mock.items.slice(0, 1)} />);

		const text = screen.getByText(mock.items[0].text);

		expect(text).toBeInTheDocument();
	});

	it('should render name', () => {
		render(<Testimonials items={mock.items.slice(0, 1)} />);

		const name = screen.getByRole('heading', { name: mock.items[0].name });

		expect(name).toBeInTheDocument;
	});

	it('should render SocialIcons', () => {
		render(<Testimonials items={mock.items.slice(0, 1)} />);

		const SocialIcons = screen.getByTestId('mock-social-icons');

		expect(SocialIcons).toBeInTheDocument();
	});

	it('should render many items', () => {
		render(<Testimonials {...mock} />);

		const Avatars = screen.getAllByTestId('mock-avatar');

		expect(Avatars).toHaveLength(mock.items.length);
	});
});
