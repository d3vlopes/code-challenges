import { ImageModel } from './Image';

export interface HighlightModel {
	id: string;
	image: ImageModel;
	title: string;
	description: string;
}
