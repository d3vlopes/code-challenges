import { vitest } from 'vitest';

import { render, screen } from '@/__tests__/helpers';

import { generateID } from '@/utils/generate-id';

import { challengeMock } from '../ChallengeCard/mock';

import { ReactNode } from 'react';
import { TracksTab, TracksTabProps } from '.';

const mock: TracksTabProps = {
	tracks: [
		{
			id: generateID(),
			isReleased: true,
			name: 'Frontend Developer',
			challenges: [
				{
					id: generateID(),
					...challengeMock,
				},
			],
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Backend Developer',
		},
	],
};

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

vitest.mock('@/presentation/components/ChallengeCard', () => ({
	ChallengeCard: () => <div data-testid="mock-challenge-card" />,
}));

vitest.mock('@/presentation/components/Badge', () => ({
	Badge: ({ children }: { children: ReactNode }) => (
		<div data-testid="mock-badge">{children}</div>
	),
}));

describe('<TracksTab />', () => {
	it('should render tabs', () => {
		render(<TracksTab {...mock} />);

		const tabs = screen.getAllByRole('tab');

		expect(tabs).toHaveLength(mock.tracks.length);
	});

	it('should render Badge for not released tracks', () => {
		render(<TracksTab {...mock} />);

		const Badge = screen.getAllByTestId('mock-badge');

		const inactiveTracks = mock.tracks.filter(
			(track) => track.isReleased === false,
		);

		expect(Badge).toHaveLength(inactiveTracks.length);
	});

	it('should disabled button for not released track', () => {
		const { container } = render(<TracksTab {...mock} />);

		const notReleasedTrackButton = container.querySelector(
			'#tab-backend-developer',
		);

		expect(notReleasedTrackButton).toBeDisabled();
	});

	it('should render panel of active tab', () => {
		const { container } = render(<TracksTab {...mock} />);

		const activeTab = container.querySelector('#panel-frontend-developer');
		const inactiveTab = container.querySelector('#panel-backend-developer');

		expect(activeTab?.getAttribute('aria-hidden')).toBe('false');
		expect(inactiveTab?.getAttribute('aria-hidden')).toBe('true');
	});

	it('should change active tab on click', () => {
		const { container } = render(<TracksTab {...mock} />);

		const activeTab = container.querySelector('#panel-frontend-developer');
		const inactiveTab = container.querySelector('#panel-backend-developer');

		expect(activeTab).toHaveStyle({
			display: 'flex',
		});

		expect(inactiveTab).toHaveStyle({
			display: 'none',
		});
	});

	it('should render ChallengeCard correct length', () => {
		render(<TracksTab {...mock} />);

		const ChallengeCard = screen.getAllByTestId('mock-challenge-card');

		const trackChallengesLength = mock.tracks[0].challenges?.length ?? 0;

		expect(ChallengeCard).toHaveLength(trackChallengesLength);
	});
});
