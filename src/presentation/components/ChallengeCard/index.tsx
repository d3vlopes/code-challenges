import Image from 'next/image';

import { ChallengeModel } from '@/domain/models/Challenge';

import * as S from './styles';

export type ChallengeCardProps = ChallengeModel;

export const ChallengeCard = ({
	title,
	technologies,
	description,
}: ChallengeCardProps) => {
	return (
		<>
			<S.Wrapper>
				<S.Header>
					<S.Title>{title}</S.Title>

					<S.TechnologyWrapper>
						<h4>Stack que você vai utilizar</h4>

						<S.TechnologyIconsWrapper>
							{technologies.map((item) => {
								return (
									<Image
										key={item.id}
										src={item.icon.src}
										alt={item.icon.alt}
										title={item.name}
										width={25}
										height={25}
									/>
								);
							})}
						</S.TechnologyIconsWrapper>
					</S.TechnologyWrapper>
				</S.Header>

				<S.Description>{description}</S.Description>
			</S.Wrapper>
		</>
	);
};
