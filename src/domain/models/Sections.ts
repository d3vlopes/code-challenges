import {
	BenefitModel,
	FeatureModel,
	HighlightModel,
	PaymentMethodModel,
	QuestionModel,
	SectionModel,
	StepModel,
	TrackModel,
} from './_barrel';

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
	button: {
		text: string;
		href: string;
	};
	warningText?: string;
	paymentMethods: PaymentMethodModel[];
}

export interface NewsletterSectionModel extends SectionModel {
	titleHTML: string;
	description: string;
	buttonText: string;
}

export interface FaqSectionModel extends SectionModel {
	content: QuestionModel[];
}
