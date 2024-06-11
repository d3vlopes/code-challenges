import { HeaderModel, HeroModel } from './_barrel';

import {
	BenefitsSectionModel,
	CheckoutSectionModel,
	FaqSectionModel,
	HighlightsSectionModel,
	HowItWorkSectionModel,
	NewsletterSectionModel,
	TracksSectionModel,
} from './Sections';

export interface MainModel {
	header: HeaderModel;
	hero: HeroModel;
	highlights: HighlightsSectionModel;
	tracks: TracksSectionModel;
	howItWorks: HowItWorkSectionModel;
	benefits: BenefitsSectionModel;
	checkout: CheckoutSectionModel;
	newsletter: NewsletterSectionModel;
	faq: FaqSectionModel;
}
