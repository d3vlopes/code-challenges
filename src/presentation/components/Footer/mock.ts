import { generateID } from '@/utils/generate-id';

import { socialIconsMock } from '../SocialIcons/mock';
import { tracksMock } from '../TracksTabs/mock';

import { FooterProps } from '.';

export const footerMock: FooterProps = {
	navigationLinks: {
		tracksNavigation: {
			heading: 'Trilhas',
			tracks: tracksMock.tracks,
		},
		helpNavigation: {
			heading: 'Ajuda',
			links: [
				{
					id: generateID(),
					text: 'Perguntas frequentes',
					href: '#duvidas',
				},
				{
					id: generateID(),
					text: 'Como funciona',
					href: '#como-funciona',
				},
			],
		},
		socialNavigation: {
			heading: 'Redes sociais',
			socials: socialIconsMock.items,
		},
	},
	companyName: 'Code Challenges',
};
