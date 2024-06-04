import { FeatureModel } from './Feature';
import { IconModel } from './Icon';

export interface BenefitModel {
	id: string;
	icon: IconModel;
	name: string;
	description: string;
	featureHeading: string;
	features: FeatureModel[];
}
