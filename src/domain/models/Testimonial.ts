import { ImageModel } from './Image';
import { SocialIconModel } from './SocialIcon';

export interface TestimonialModel {
	id: string;
	image: ImageModel;
	text: string;
	name: string;
	socials: SocialIconModel[];
}
