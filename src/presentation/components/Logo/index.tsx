import Image from 'next/image';

import { ImageModel } from '@/domain/models/Image';

import * as S from './styles';

export type LogoProps = ImageModel;

export const Logo = ({ src, alt }: LogoProps) => {
	return (
		<S.Wrapper href="#">
			<Image src={src} alt={alt} width={211} height={45} />
		</S.Wrapper>
	);
};
