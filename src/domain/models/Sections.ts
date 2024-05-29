import { HighlightModel, SectionModel, TrackModel } from './_barrel';

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
