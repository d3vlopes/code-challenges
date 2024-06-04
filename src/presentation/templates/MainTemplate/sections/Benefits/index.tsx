import { BenefitsSectionModel } from '@/domain/models/Sections';
import { BenefitsCard } from '@/presentation/components/BenefitsCard';

import * as S from './styles';

export const BenefitsSection = ({
	id,
	heading,
	content,
}: BenefitsSectionModel) => {
	return (
		<S.Wrapper id={id}>
			<S.Title>{heading}</S.Title>

			<BenefitsCard items={content} />
		</S.Wrapper>
	);
};
