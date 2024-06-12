import { ReactNode } from 'react';
import { vitest } from 'vitest';

import { render, screen } from '@/__tests__/helpers';

import { footerMock as mock } from './mock';

import { Footer } from '.';

vitest.mock('@/presentation/components/Badge', () => ({
	Badge: ({ children }: { children: ReactNode }) => (
		<div data-testid="mock-badge">{children}</div>
	),
}));

vitest.mock('@/presentation/components/SocialIcons', () => ({
	SocialIcons: ({ children }: { children: ReactNode }) => (
		<div data-testid="mock-social-icons">{children}</div>
	),
}));

describe('<Footer />', () => {
	it('should render track navigation heading', () => {
		render(<Footer {...mock} />);

		const heading = screen.getByRole('heading', {
			name: mock.navigationLinks.tracksNavigation.heading,
		});

		expect(heading).toBeInTheDocument();
	});

	it('should render tracks', () => {
		render(<Footer {...mock} />);

		for (const tracks of mock.navigationLinks.tracksNavigation.tracks) {
			const heading = screen.getByRole('heading', {
				name: tracks.name,
			});

			expect(heading).toBeInTheDocument();
		}
	});

	it('should render track with correct href', () => {
		render(<Footer {...mock} />);

		for (const tracks of mock.navigationLinks.tracksNavigation.tracks) {
			const anchor = screen.getByRole('link', {
				name: tracks.name,
			});

			expect(anchor).toHaveAttribute('href', tracks.href);
		}
	});

	it('should render Badge for not released tracks', () => {
		render(<Footer {...mock} />);

		const Badge = screen.getAllByTestId('mock-badge');

		const inactiveTracks = mock.navigationLinks.tracksNavigation.tracks.filter(
			(track) => track.isReleased === false,
		);

		expect(Badge).toHaveLength(inactiveTracks.length);
	});

	it('should render help navigation heading', () => {
		render(<Footer {...mock} />);

		const heading = screen.getByRole('heading', {
			name: mock.navigationLinks.helpNavigation.heading,
		});

		expect(heading).toBeInTheDocument();
	});

	it('should render help links', () => {
		render(<Footer {...mock} />);

		for (const helpLink of mock.navigationLinks.helpNavigation.links) {
			const link = screen.getByRole('link', { name: helpLink.text });

			expect(link).toHaveAttribute('href', helpLink.href);
		}
	});

	it('should render social navigation heading', () => {
		render(<Footer {...mock} />);

		const heading = screen.getByRole('heading', {
			name: mock.navigationLinks.socialNavigation.heading,
		});

		expect(heading).toBeInTheDocument();
	});

	it('should render SocialIcons', () => {
		render(<Footer {...mock} />);

		const SocialIcons = screen.getByTestId('mock-social-icons');

		expect(SocialIcons).toBeInTheDocument();
	});

	it('should render company name', () => {
		render(<Footer {...mock} />);

		const companyName = screen.getByText(/Code Challenges/i);

		expect(companyName).toBeInTheDocument();
	});

	it('should render current year', () => {
		render(<Footer {...mock} />);

		const currentYear = new Date().getFullYear();

		const copyright = screen.getByText(
			`© ${mock.companyName} - ${currentYear}`,
		);

		expect(copyright).toBeInTheDocument();
	});
});
