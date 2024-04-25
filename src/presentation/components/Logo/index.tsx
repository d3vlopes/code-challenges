import Image from 'next/image';

import { ImageModel } from '@/domain/models/Image';

export type LogoProps = ImageModel;

export const Logo = ({ src, alt }: LogoProps) => {
	return (
		<a href="#">
			<Image src={src} alt={alt} width={211} height={45} />
		</a>
	);
};
