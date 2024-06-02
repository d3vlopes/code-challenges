import Image from 'next/image';

import { BenefitModel } from '@/domain/models/Benefit';

import * as S from './styles';

export interface BenefitsCardProps {
	items: BenefitModel[];
}

export const BenefitsCard = ({ items }: BenefitsCardProps) => {
	return (
		<S.Wrapper>
			{items.map((item) => {
				return (
					<S.CardWrapper key={item.id}>
						<Image
							src={item.icon.src}
							alt={item.icon.alt}
							title={item.icon.title}
							width={80}
							height={80}
						/>

						<S.CardTitle>{item.name}</S.CardTitle>

						<S.CardDescriptionWrapper>
							<p>{item.description}</p>
						</S.CardDescriptionWrapper>

						<S.FeaturesWrapper>
							<h4>{item.featureHeading}</h4>

							<S.FeaturesItemWrapper>
								{item.features.map((feature) => {
									return (
										<S.FeatureItem key={feature.id}>
											<Image
												src="https://sa-east-1.graphassets.com/clvfs1ld70bcs07ke07bkdxol/clwwwkw8w1f0u07lyxpwu9jpi"
												alt="Ícone de positivo"
												width={40}
												height={40}
											/>

											<span>{feature.text}</span>
										</S.FeatureItem>
									);
								})}
							</S.FeaturesItemWrapper>
						</S.FeaturesWrapper>
					</S.CardWrapper>
				);
			})}
		</S.Wrapper>
	);
};
