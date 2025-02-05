import { generateID } from '@/utils/generate-id';

import { logoMock } from '../Logo/mock';
import { socialIconsMock } from '../SocialIcons/mock';

import { HeaderProps } from '.';

export const headerMock: HeaderProps = {
	logo: logoMock,
	navigationLinks: [
		{
			id: generateID(),
			href: '#trilhas',
			text: 'Trilhas',
		},
		{
			id: generateID(),
			href: '#beneficios',
			text: 'Benefícios',
		},
		{
			id: generateID(),
			href: '#depoimentos',
			text: 'Depoimentos',
		},
		{
			id: generateID(),
			href: '#duvidas',
			text: 'Dúvidas',
		},
	],
	socials: socialIconsMock.items,
};
