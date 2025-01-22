import { FooterModel, HeaderModel, HeroModel } from './_barrel';

import {
	AboutSectionModel,
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
	about: AboutSectionModel;
	highlights: HighlightsSectionModel;
	tracks: TracksSectionModel;
	howItWorks: HowItWorkSectionModel;
	benefits: BenefitsSectionModel;
	checkout: CheckoutSectionModel;
	newsletter: NewsletterSectionModel;
	faq: FaqSectionModel;
	footer: FooterModel;
}
