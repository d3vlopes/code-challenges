import { ImageModel } from './Image';

type TechnologiesIcon = ImageModel & {
	id: string;
};

export interface HeroModel {
	titleHTML: string;
	description: string;
	buttons: {
		checkoutButton: {
			text: string;
			href: string;
		};
		videoButton: {
			text: string;
		};
	};
	iframe: {
		src: string;
		title: string;
	};
	technologiesIcons: TechnologiesIcon[];
}
