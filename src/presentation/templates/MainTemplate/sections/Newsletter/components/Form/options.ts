import { OptionsProps } from '@/presentation/components/Select';

import { generateID } from '@/utils/generate-id';

export const options: OptionsProps[] = [
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
		value: 'full-stack-developer',
	},
	{
		id: generateID(),
		text: 'Mobile Developer',
		value: 'mobile-developer',
	},
];
