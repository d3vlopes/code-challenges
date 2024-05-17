import { HeaderModel, HeroModel } from './_barrel';

import { HighlightsSectionModel } from './Sections';

export interface MainModel {
	header: HeaderModel;
	hero: HeroModel;
	highlights: HighlightsSectionModel;
}
