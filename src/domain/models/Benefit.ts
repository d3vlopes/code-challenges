import { IconModel } from './Icon';

interface FeatureModel {
	id: string;
	text: string;
}

export interface BenefitModel {
	id: string;
	icon: IconModel;
	name: string;
	description: string;
	featureHeading: string;
	features: FeatureModel[];
}
