import { ImageModel } from './Image';

type TechnologiesIcon = ImageModel & {
	id: string;
};

export interface HeroModel {
	titleHTML: string;
	description: string;
	button: {
		text: string;
		href: string;
	};
	technologiesIcons: TechnologiesIcon[];
}
