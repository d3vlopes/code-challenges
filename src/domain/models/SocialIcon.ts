import { ImageModel } from '@/domain/models/Image';

export interface SocialIconModel extends ImageModel {
	id: string;
	name: string;
	href: string;
}
