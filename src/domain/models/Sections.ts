import {
	BenefitModel,
	FeatureModel,
	HighlightModel,
	ImageModel,
	PaymentMethodModel,
	QuestionModel,
	SectionModel,
	StepModel,
	TrackModel,
} from './_barrel';

export interface AboutSectionModel extends SectionModel {
	logo: ImageModel;
	text: string;
}

export interface HighlightsSectionModel extends SectionModel {
	content: HighlightModel[];
}

export interface TracksSectionModel extends SectionModel {
	content: TrackModel[];
	cta: {
		textHTML: string;
		button: {
			text: string;
			href: string;
		};
	};
}

export interface HowItWorkSectionModel extends SectionModel {
	content: StepModel[];
}

export interface BenefitsSectionModel extends SectionModel {
	content: BenefitModel[];
}

export interface CheckoutSectionModel extends SectionModel {
	badgeText: string;
	features: FeatureModel[];
	originalPrice: string;
	salePrice: string;
	buttonText: string;
	buttonURL: string;
	warningText?: string;
	paymentMethods: PaymentMethodModel[];
	planHighlight: {
		heading: string;
		text: string;
	};
}

export interface NewsletterSectionModel extends SectionModel {
	titleHTML: string;
	description: string;
	buttonText: string;
	tracks: TrackModel[];
}

export interface FaqSectionModel extends SectionModel {
	content: QuestionModel[];
}
