import { generateID } from '@/utils/generate-id';

import { TracksTabProps } from '.';

import { challengeMock } from '../ChallengeCard/mock';

export const tracksMock: TracksTabProps = {
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
				{
					id: generateID(),
					...challengeMock,
					title: 'Challenge 002',
				},
				{
					id: generateID(),
					...challengeMock,
					title: 'Challenge 003',
				},
			],
		},
		{
			id: generateID(),
			isReleased: true,
			name: 'Backend Developer',
			challenges: [
				{
					id: generateID(),
					...challengeMock,
					title: 'Backend Challenge',
				},
			],
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Full Stack Developer',
		},
		{
			id: generateID(),
			isReleased: false,
			name: 'Mobile Developer',
		},
	],
};
