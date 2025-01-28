import Image from 'next/image';

import { ImageModel } from '@/domain/models/Image';

import * as S from './styles';

export interface AvatarProps {
	image: ImageModel;
	size?: 'medium' | 'large';
}

export const Avatar = ({ image, size = 'medium' }: AvatarProps) => {
	return (
		<S.Wrapper size={size}>
			<Image fill src={image.src} alt={image.alt} />
		</S.Wrapper>
	);
};
