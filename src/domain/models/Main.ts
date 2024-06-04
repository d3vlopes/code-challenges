import { HeaderModel, HeroModel } from './_barrel';

import {
	BenefitsSectionModel,
	HighlightsSectionModel,
	HowItWorkSectionModel,
	TracksSectionModel,
} from './Sections';

export interface MainModel {
	header: HeaderModel;
	hero: HeroModel;
	highlights: HighlightsSectionModel;
	tracks: TracksSectionModel;
	howItWorks: HowItWorkSectionModel;
	benefits: BenefitsSectionModel;
}
