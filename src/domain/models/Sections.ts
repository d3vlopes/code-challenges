import {
	BenefitModel,
	HighlightModel,
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
