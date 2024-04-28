import { ImageModel } from './Image';
import { SocialIconModel } from './SocialIcon';

interface NavigationItem {
	id: string;
	href: string;
	text: string;
}

export interface HeaderModel {
	logo: ImageModel;
	navigationLinks: NavigationItem[];
	socials: SocialIconModel[];
}
