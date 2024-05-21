import { ImageModel } from './Image';

interface TechnologyIcon {
	id: string;
	name: string;
	icon: ImageModel;
}

export interface ChallengeModel {
	title: string;
	technologies: TechnologyIcon[];
	description: string;
}
