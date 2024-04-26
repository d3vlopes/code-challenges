import Image from 'next/image';

import { SocialIconModel } from '@/domain/models/SocialIcon';

import * as S from './styles';

export interface SocialIconsProps {
	items: SocialIconModel[];
}

export const SocialIcons = ({ items }: SocialIconsProps) => {
	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<a
						key={item.id}
						href={item.href}
						target="_blank"
						rel="noreferrer"
						title={item.name}
					>
						<Image src={item.src} alt={item.alt} width={30} height={30} />
					</a>
				);
			})}
		</S.Wrapper>
	);
};
