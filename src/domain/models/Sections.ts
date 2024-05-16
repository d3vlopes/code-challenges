import { HighlightModel, SectionModel } from './_barrel';

export interface HighlightsSectionModel extends SectionModel {
	content: HighlightModel[];
}
