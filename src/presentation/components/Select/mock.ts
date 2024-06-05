import { generateID } from '@/utils/generate-id';

import { SelectProps } from '.';

export const selectMock: SelectProps = {
	name: 'tracks',
	label: 'Trilha',
	options: [
		{
			id: generateID(),
			text: 'Frontend Developer',
			value: 'frontend-developer',
		},
		{
			id: generateID(),
			text: 'Backend Developer',
			value: 'backend-developer',
		},
		{
			id: generateID(),
			text: 'Full Stack Developer',
			value: 'full-Stack-developer',
		},
		{
			id: generateID(),
			text: 'Mobile Developer',
			value: 'mobile-developer',
		},
	],
};
